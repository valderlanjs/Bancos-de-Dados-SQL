<h1>Conhecendo a linguagem SQL</h1>

<h2>Introdução</h2>

<p>O SQL, abreviação de &quot;Structured Query Language&quot; (Linguagem de Consulta Estruturada em português), é uma linguagem padrão ANSI (American National Standards Institute) para gerenciamento de dados em bancos de dados relacionais.</p>

<p>Ela surgiu na década de 1970 e desde então se tornou a linguagem mais popular e amplamente utilizada para se trabalhar com bancos de dados relacionais. Alguns dos principais bancos de dados que utilizam SQL são Oracle, MySQL, Microsoft SQL Server, PostgreSQL entre outros.</p>

<p>O SQL permite realizar diversas operações nos dados armazenados nas tabelas de um banco de dados relacional, como:</p>

<ul>
    <li>Inserir novos dados</li>
    <li>Consultar e filtrar dados</li>
    <li>Atualizar dados existentes</li>
    <li>Excluir dados</li>
    <li>Criar e modificar estruturas de tabelas e bancos</li>
    <li>Controlar acessos e permissões aos dados</li>
    <li>Entre outras funcionalidades</li>
</ul>

<p>Essas operações são realizadas através de comandos SQL, que possuem uma sintaxe simples e de fácil aprendizado. Por ser uma linguagem declarativa e não procedural, o SQL foca no que deve ser feito e não no como deve ser feito.</p>

<p>Ou seja, ao invés de escrever uma série de passos para atingir um resultado, no SQL você simplesmente declara o resultado desejado e o banco de dados é responsável por determinar o melhor caminho para retornar os dados solicitados.</p>

<h2>Vantagens do SQL</h2>

<p>Algumas das principais vantagens do SQL incluem:</p>

<ul>
    <li><p><strong>Padronização</strong> - Por ser uma linguagem padronizada, o conhecimento em SQL pode ser aplicado na maioria dos bancos de dados relacionais.</p></li>
    <li><p><strong>Simplicidade e facilidade de aprendizado</strong> - A sintaxe SQL é simples e de alto nível, o que torna seu aprendizado relativamente fácil.</p></li>
    <li><p><strong>Alta performance</strong> - Os bancos de dados relacionais são otimizados para executar comandos SQL de forma rápida e eficiente.</p></li>
    <li><p><strong>Flexibilidade</strong> - O SQL permite fazer consultas e análises complexas com poucas linhas de código.</p></li>
    <li><p><strong>Portabilidade</strong> - Uma vez que o conhecimento em SQL pode ser aplicado na maioria dos bancos relacionais, se torna fácil migrar entre diferentes plataformas.</p></li>
    <li><p><strong>Segurança</strong> - O SQL possui comandos para gerenciar permissões e controles de acesso aos dados.</p></li>
</ul>

<h2>Principais comandos SQL</h2>

<p>Os principais comandos SQL utilizados para manipulação de dados são:</p>

<h3>SELECT</h3>

<p>O comando SELECT é usado para consultar e recuperar dados de uma ou mais tabelas em um banco de dados.</p>

<p>Sua sintaxe básica é:</p>

<pre><code class="language-sql">SELECT coluna1, coluna2, ...FROM minha_tabela;</code></pre>

<p>Exemplo selecionando todas as colunas:</p>

<pre><code class="language-sql">SELECT * FROM MinhaTabela;</code></pre>

<p>É possível adicionar cláusulas como WHERE para filtrar resultados, ORDER BY para ordenar, LIMIT para paginar entre outras.</p>

<h3>INSERT</h3>

<p>O comando INSERT é usado para inserir ou adicionar novas linhas (registros) em uma tabela.</p>

<p>Sintaxe básica:</p>

<pre><code class="language-sql">INSERT INTO minha_tabela (coluna1, coluna2, ...)VALUES (valor1, valor2, ...); </code></pre>

<p>Exemplo inserindo uma linha:</p>

<pre><code class="language-sql">INSERT INTO funcionarios (nome, cargo, salario)VALUES ('João Silva', 'Programador', 2500);</code></pre>

<h3>UPDATE</h3>

<p>O comando UPDATE é usado para modificar ou atualizar dados em linhas existentes de uma tabela.</p>

<p>Sintaxe:</p>

<pre><code class="language-sql">UPDATE minha_tabelaSET coluna1 = valor1,     coluna2 = valor2,...WHERE condição; </code></pre>

<p>Exemplo atualizando o salário do funcionário João Silva:</p>

<pre><code class="language-sql">UPDATE funcionariosSET salario = 3000WHERE nome = 'João Silva';</code></pre>

<h3>DELETE</h3>

<p>O comando DELETE é usado para remover linhas existentes de uma tabela.</p>

<p>Sintaxe:</p>

<pre><code class="language-sql">DELETE FROM minha_tabela WHERE condição;</code></pre>

<p>Exemplo excluindo o funcionário João Silva:</p>

<pre><code class="language-sql">DELETE FROM funcionariosWHERE nome = 'João Silva'; </code></pre>

<h2>Principais cláusulas SQL</h2>

<p>Além dos comandos básicos como INSERT, UPDATE, DELETE e SELECT, o SQL possui diversas outras cláusulas que permitem consultas mais avançadas e melhor controle sobre os dados.</p>

<p>Algumas das cláusulas mais utilizadas:</p>

<h3>WHERE</h3>

<p>A cláusula WHERE é utilizada junto com os comandos SELECT, UPDATE e DELETE para aplicar condições e filtrar resultados.</p>

<p>Exemplo:</p>

<pre><code class="language-sql">SELECT * FROM funcionariosWHERE salario &gt; 2000;</code></pre>

<h3>ORDER BY</h3>

<p>ORDER BY ordena o resultado de um SELECT de acordo com uma ou mais colunas especificadas.</p>

<pre><code class="language-sql">SELECT * FROM produtosORDER BY preco DESC; </code></pre>

<h3>GROUP BY</h3>

<p>GROUP BY agrupa linhas que possuem valores idênticos e é geralmente utilizado juntamente com funções de agregação como COUNT, MAX, MIN, SUM, AVG.</p>

<pre><code class="language-sql">SELECT categoria, COUNT(*) FROM produtosGROUP BY categoria;</code></pre>

<h3>LIMIT e OFFSET</h3>

<p>LIMIT e OFFSET permitem paginar resultados, especificando quantidade máxima de linhas e de qual registro iniciar.</p>

<pre><code class="language-sql">SELECT * FROM produtosLIMIT 10 OFFSET 30; </code></pre>

<h2>Operadores</h2>

<p>O SQL possui diversos operadores que permitem construir condições mais complexas dentro de cláusulas como WHERE e HAVING:</p>

<ul>
    <li><strong>Operadores de comparação</strong>: Igualdade (=), Diferença (&lt;&gt;, !=), Maior (&gt;), Menor (&lt;), Maior ou igual (&gt;=), Menor ou igual (&lt;=)</li>
    <li><strong>Operadores lógicos</strong>: AND, OR, NOT</li>
    <li><strong>Operadores aritméticos</strong>: Adição (+), Subtração (-), Multiplicação (*), Divisão (/)</li>
    <li><strong>Operadores de string</strong>: Concatenação (||)</li>
</ul>

<p>Exemplos usando diferentes operadores:</p>

<pre><code class="language-sql">SELECT * FROM produtosWHERE preco &gt;= 500 AND NOT categoria = 'brinquedos';SELECT nome || ' ' || sobrenome AS nome_completo FROM clientes;</code></pre>

<h2>Funções de agregação</h2>

<p>Funções de agregação são funções embutidas do SQL que permitem resumir e agregar dados de um conjunto de resultados.</p>

<p>As principais são:</p>

<ul>
    <li><strong>COUNT</strong> - Retorna a quantidade de linhas</li>
    <li><strong>SUM</strong> - Soma os valores de uma coluna numérica</li><li><strong>MAX</strong> - Valor máximo de uma coluna</li>
    <li><strong>MIN</strong> - Valor mínimo de uma coluna</li><li>
    <strong>AVG</strong> - Média dos valores da coluna</li>
</ul>

<p>Exemplo usando algumas funções:</p>

<pre><code class="language-sql">SELECT COUNT(*) AS qtde_produtos,       MAX(preco) AS maior_preco,         MIN(preco) AS menor_preco,       AVG(preco) AS preco_medioFROM produtos; </code></pre>

<h2>Junções (JOIN)</h2>

<p>As junções (JOIN) são utilizadas para combinar dados de duas ou mais tabelas, com base em uma relação entre certas colunas, como uma chave estrangeira.</p>

<p>Os principais tipos de JOIN's são:</p>

<ul>
    <li><strong>INNER JOIN</strong> - Retorna registros que possuem valores correspondentes em ambas as tabelas</li>
    <li><strong>LEFT JOIN</strong> - Retorna todos os registros da tabela da esquerda, mesmo que não existam correspondentes na tabela da direita</li>
    <li><strong>RIGHT JOIN</strong> - Retorna todos os registros da tabela da direita, mesmo que não existam correspondentes na tabela da esquerda</li>
</ul>

<p>Exemplo com INNER JOIN:</p>

<pre><code class="language-sql">SELECT clientes.nome, pedidos.valor FROM clientesINNER JOIN pedidos    ON clientes.id_cliente = pedidos.id_cliente;</code></pre>

<h2>Considerações Finais</h2>

<p>Desde os comandos básicos como INSERT, UPDATE, SELECT e DELETE até funcionalidades mais avançadas como agregações, junções, ordenação e paginação de dados.</p>

<p>O SQL é uma linguagem muito versátil e completa para realizar as mais diversas tarefas envolvendo obtenção e manipulação de dados, tornando-se uma skill essencial para qualquer profissional que trabalhe com banco de dados.</p>

<p>Portanto, dominar o SQL é fundamental para extrair o máximo potencial de qualquer banco de dados relacional, permitindo construir análises e relatórios de forma rápida e eficiente.</p>