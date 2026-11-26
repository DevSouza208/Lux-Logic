# Lux Logic — Manual de design de puzzles
Versão 1.0 — 25/11/2026

Documento normativo para autoria e revisão de fases. Não modifica o jogo por si só.

## 1. Princípio central
Dificuldade é raciocínio, não distância. O desafio deve exigir compreender relações, antecipar consequências e alterar estados do cenário. Um mapa pequeno pode ser especialista; um corredor de 100 passos pode ser trivial. A meta é a descoberta de uma solução elegante, não o desgaste.

## 2. Base bibliográfica e limites
- Josiane Davibida, *A utilização de desafios para estimular o raciocínio lógico dos alunos nas aulas de matemática*, PDE/UNICENTRO, 2016. Fundamentação e orientações metodológicas, páginas PDF 3–9; unidades de dificuldade crescente, Sudoku, dedução por pistas, palitos, restrições numéricas e problemas de travessia. A proposta é pedagógica para o 7º ano, não um estudo experimental que prove eficácia do Logic. Aplicação: hipóteses, autonomia gradual, explicação da solução, colaboração e observação docente.
- Stewart T. Coffin, *Puzzle Craft*, edição de 1992 (arquivo pc92.pdf, capa reaproveitada de 1985). Prefácio: preferência por simplicidade; capítulo 1, pp. impressas 5–11: dissecações, prototipagem e redução de peças; cap. 2, pp. 12–19: padrões, restrições e diferentes configurações com as mesmas peças; cap. 3, pp. 20–25: montagem espacial e soluções alternativas; cap. 4, pp. 26–29: intertravamento, Convolution (ordem e rotação), Three Piece Block (poucas peças, solução difícil); caps. 5–7: encaixes, pinos e geometria; cap. 10, pp. 53–54: diferentes formas, movimentos coordenados; cap. 12, pp. 59–60: Twelve-Piece Separation, deslocamentos intermediários para inserir peças. Aplicação: estado parcial, ordem, espaço de manobra, interdependência. O livro é digitalizado; análise seletiva dos capítulos e diagramas relevantes, não transcrição ou leitura integral de cada página.
- Juliano Niederauer e Marla Fernanda Caumo de Aguiar, *Desafios e Enigmas*, Novera, trecho fornecido de 9 páginas, pp. impressas 12–19. Problemas de restrições, exclusão lógica, permutação, capacidade, sequência e raciocínio inverso. Travessia do rio (p. 15): retorno necessário sob limite de carga. Santo Antônio (p. 18): trabalhar de trás para frente. Aplicação: recursos limitados, passos aparentemente regressivos, resolver a partir do objetivo. O arquivo é um excerto, não o livro completo.

## 3. Pesquisa externa
Fontes consultadas em 25/11/2026. Discussões são opiniões qualitativas, não consenso estatístico.
- [Jonathan Blow, processo de design — Game Developer](https://www.gamedeveloper.com/design/indiecade-inside-jonathan-blow-s-puzzle-design-process): explorar consequências inesperadas que permanecem consistentes com regras.
- [Randy Smith, princípios de design centrado no jogador](https://www.gamedeveloper.com/design/video-designing-puzzles-that-make-players-feel-smart): visibilidade, affordances, correspondência entre ação e resultado, linguagem visual, feedback e modelos mentais.
- [GDC 2016 — Solving Puzzle Design](https://www.gdcvault.com/play/1023549/Level-Design-Workshop-Solving-Puzzle): referência complementar; página de apresentação consultada, palestra integral não assistida.
- [Reddit — Designing Aha moments](https://www.reddit.com/r/gamedesign/comments/1d6aje7/designing_aha_moments_in_puzzle_games/): uma sequência longa de chaves e portas não se torna interessante só por ganhar etapas; partir da descoberta desejada.
- [Reddit — Sokoban Mechanics](https://www.reddit.com/r/puzzlevideogames/comments/1e69aih/sokoban_mechanics/): valor de uma regra que ajuda e atrapalha e interage com outras.
- [Reddit — Fair versus frustrating](https://www.reddit.com/r/puzzlevideogames/comments/1ufju67/puzzle_game_fans_what_makes_a_puzzle_feel_fair/): crítica à dificuldade artificial e valorização de descobertas.
- [Reddit — Simplicity is genius](https://www.reddit.com/r/puzzlevideogames/comments/1rmpjhm/puzzle_games_where_simplicity_is_genius/): exemplos de regras simples e profundidade.
- [Steam — Sokoban: The RPG, undo e restart](https://steamcommunity.com/app/915080/discussions/0/3317353727660735312/): expectativa de recuperação de erros.
- [Steam — avaliação de Sokobond](https://steamcommunity.com/profiles/76561198014473461/recommended/290260/): exemplo qualitativo de desafio minimalista com undo e reset rápido.
- [JSoko — Deadlocks](https://jsokoapplet.sourceforge.io/sokoban/deadlocks.html): células mortas, congelamento, regiões isoladas, incompatibilidade de objetivos e diagonais fechadas.
- [Coffin — edição digital de referência](https://www.cs.brandeis.edu/~storer/JimPuzzles/ZPAGES/zzzCoffinPCBook.html).

## 4. Regras de autoria
1. Definir a descoberta desejada em uma frase antes de desenhar o mapa.
2. Construir um conflito entre dois objetivos: abrir A fecha B; mover caixa para placa bloqueia retorno.
3. Criar dependências cruzadas, não uma fila de obstáculos independentes.
4. Dar ao mesmo objeto funções diferentes ao longo da solução.
5. Exigir ações de preparação e, quando pertinente, desfazer um progresso aparente.
6. Usar espaço de manobra como recurso. Uma célula vazia pode ser a peça mais importante.
7. Introduzir alternativas plausíveis e consequências previsíveis; nunca esconder regras indispensáveis.
8. Eliminar deslocamento sem decisão, objetos decorativos confusos e repetição por simetria.
9. Permitir soluções alternativas inteligentes quando não anularem a descoberta.
10. Garantir recuperação: reiniciar sempre, propor undo de movimento completo, não apenas posição do robô.
11. Um desafio deve ser original; usar referências conceituais, não copiar mapas de terceiros.
12. Usar tamanho apenas para legibilidade e espaço necessário.

## 5. Catálogo de padrões
| Padrão | Conflito | Teste |
|---|---|---|
| Porta inversora | Abrir uma passagem fecha outra | Precisa alternar estado ou contornar? |
| Caixa com dupla função | Caixa abre placa mas impede passagem | Precisa reposicionar ou escolher ordem? |
| Portal bloqueável | Caixa sobre destino impede teleporte | O bloqueio é visível e necessário? |
| Retorno obrigatório | Recurso usado para entrar é necessário para sair | Existe passo regressivo indispensável? |
| Câmara de transferência | Caixa deve atravessar gargalo e preservar espaço | Empurrar cedo demais produz impasse? |
| Chaves cruzadas | Acesso a chave depende de estado de outra região | Há dedução, não apenas coleta? |
| Placas concorrentes | Uma caixa não pode manter duas placas distantes | Reaproveitamento ou segunda caixa necessário? |
| Ponte temporária | Duração limita ações, não velocidade física | Contagem visível e solução determinística? |
| Inversor de passagem | Cruzar muda estado de portas | Reentrada pode desfazer estado? |
| Ordem de caixas | Uma caixa pode prender outra | Há ordem necessária demonstrável? |
| Portal + alavanca | Teleporte altera rota de acesso ao interruptor | Sem portal ou sem alavanca, vitória impossível? |
| Sacrifício controlado | Abandonar uma posição aparentemente vantajosa | A solução exige insight e não tentativa cega? |

### Exemplo conceitual, não mapa pronto
Saída exige placa P e chave K. Caixa C é necessária para P, mas primeiro deve manter uma passagem aberta para acessar o portal. Ao retornar com K, deve ser retirada de P temporariamente para liberar o corredor; depois reposicionada. Um empurrão contra canto pode prender C definitivamente. A solução precisa ser verificada no motor real antes de publicação.

## 6. Deadlocks e justiça
- Beco: retorno possível sem modificar estado.
- Bloqueio recuperável: exige alterar estado.
- Deadlock: nenhum caminho do estado atual à vitória, dadas as regras.
- Exemplos: caixa em canto sem placa, caixas congeladas juntas, caixa fecha único acesso a alavanca, destino de portal bloqueado, placa liberada cedo, chave isolada por porta sem retorno.
- Um erro deve ser atribuível a decisão do jogador, não a bug, informação invisível ou execução imprecisa.
- O motor deve distinguir cair em buraco de ficar preso sem solução. Não afirmar deadlock sem prova ou regra local segura.
- Undo recomendado: restaurar posição, caixas, portas, chaves usadas, temporizadores e histórico; tempo competitivo continua; definir política de erros no servidor antes de lançar. Reinício disponível sempre.
- Não transformar toda fase em tentativa punitiva. Incluir exploração reversível e desafios com diferentes taxas de impasse.

## 7. Rubrica de dificuldade (proposta interna, não escala validada)
Pontuar 0–3 cada dimensão: dependência entre mecanismos, ordem de ações, gestão espacial, consequências/irreversibilidade, profundidade da descoberta e necessidade de replanejamento. Total 0–18. 0–4 introdutório; 5–8 intermediário; 9–13 avançado; 14–18 especialista. Não usar dimensões, passos, tempo ou quantidade bruta de objetos como pontuação de design. Ajustar com testes humanos.
Para avançado, exigir pelo menos dois mecanismos essenciais interdependentes; especialista, pelo menos três e uma consequência não trivial. Exceções compactas podem ser justificadas em revisão humana.

## 8. Pipeline de criação
A. Descrever descoberta e estado final. B. Desenhar grafo de dependências e identificar conflito. C. Prototipar mínimo. D. Construir de trás para frente sem presumir que a inversão de um empurrão é legal. E. Rodar solver com estado completo. F. Reproduzir testemunha nos motores cliente e servidor. G. Remover um mecanismo por vez e procurar atalhos; também testar grupos de mecanismos juntos. H. Buscar estados mortos alcançáveis e registrar a ação que os causa. I. Teste humano sem dicas; observar hipóteses, hesitações, reinícios e explicação da descoberta. J. Refinar, versionar, publicar.

## 9. Validação técnica
Estado inclui posição, caixas, portas abertas, chaves consumidas, temporizadores restantes, estados de placas, teleporte, presentes e outras variáveis relevantes. Não usar apenas coordenadas como chave de busca. BFS para puzzles pequenos e determinísticos; A*/busca por empurrões para caixas grandes; limitar recursos explicitamente. Timeout significa inconclusivo, não insolúvel. Para provar deadlock, explorar integralmente estados alcançáveis ou usar uma condição suficiente comprovada. Para provar necessidade de mecanismo, bloquear sua utilização e procurar solução; não confundir uma testemunha que usa o mecanismo com necessidade universal. Testar também alteração de ordem, atalhos, estados intermediários, reset e replay. Comparar implementação real de placas, portas temporizadas e caixas; um solver paralelo não substitui o motor oficial.

## 10. Checklist de aprovação
- [ ] Descoberta central registrada.
- [ ] Dependências cruzadas e consequência previsível.
- [ ] Não há corredor obrigatório longo sem decisão.
- [ ] Todos os grupos são legíveis por cor e número.
- [ ] Uma solução executada no motor cliente e servidor.
- [ ] Testes de remoção/atalho confirmam mecanismos obrigatórios.
- [ ] Impasses conhecidos documentados; recuperação acessível.
- [ ] Teste humano com aluno ou colega sem conhecer solução.
- [ ] Layout legível no Chromebook e modo claro/escuro.
- [ ] Revisão e ranking compatíveis; não apagar recordes antigos, separar revisões.
- [ ] Fase não copia conteúdo protegido.
- [ ] Classificação baseada em raciocínio observado, não passos.

## 11. Aplicação ao Logic atual
As 50 fases avançadas existentes devem ser auditadas, não presumidas difíceis. Priorizar as 40 ainda não híbridas e aprofundar as 10 híbridas: uma sequência de três travas independentes ainda não prova interdependência. Próximas fases devem ter dependências de retorno, escolhas de ordem, caixas com papéis múltiplos, portais e portas que alterem o mesmo espaço. Não aumentar escopo de interface sem necessidade. Manter botão contextual. Natal permanece restrito DEV até liberação explícita. Nenhuma fase foi alterada por este documento.

## 12. Pedagogia e métricas
Registrar tentativas, erros recuperáveis, resets, dicas e tempo de resolução separadamente, sem confundir pontuação competitiva com aprendizagem. A criança deve poder explicar por que a solução funciona. Incentivar duplas nos desafios complexos, preservar experimentação e não punir leitura lenta. A fórmula atual de pontos penaliza tempo e movimentos; revisar futuramente se ela desestimula planejamento. Não coletar dados pessoais de alunos desnecessariamente.

## 13. Ficha de autoria
Código/revisão; objetivo; descoberta; regras; grafo de dependências; soluções; mecanismos essenciais; impasses e recuperação; alternativas aceitas; rubrica; testemunha; testes de motor; teste humano; decisão do revisor.

## Adição do idealizador — descoberta pela experimentação (25/11/2026)

Diretriz proposta por Reginaldo Souza: deixar o jogador testar, encontrar as relações entre mecanismos e aprender com suas próprias ações, em vez de antecipar toda a solução pela interface.

- Portas abertas devem parecer piso livre, sem símbolos ou números residuais; ao fechar, o obstáculo reaparece.
- Evitar números de grupo, linhas de conexão e previsões automáticas que entreguem relações que constituem a descoberta central do puzzle. Em desafios avançados, preferir que o jogador descubra essas relações experimentando.
- Manter o feedback **depois** da ação claro: quais barreiras apareceram ou desapareceram, quais estados mudaram e se o movimento foi possível.
- Não confundir descoberta com informação injustamente escondida: regras básicas, controles e consequências precisam ser consistentes; tutoriais e recursos de acessibilidade podem explicitar relações quando necessário.
- Preservar reinício e oportunidades de experimentar, inclusive quando uma decisão cria um impasse.

Esta é uma contribuição autoral do idealizador do Logic, não uma conclusão atribuída aos livros ou às discussões pesquisadas. A remoção de indicadores adicionais deve ser avaliada por trilha e implementada separadamente; esta atualização é documental.


## Modos de informação (diretriz do autor)

- Fácil: cores mostram os grupos de conexão dos mecanismos, sem números ou nomes de cores.
- Normal (padrão): nenhuma identificação de grupos no tabuleiro. O jogador pisa na placa, observa a passagem abrir, sai dela e deduz que uma caixa pode manter a passagem aberta.
- Editor: grupos continuam visíveis para autoria. A escolha de dificuldade é visual, sem alterar as regras do puzzle. Pontuação e ranking não são separados nesta versão.
