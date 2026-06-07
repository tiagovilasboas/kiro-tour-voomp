# MCP Setup: Jira + Confluence + Azure DevOps

> Se o prompt do hands-on disser "can't access Jira/Confluence", use este guia para configurar os MCPs.

---

## Pré-requisitos

- Kiro instalado e logado
- `uvx` instalado (Python): `pip install uv` ou `brew install uv`
- `npx` instalado (Node.js): vem com o npm
- API token do Jira/Confluence: gere em https://id.atlassian.com/manage-profile/security/api-tokens

---

## 1. Atlassian (Jira + Confluence)

Arquivo: `~/.kiro/settings/mcp.json`

Adicione dentro de `"mcpServers"`:

```json
"mcp-atlassian": {
  "command": "uvx",
  "args": ["mcp-atlassian"],
  "env": {
    "JIRA_URL": "https://cogna.atlassian.net",
    "JIRA_USERNAME": "SEU_EMAIL@parceirosedu.com.br",
    "JIRA_API_TOKEN": "SEU_TOKEN_AQUI",
    "CONFLUENCE_URL": "https://cogna.atlassian.net/wiki",
    "CONFLUENCE_USERNAME": "SEU_EMAIL@parceirosedu.com.br",
    "CONFLUENCE_API_TOKEN": "SEU_TOKEN_AQUI"
  },
  "autoApprove": [
    "jira_search",
    "jira_get_issue",
    "jira_search_fields",
    "confluence_search",
    "confluence_get_page"
  ]
}
```

### Como gerar o token

1. Acesse: https://id.atlassian.com/manage-profile/security/api-tokens
2. Clique "Create API token"
3. Nome: "Kiro MCP"
4. Copie o token e cole em `JIRA_API_TOKEN` e `CONFLUENCE_API_TOKEN` (mesmo token funciona para ambos)

### Testar

No chat do Kiro, pergunte:
```
Qual a última task do projeto VSUS?
```

Se retornar um resultado, está funcionando.

---

## 2. Azure DevOps

Adicione dentro de `"mcpServers"`:

```json
"azure-devops": {
  "command": "npx",
  "args": ["-y", "@azure-devops/mcp", "kdop"],
  "env": {
    "ado_mcp_project": "PlataformaCogna-MKTP-MVP"
  },
  "disabled": false,
  "autoApprove": []
}
```

### Autenticação

O MCP do Azure DevOps usa a autenticação do Azure CLI. Se não estiver logado:

```bash
az login
```

### Testar

No chat do Kiro:
```
Liste os últimos 3 PRs do seller-greenn-back
```

---

## Estrutura completa do arquivo

Se o arquivo `~/.kiro/settings/mcp.json` não existir, crie com:

```json
{
  "mcpServers": {
    "mcp-atlassian": { ... },
    "azure-devops": { ... }
  }
}
```

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| "uvx not found" | `pip install uv` ou `brew install uv` |
| "Connection refused" | Token expirado. Gere um novo em id.atlassian.com |
| "No results" no Jira | Verifique se tem acesso ao projeto VSUS no Jira web |
| Azure DevOps "unauthorized" | Execute `az login` no terminal |
| MCP não aparece no Kiro | Reinicie o Kiro ou use Command Palette > "Reconnect MCP Servers" |

---

## Referência

Guia completo no Confluence: [Guia para configuração do MCP Atlassian](https://cogna.atlassian.net/wiki/spaces/Voomp/pages/2663088141)
