# A arte de criar bons puzzles
> **Por que um desafio pequeno pode ser genial — e um labirinto enorme pode ser entediante.**

Pesquisa de design para o **Lux Logic** · 25 de novembro de 2026

[Manual técnico de criação e validação](./PUZZLE_DESIGN.md)

## 1. O problema que deu origem à pesquisa

As primeiras versões do Circuito Avançado tinham corredores compridos, portas e alavancas. Elas eram solucionáveis, mas a solução era frequentemente evidente: andar, acionar e continuar. Aumentar o tabuleiro ou espalhar chaves não resolveu o problema.

A descoberta mais importante foi esta: **dificuldade não é o trabalho necessário para executar a solução; é o raciocínio necessário para descobri-la.**

Um bom puzzle cria uma pergunta interessante. O jogador observa, formula hipóteses, experimenta, revê seu plano e finalmente compreende uma relação que antes não tinha percebido. Esse instante de compreensão, frequentemente chamado de *aha moment*, é mais valioso que uma sequência longa de comandos.

## 2. O que aprendemos com os livros

### Stewart T. Coffin — *Puzzle Craft* (1992)

Coffin estuda puzzles físicos de encaixe, dissecação e montagem. Embora não esteja escrevendo sobre jogos digitais, suas ideias são especialmente úteis para jogos de grade.

No prefácio, ele defende o apelo dos puzzles simples. No primeiro capítulo, explica como experimentar formas em papelão e combinar subdivisões para evitar um excesso de peças triviais. A lição não é que todo desafio precise ser fácil, mas que a quantidade de peças não garante profundidade.

Nos capítulos sobre blocos intertravados, a posição de uma peça determina o que pode ser feito com as outras. O **Convolution Puzzle** (pp. impressas 27–28) exige uma ordem de desmontagem; o **Three Piece Block Puzzle** (pp. 28–29) é surpreendentemente difícil apesar de possuir poucas peças. Já o **Twelve-Piece Separation Puzzle** (pp. 59–60) pede deslocamentos intermediários de partes já montadas para liberar espaço.

**Aplicação ao Logic:** uma caixa pode abrir uma porta, ocupar o espaço de manobra de outra caixa e impedir que o robô volte. O jogador talvez precise mover uma caixa que já estava aparentemente no lugar certo, para só depois retornar com ela. O espaço vazio faz parte do problema.

Os exemplos de quadriláteros, blocos e Penny­doodle também mostram como um mesmo conjunto de peças pode produzir diferentes soluções ou objetivos. Não precisamos inventar uma regra nova para cada fase; podemos explorar novas relações entre as existentes.

### Josiane Davibida — *A utilização de desafios para estimular o raciocínio lógico dos alunos nas aulas de matemática* (2016)

A unidade didática do PDE/UNICENTRO propõe desafios para alunos do 7º ano do Ensino Fundamental. Seu foco é tornar a aprendizagem mais participativa e estimular raciocínio lógico, criatividade e autonomia.

A proposta organiza os desafios em dificuldade crescente: familiarização, atenção e concentração mais exigentes, depois maior autonomia. Recomenda experiências individuais, em duplas ou grupos, além de observação docente. Exercícios como Sudoku, dedução por pistas, palitos e restrições numéricas mostram que resolver não é simplesmente aplicar uma fórmula memorizada.

**Aplicação ao Logic:** ensinar cada mecanismo em situações claras antes de combiná-lo; permitir que o aluno descubra por si próprio; observar como ele formula e abandona hipóteses. Em fases difíceis, a discussão entre colegas pode revelar estratégias que um aluno isolado não perceberia.

A proposta pedagógica fundamenta essa direção, mas não demonstra experimentalmente que o Logic melhora o desempenho escolar. Isso precisa ser avaliado com os próprios alunos.

### Juliano Niederauer e Marla Fernanda Caumo de Aguiar — *Desafios e Enigmas*

O trecho fornecido reúne problemas de dedução, capacidade, combinações, sequências e raciocínio inverso.

No problema da travessia do rio (p. impressa 15), três pessoas precisam atravessar usando um barco com capacidade limitada. Duas delas podem viajar juntas, mas a terceira precisa viajar sozinha. Para transportar todos, é indispensável organizar retornos. Ir na direção oposta à meta pode ser a decisão correta.

Outro problema, sobre sucessivas transformações de uma quantia de dinheiro (p. 18), favorece resolver a partir do resultado final, invertendo as operações. Os problemas de associação entre pessoas, lugares e quartos (p. 14) exigem cruzar restrições em vez de adivinhar.

**Aplicação ao Logic:** desenhar a solução de trás para frente; perguntar o que precisa estar verdadeiro imediatamente antes da vitória; criar situações em que avançar e voltar são partes do mesmo plano.

## 3. O que dizem designers e comunidades

### Regras simples, consequências surpreendentes

Jonathan Blow, criador de *Braid* e *The Witness*, descreve um processo de explorar as consequências de uma mecânica e construir puzzles que revelem essas consequências. Isso inspira uma abordagem diferente de apenas combinar objetos aleatoriamente.

Uma discussão no r/gamedesign sobre momentos de descoberta aborda a diferença entre acrescentar etapas e construir uma revelação interessante. A conversa em r/puzzlevideogames sobre mecânicas de Sokoban destaca o potencial de regras que tanto ajudam como atrapalham.

O ponto em comum é que o elemento mais interessante não precisa ter uma função exclusivamente positiva. Uma alavanca que abre uma porta e fecha outra cria uma decisão; uma alavanca que apenas abre a única porta à sua frente frequentemente cria uma tarefa.

### Justiça, legibilidade e frustração

Nas discussões sobre puzzles justos versus frustrantes e sobre simplicidade, a profundidade aparece como algo diferente de acumular variáveis, ações ou obstáculos. Essas são opiniões qualitativas de participantes, não uma pesquisa representativa de todos os jogadores.

Randy Smith, em sua abordagem de design centrado no jogador, destaca a importância de tornar as possibilidades de interação compreensíveis. No Logic, grupos de portas e alavancas devem ser identificáveis sem depender exclusivamente de cor. O efeito de cada ação deve ser visível.

Discussões no Steam sobre Sokoban e avaliações de Sokobond também oferecem exemplos da importância de recuperar erros sem repetir trabalho desnecessário. Isso não significa eliminar consequências: significa permitir que o jogador aprenda com elas.

### Deadlocks: o erro que muda tudo

A documentação do JSoko diferencia tipos de estados mortos em Sokoban: caixas em posições inutilizáveis, caixas congeladas, regiões isoladas e situações em que os objetivos já não podem ser satisfeitos conjuntamente.

No Logic, empurrar uma caixa para um canto sem possibilidade de retirada, bloquear a única passagem ou fechar uma porta sem acesso ao interruptor de retorno podem produzir situações semelhantes.

É importante distinguir:

| Situação | Consequência |
|---|---|
| Beco sem saída | Basta retornar. |
| Bloqueio temporário | É necessário alterar o estado do cenário. |
| Deadlock | Não existe solução a partir daquele estado. |

Um deadlock pode ser um excelente elemento de design, desde que resulte de regras claras. Um botão de desfazer seria uma melhoria futura; reiniciar deve continuar disponível. O jogador não deve ser acusado de estar preso definitivamente sem uma condição comprovada.

## 4. Os jogos que servem de inspiração

| Jogo | Ideia a explorar, sem copiar mapas |
|---|---|
| Sokoban | Espaço de manobra, empurrões irreversíveis e ordem das caixas. |
| Portal | Conectar regiões de maneira inesperada e repensar trajetos. |
| The Witness | Descoberta de padrões e compreensão gradual de regras. |
| Braid | Consequências pouco óbvias de uma regra consistente. |
| Baba Is You | Repensar o papel de elementos e relações entre regras. |
| Chip's Challenge | Combinações de obstáculos, chaves e recursos. |

Esta tabela é uma síntese de inspiração de design, não uma análise completa de cada jogo.

## 5. Como isso muda o Logic

### Um exemplo conceitual

Imagine uma sala com uma caixa, duas portas, uma placa, uma alavanca e um par de portais.

1. A placa mantém aberta a passagem para o interruptor.
2. O interruptor abre o acesso ao portal, mas fecha a rota original.
3. O portal permite recuperar uma chave em outra região.
4. A caixa precisa ser retirada temporariamente da placa para liberar espaço de manobra.
5. O jogador precisa recuperar o acesso e reposicionar a caixa antes de sair.

A ideia é que as decisões interfiram entre si. O desafio não é uma sequência independente de tarefas. Esse exemplo ainda precisa de um mapa concreto e validação no motor.

### A diferença entre quantidade e interdependência

| Puzzle superficial | Puzzle profundo |
|---|---|
| Dez portas com dez chaves ao lado. | Duas portas que alternam estados e compartilham o acesso a uma chave. |
| Uma caixa empurrada em linha reta. | Uma caixa que precisa abrir uma passagem e depois sair do caminho. |
| Um teleporte que encurta um corredor. | Um teleporte indispensável cujo destino pode ser bloqueado. |
| Um labirinto enorme com uma saída. | Uma sala pequena em que uma decisão errada compromete a saída. |

## 6. Como saber se uma fase é boa?

O manual técnico define seis dimensões, avaliadas de 0 a 3: interdependência, ordem das ações, gestão espacial, consequências, descoberta e replanejamento. É uma rubrica interna, ainda não validada com alunos.

O processo proposto começa com a descoberta desejada, não com o desenho. Depois vem o conflito, o protótipo, a busca computacional, a reprodução no motor, o teste de atalhos e o teste humano.

Um algoritmo pode provar que encontrou uma solução. Não pode, sozinho, provar que uma criança se divertirá. Também não basta encontrar uma solução que use três mecanismos: devemos testar se existe outra que ignore os mecanismos e destrua o desafio pretendido. Se a busca atingir seu limite, o resultado é inconclusivo.

## 7. O lado pedagógico

O Logic pode oferecer experiências de decomposição de problemas, previsão de consequências, revisão de hipóteses e planejamento de ações. O objetivo é o aluno conseguir explicar **por que** sua solução funciona, não apenas chegar à bandeira.

Uma competição saudável pode motivar, mas o ranking não mede sozinho a aprendizagem. Tempo, erros, tentativas, pedidos de ajuda e explicações têm significados diferentes. Vale investigar se a penalização por tempo desestimula alunos que preferem pensar antes de agir.

## 8. Conclusão

O melhor puzzle não é necessariamente aquele com mais mecanismos. É aquele em que cada mecanismo tem uma razão para existir, interage com os outros e desafia o jogador a compreender o sistema.

**Regra de ouro do Lux Logic: desenhe primeiro a descoberta, depois o problema, e só então o mapa.**

## Referências e leituras

### Materiais fornecidos
- COFFIN, Stewart T. *Puzzle Craft*. Edição de 1992. Arquivo pc92.pdf. [Referência digital](https://www.cs.brandeis.edu/~storer/JimPuzzles/ZPAGES/zzzCoffinPCBook.html).
- DAVIBIDA, Josiane. *A utilização de desafios para estimular o raciocínio lógico dos alunos nas aulas de matemática*. PDE/UNICENTRO, 2016.
- NIEDERAUER, Juliano; AGUIAR, Marla Fernanda Caumo de. *Desafios e Enigmas*. Novera. Trecho fornecido, pp. impressas 12–19.

### Design e documentação
- [Jonathan Blow — processo de design de puzzles, Game Developer](https://www.gamedeveloper.com/design/indiecade-inside-jonathan-blow-s-puzzle-design-process)
- [Randy Smith — Designing Puzzles That Make Players Feel Smart](https://www.gamedeveloper.com/design/video-designing-puzzles-that-make-players-feel-smart)
- [GDC — Solving Puzzle Design](https://www.gdcvault.com/play/1023549/Level-Design-Workshop-Solving-Puzzle)
- [JSoko — Deadlocks](https://jsokoapplet.sourceforge.io/sokoban/deadlocks.html)

### Discussões da comunidade
- [Reddit/r/gamedesign — Designing Aha moments](https://www.reddit.com/r/gamedesign/comments/1d6aje7/designing_aha_moments_in_puzzle_games/)
- [Reddit/r/puzzlevideogames — Sokoban Mechanics](https://www.reddit.com/r/puzzlevideogames/comments/1e69aih/sokoban_mechanics/)
- [Reddit/r/puzzlevideogames — Fair versus frustrating](https://www.reddit.com/r/puzzlevideogames/comments/1ufju67/puzzle_game_fans_what_makes_a_puzzle_feel_fair/)
- [Reddit/r/puzzlevideogames — Simplicity is genius](https://www.reddit.com/r/puzzlevideogames/comments/1rmpjhm/puzzle_games_where_simplicity_is_genius/)
- [Steam — Sokoban: The RPG, undo e restart](https://steamcommunity.com/app/915080/discussions/0/3317353727660735312/)
- [Steam — avaliação de Sokobond](https://steamcommunity.com/profiles/76561198014473461/recommended/290260/)

### Nota de escopo
Este artigo sintetiza a pesquisa registrada em PUZZLE_DESIGN.md. O livro digitalizado de Coffin teve capítulos e diagramas selecionados examinados, não todas as 82 páginas integralmente. O material de Niederauer e Aguiar é um excerto de nove páginas. A proposta de Davibida foi examinada por suas seções metodológicas e exemplos relevantes. A página da GDC é referência complementar, não uma transcrição de palestra assistida. As discussões externas são registros qualitativos. As propostas para o Logic são interpretações e decisões de design, não resultados demonstrados pelas fontes.
