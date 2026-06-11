# Plano de Reordenação, Coesão Narrativa e Ajuste de Tom

> **Status:** Planejamento (aguarda aprovação antes de aplicar)
> **Arquivos afetados:** `src/App.tsx`, `docs/GUIA-APRESENTACAO.md`

---

## 1. A pergunta central: existe coesão narrativa?

Coesão narrativa exige três elementos simultâneos:

| Elemento | Definição | Status atual |
|----------|-----------|-------------|
| **Fio vermelho** | Uma frase que atravessa todos os slides e o ouvinte consegue recuperar no final | Implícito, não declarado |
| **Arcos de tensão e resolução** | Cada problema criado é resolvido explicitamente | Parcial: algumas tensões ficam em aberto |
| **Eco de abertura e fechamento** | O ouvinte sai sentindo que chegou onde a capa prometeu | Quebrado: "do hype ao controle" não fecha no Hands-on |

**Veredicto:** a apresentação tem coerência lógica (cada slide faz sentido individualmente) mas não tem coesão narrativa completa (o ouvinte não sente a jornada como um arco resolvido).

---

## 2. Fio vermelho: o que atravessa tudo?

### Análise dos slides

Cada bloco da apresentação responde uma pergunta diferente:

| Bloco | Slides | Pergunta que responde |
|-------|--------|-----------------------|
| Fundação | 2-6 | "Como o modelo funciona?" |
| Desmitificar | 7-8 | "Por que falha e custa caro?" |
| Mercado | 9 | "Quem está tentando resolver?" |
| Kiro | 10-11 | "Como o Kiro foi projetado?" |
| Pilares | 12-15 | "O que usar no dia a dia?" |
| Prática | 16-17 | "Como começo agora?" |

O fio vermelho que conecta todas essas perguntas:

> **"O modelo é poderoso mas limitado. Quem entende os limites controla o resultado. Quem não entende, paga caro por loops."**

Esse fio precisa aparecer explicitamente em 4 momentos-chave:
1. **Capa**: prometida ("do hype ao controle")
2. **Slide 6 (Context Window)**: reforçada ("a janela tem limite, quem ignora paga")
3. **Slide 8 (Ilusão)**: aprofundada ("entender o limite muda como você escreve Steerings")
4. **Slide 16 (Hands-on)**: resolvida ("agora você tem o controle que a capa prometeu")

---

## 3. Arcos de tensão e resolução

### Mapa de tensões

| # | Tensão criada | Slide | Resolução atual | Slide | Gap |
|---|---------------|-------|-----------------|-------|-----|
| T1 | "O modelo processa em tokens" | 4 | "Steerings economizam tokens" | 4 e 6 | Fecha bem |
| T2 | "A janela tem limite" | 6 | "Steerings = contexto barato" | 6 | Fecha bem |
| T3 | "Big Techs cortando custos" | 7* | "Steerings = eficiência obrigatória" | 7 | Fecha no próprio slide |
| T4 | "O modelo não pensa de verdade" | 8* | ??? | Nunca | **GAP CRÍTICO** |
| T5 | "Nenhuma IDE é bala de prata" | 9 | "Kiro foi projetado pra rigor" | 10 | Fraco |
| T6 | "Existe muito mais no Kiro" | 11 | "Primeiro o básico" | 11 | OK |

*Após reordenação proposta (Rollback → slide 7, Ilusão → slide 8)

### Gap crítico: T4 — "o modelo não pensa"

A Ilusão do Pensamento cria uma tensão importante mas não a resolve.

O ouvinte fica com: *"Ok, o modelo não pensa. E daí? Isso muda o que eu faço?"*

A resposta existe espalhada nos slides 12-15, mas nunca como eco explícito.

**Proposta de resolução:** No slide de Steerings (13), adicionar uma frase que fecha explicitamente o loop da Ilusão:

> "Lembra que vimos que o modelo não raciocina, só faz matching de padrão? O Steering é exatamente isso: você coloca o padrão certo no lugar certo, antes da pergunta. Não é mágica. É geometria."

---

## 4. Eco de abertura e fechamento

### Diagnóstico

**Capa promete:** "do hype ao controle"

**Hands-on entrega:** "cole esse prompt"

Não há conexão explícita. O ouvinte não sente que chegou no "controle" prometido.

### Proposta: fechar o arco na fala do Hands-on

Adicionar ao script do slide 16 (Hands-on):

> "Na capa eu disse: do hype ao controle. Esse prompt é o controle. Não é genérico. Não é instalado de um repo de outra pessoa. São automações que emergem do seu contexto, dos seus fluxos, dos seus problemas. Isso é o que 'controle' significa aqui: você entende o sistema e usa com intenção."

---

## 5. Nova ordem proposta

### Mudança: trocar slides 7 e 8

```
ANTES:                          DEPOIS:
7. Ilusão do Pensamento    →    7. O Rollback da IA
8. O Rollback da IA        →    8. Ilusão do Pensamento
```

### Arco narrativo completo com nova ordem

```
FASE 1: FUNDAÇÃO (slides 1-6)
"Como o modelo funciona?"
→ O time aprende o mecanismo: tokens, embeddings, contexto

FASE 2: REALIDADE FINANCEIRA (slide 7)
"O que acontece quando você ignora os limites em escala?"
→ Urgência + problema concreto (Microsoft, Uber, loops)
→ TENSÃO: "se Big Techs erram, como eu uso certo?"

FASE 3: CAUSA TÉCNICA (slide 8)
"Por que isso acontece?"
→ O modelo não pensa. Faz matching. Sem contexto, entra em loop.
→ RESOLUÇÃO PARCIAL da tensão: "entender o limite é o primeiro passo"

FASE 4: MERCADO (slide 9)
"Quem está tentando resolver?"
→ IDEs diferentes, propósitos diferentes
→ GANCHO: "qual foi projetada pra resolver exatamente isso?"

FASE 5: KIRO COMO SISTEMA (slides 10-11)
"A resposta: Kiro foi projetado pra isso"
→ 4 pilares + mapa avançado

FASE 6: PILARES EM DETALHE (slides 12-15)
"Como usar na prática"
→ Spec → Steering → Skill → Hook
→ RESOLUÇÃO EXPLÍCITA de T4: Steerings fecham o loop da Ilusão

FASE 7: PRÁTICA (slide 16)
"Agora é sua vez"
→ ECO DA CAPA: "esse é o controle que prometemos"
→ RESOLUÇÃO FINAL: do hype ao controle, concretizado
```

---

## 6. Tom-âncora

**Tom único para toda a apresentação:**

> "Colega sênior que já perdeu tempo, dinheiro e sanidade com IA mal usada, e quer te poupar do mesmo caminho."

### Como isso se manifesta em cada bloco

| Bloco | Manifestação do tom |
|-------|-------------------|
| Fundação (2-6) | "Deixa eu explicar o que está por trás, porque isso vai mudar como você escreve cada Steering" |
| Rollback (7) | "Olha o que acontece quando ignora. Não é teoria. Aconteceu em junho." |
| Ilusão (8) | "E aqui está a razão técnica. Papers da Apple, não opinião minha." |
| IDEs (9) | "Cada um escolheu um caminho. Vou te contar o caminho do Kiro." |
| Kiro sistema (10-11) | "Vou te mostrar o mapa completo. Você não precisa chegar lá hoje." |
| Pilares (12-15) | "Isso você usa na task de amanhã. Não semana que vem." |
| Hands-on (16) | "Aqui está o controle que eu te prometi na abertura." |

---

## 7. Ajustes de transição (versão final)

| De → Para | Transição proposta |
|-----------|-------------------|
| Capa → Evolução | "Vamos começar de onde tudo começou." |
| Evolução → LLMs | "Chegamos na era dos agentes. O que está por baixo? Um LLM." |
| LLMs → Tokens | "E como esse modelo processa o que você digita? Em pedaços chamados tokens." |
| Tokens → Embeddings | "Tokens explicam o custo. Mas como o modelo entende o significado?" |
| Embeddings → Context Window | "Ótimo: sabemos que o modelo entende por proximidade. Mas tem um limite nessa memória." |
| **Context Window → Rollback** | **"Entendemos os limites técnicos. Agora veja o que acontece quando empresas ignoram esses limites em escala."** |
| **Rollback → Ilusão** | **"Vimos a fatura. Por que isso acontece com tanta frequência? Porque o modelo não funciona como intuitivamente imaginamos."** |
| **Ilusão → IDEs** | **"Agora temos o quadro completo: modelo com limites, custo real, empresas pagando a conta. Qual IDE foi desenhada pra lidar com isso de verdade?"** |
| **IDEs → Kiro Sistema** | **"O Kiro não competiu em velocidade. Foi projetado pra resolver exatamente o que acabamos de ver: contexto, loops, custo. Vamos ver como."** |
| Kiro Sistema → Kiro Avançado | "Esses 4 pilares resolvem 90% do dia a dia. Mas o sistema é maior. Deixa eu mostrar o mapa completo." |
| **Kiro Avançado → Spec** | **"O mapa está na mesa. Agora vamos dominar o que você usa amanhã. Começando pelo Spec."** |
| Spec → Steerings | "O Spec resolve o planejamento. Mas o que resolve o contexto que o modelo precisa ter antes de qualquer pergunta?" |
| Steerings → Skills | "Steerings são passivos: sempre ativos, você não pede. Skills são ativos: você invoca quando quer um fluxo completo." |
| Skills → Hooks | "Spec planeja. Steering contextualiza. Skill executa sob demanda. E quando você quer que aconteça automaticamente, por evento?" |
| **Hooks → Hands-on** | **"Você viu o sistema completo. Agora o Kiro vai descobrir o que faz sentido pra você especificamente, no seu contexto, com seus fluxos. Cole o prompt."** |
| Hands-on → Recursos | "Quem quiser ir mais fundo, aqui estão os melhores pontos de partida." |

**Negrito** = transições novas ou significativamente alteradas

---

## 8. Ajuste específico: fechar T4 no slide de Steerings

No script do slide 13 (Steerings), adicionar após a explicação principal:

> "Lembra que vimos que o modelo não raciocina — faz matching de padrão em alta escala? O Steering é exatamente isso trabalhando a seu favor: você coloca os padrões certos — os termos do domínio, as regras do time, o vocabulário da Voomp — antes de qualquer pergunta. O modelo parte do cluster semântico certo. Não é mágica. É geometria, como vimos nos Embeddings."

---

## 9. Ajuste específico: fechar o arco no slide Hands-on

No script do slide 16 (Hands-on), adicionar ao final:

> "Na capa eu disse: do hype ao controle. Esse prompt é o controle. Não é instalado de um repo de outra pessoa. São automações que emergem do SEU contexto. Você entende agora por que funciona — tokens, embeddings, janela, loops. E sabe como usar com intenção. Isso é o controle."

---

## 10. Checklist de execução

- [x] Criar este documento (planejamento)
- [x] Aprovado pelo usuário
- [x] Aplicar mudança de ordem no `App.tsx` (slides 7 e 8 trocados)
- [x] Atualizar arco narrativo no `GUIA-APRESENTACAO.md`
- [x] Atualizar transições de todos os slides no GUIA (ver seção 7)
- [x] Adicionar fechamento de T4 no script do slide 13 (Steerings)
- [x] Adicionar eco da capa no script do slide 16 (Hands-on)
- [x] Verificar compilação TypeScript
- [ ] Commit e push

---

## 11. O que NÃO mudar

- Ordem dos slides de fundação técnica (2-6): progressão correta e testada
- Kiro Avançado continua após Kiro Sistema: mostrar o mapa antes de mergulhar
- Ordem dos pilares (12-15): Spec → Steering → Skill → Hook é lógica e coesa
- Recursos no final: correto como fechamento

---

*Análise realizada em 11 de junho de 2026.*
