# lux.logic — Logic

Jogo educativo de robótica e lógica, com controle manual, programação por blocos, campanha e editor de fases.

## Formato de autoria dos mapas v1

Cada token representa uma célula. Separe tokens por espaços e linhas por quebras de linha. Todas as linhas devem ter a mesma largura. Os números identificam grupos de ligação, não coordenadas.

| Código | Tipo JSON | Significado |
|---|---|---|
| c | omitido | Caminho livre |
| # | wall | Parede |
| i | start | Posição inicial do robô |
| f | goal | Chegada |
| k1 | key | Chave do grupo 1, coletada ao passar |
| p1 | door | Porta fechada do grupo 1 |
| o1 | door | Porta aberta do grupo 1 |
| a1 | lever | Alavanca do grupo 1, acionada com interact |
| b1 | inverter | Botão inversor do grupo 1, acionado ao pisar |
| x | box | Caixa empurrável |
| s1 | plate | Placa de pressão do grupo 1 |
| t1 | teleport | Teleportador do grupo 1, exatamente dois por grupo |
| h | hole | Buraco: cair causa falha |
| v1 | bridge | Ponte inicialmente retraída do grupo 1 |
| a1:5 | lever | Alavanca temporizada por 5 turnos |
| b1:3 | inverter | Ativador temporizado por 3 turnos |

Grupos numéricos positivos são a convenção de autoria; o JSON legado também aceita letras, hífen e sublinhado (1–24 caracteres). A cor representa o grupo visualmente. Chaves abrem passagens vinculadas; alavancas e inversores comuns alternam estados; placas mantêm passagens abertas enquanto ocupadas. Na versão atual, mecanismos temporizados abrem temporariamente todas as passagens do grupo, não invertem individualmente os estados; expiração e pontes precisam de testes.

## Exemplo 8×8

```text
# # # # # # # #
# i k1 p1 c a2 # #
# # # # # p2 # #
# # h h # c # #
# # # # # c # #
# f c c c c # #
# # # # # # # #
# # # # # # # #
```

Solução de referência: right, right, right, right, interact, down, down, down, down, left, left, left, left.

## Regras

- Exatamente um início e uma chegada.
- Dimensões de 5 a 20 em cada eixo; 5×5 tutorial, 8×8 padrão, 12×12 avançado.
- Uma entidade inicial por célula; caixas podem ocupar placas durante a execução.
- Temporizadores de mecanismos usam turnos (1–100), não segundos.
- Cronômetro geral opcional usa segundos.
- O criador deve demonstrar uma solução válida antes de publicar.

## Contrato JSON

A notação textual é de autoria; o motor recebe JSON. O conversor textual ainda precisa ser versionado. Coordenadas começam em zero, x cresce à direita, y para baixo. Caminhos livres são omitidos do array tiles. Portas e pontes exigem open booleano; mecanismos temporizados recebem duration.

Exemplo de entidade: {"type":"lever","x":5,"y":1,"group":"2","duration":5}.

Objeto de fase: width, height, tiles e limit opcional (limite de blocos). Metadados da campanha: mode (manual/program), position, difficulty, time_limit_seconds, max_turns e revision.

## Comandos

Strings: up, down, left, right, interact, wait.
Repetição: {"type":"repeat","count":3,"body":["right"]}.
Condição: {"type":"if","direction":"up","then":["up"],"else":["right"]}. Verifica se o movimento é possível.
Controle manual usa strings; programação admite blocos.

## Backend

Motor: https://lux-logic.lux-tools.workers.dev

- GET /api/health, /api/manifest, /api/levels, /api/levels/:code
- POST /api/validate recebe level e program; POST /api/levels também exige title.

Campanha e ranking: https://lux-logic-ranking.lux-tools.workers.dev

- GET /api/campaign e /api/levels/:code/ranking
- POST /api/levels/:code/attempt recebe playerToken.
- POST /api/levels/:code/finish recebe playerToken, attemptId, alias e program.

Pontuação: máximo entre 1 e 10000 menos 20 por turno e, no modo programação, 40 por bloco. Recorde individual por fase e revisão. Apelidos, sem nomes completos. Replay no servidor não impede toda automação.

D1: lux_logic_levels, lux_logic_stage_rules, lux_logic_scores, lux_logic_attempts. R2: prefixo lux-logic/.

## Estado

Backend publicado na Cloudflare; 26 fases cadastradas na última atualização. Frontend, editor, conversor textual, versionamento do código do motor, revisão de soluções e testes HTTP de ponta a ponta ainda pendentes. Este documento descreve o contrato inicial, não uma homologação. Integração Pages/GitHub não configurada por este commit.

## Desenvolvimento local

`npm install`, `npm run dev`, `npm run build`. Frontend MVP usa a API de campanha, com cópia local de fallback. Código publicado dos Workers em backend/. O simulador local foi extraído do motor publicado. O parser está em src/map-parser.js.
