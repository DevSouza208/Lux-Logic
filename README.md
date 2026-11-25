# lux.logic — Logic

**Um projeto público de jogos educativos, robótica, programação e raciocínio lógico.**

[🎮 Jogar Logic](https://lux-logic.pages.dev) · [📚 Pesquisa de puzzles](docs/PUZZLE_RESEARCH.md) · [🧩 Manual de design](docs/PUZZLE_DESIGN.md)

## Sobre o projeto

O Lux Logic nasceu para tornar o aprendizado de lógica e pensamento computacional mais divertido. O jogador controla um robô, resolve desafios, experimenta mecanismos e aprende a planejar soluções. O projeto é desenvolvido com atenção especial ao uso em sala de aula, mas pode ser utilizado por qualquer pessoa.

## Conhecimento aberto

Este repositório é um espaço de compartilhamento público. Tudo que puder ser disponibilizado com segurança e respeito aos direitos de terceiros será publicado aqui: pesquisas, documentação, instruções de uso, código do frontend, ferramentas, exemplos de fases e outros materiais originais do projeto.

Qualquer pessoa pode estudar, utilizar, copiar, modificar, adaptar, compartilhar e redistribuir os materiais originais disponibilizados, inclusive para fins educacionais, pessoais e comerciais, conforme a [licença MIT](LICENSE). Não é necessário pedir autorização adicional para esses usos, desde que sejam preservados os avisos exigidos pela licença.

A intenção é permitir que professores, estudantes, desenvolvedores e interessados aprendam com o projeto, criem suas próprias versões e contribuam com novas ideias.

**Transparência não significa expor dados privados.** Credenciais, chaves de API, dados pessoais de jogadores, informações de alunos e escolas, sessões administrativas e configurações sensíveis não devem ser publicados. A licença do repositório não concede acesso à infraestrutura hospedada, nem direitos sobre obras, marcas ou conteúdos de terceiros citados nas pesquisas.

## O que você encontra

| Recurso | Descrição |
|---|---|
| [Jogo online](https://lux-logic.pages.dev) | Controle manual, programação por blocos, trilhas, rankings e editor de fases. |
| [A arte de criar bons puzzles](docs/PUZZLE_RESEARCH.md) | Síntese de livros, referências de design e discussões da comunidade. |
| [Manual de design](docs/PUZZLE_DESIGN.md) | Critérios de autoria, dificuldade, interdependência e validação. |
| [Campanha de Natal](docs/CHRISTMAS_CAMPAIGN.md) | Roteiro e intenções dos 50 desafios natalinos, ainda em prévia DEV no jogo. |
| [Frontend](src/) | Interface, motor local e ferramentas de autoria. |
| [Backend](backend/) | Código de serviços disponibilizado neste repositório, sem credenciais de operação. |
| [Testes](tests/) | Materiais de validação e soluções de referência; podem conter spoilers. |

## Como jogar

Acesse o jogo online, escolha um apelido e emoji e selecione uma trilha. Não é necessário criar uma conta permanente de jogador. Use as setas para movimentar o robô ou os blocos no modo programação. No controle manual, a barra de espaço aciona a interação quando disponível. O progresso temporário é armazenado no navegador; encerrar a sessão limpa o progresso local.

## Desenvolvimento local

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
npm run build
npm test
```

O frontend utiliza APIs hospedadas e uma campanha local de fallback. Executar o frontend não cria automaticamente uma infraestrutura própria; para operar uma instância independente, configure seus próprios serviços e bancos, sem reutilizar credenciais de produção.

## Contribuições

Sugestões, relatos de bugs, pesquisas, melhorias de acessibilidade e propostas de puzzles são bem-vindos. Consulte o manual de design antes de propor novos desafios. Não envie dados pessoais, segredos ou materiais de terceiros sem autorização.

## Referência técnica de autoria

A documentação abaixo preserva a notação original de mapas e comandos. O desenvolvimento é contínuo; contratos e regras podem evoluir.

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


## Licença

O conteúdo original publicado neste repositório está disponível sob a [licença MIT](LICENSE). Dependências e materiais de terceiros conservam suas respectivas licenças e direitos. As referências bibliográficas são fornecidas para estudo; não representam uma autorização para reproduzir integralmente obras de terceiros.

**Aprender, compartilhar, criar e melhorar juntos.**
