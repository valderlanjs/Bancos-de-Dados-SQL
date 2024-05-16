<h1>Dominando o SQL: Inserindo e Consultando Dados</h1>

<h2>Introdução</h2>

<p>O SQL (Structured Query Language) é uma linguagem de programação amplamente utilizada para gerenciar e manipular bancos de dados relacionais. Neste ebook, exploraremos como inserir novos dados em uma tabela e realizar consultas avançadas para recuperar informações específicas. Aprenderemos a traduzir requisitos em instruções SQL, aplicar filtros e condições, e dominar os conceitos fundamentais para trabalhar efetivamente com bancos de dados.</p>

<h2>Inserindo Dados em uma Tabela</h2>

<p>Antes de começar a inserir dados, é essencial ter uma estrutura de tabela bem definida. A transcrição assume que você já criou uma tabela chamada &quot;planets&quot; com as seguintes colunas: name, star_name, code, discovery_date, satellites e has_life.</p>

<p>Para inserir uma nova linha (ou registro) na tabela, utilizamos o comando <code>INSERT INTO</code>. Veja o exemplo:</p>

<pre><code class="language-sql">INSERT INTO planets (name, star_name, code, discovery_date, satellites)VALUES ('X45', 'Sol', 'ABC123', '1960-01-01', 10);</code></pre>

<p>Neste exemplo, estamos inserindo valores nas colunas name, star_name, code, discovery_date e satellites. Observe que a coluna has_life não foi mencionada, pois ela já possui um valor padrão <code>true</code> definido durante a criação da tabela.</p>

<p>É importante seguir algumas regras ao inserir dados:</p>

<ol>
    <li><strong>Ordem das colunas</strong>: As colunas devem ser listadas na mesma ordem em que foram definidas na tabela.</li>
    <li><strong>Tipos de dados</strong>: Os valores inseridos devem corresponder aos tipos de dados das colunas correspondentes.</li>
    <li><strong>Restrições</strong>: Quaisquer restrições definidas na tabela, como chaves primárias ou restrições de verificação, devem ser respeitadas.</li>
</ol>

<p>Após inserir um novo registro, é possível verificar se os dados foram inseridos corretamente executando um <code>SELECT</code>:</p>

<pre><code class="language-sql">SELECT * FROM planets;</code></pre>

<p>Este comando selecionará todos os registros e colunas da tabela &quot;planets&quot;.</p>

<h2>Consultando Dados</h2>

<p>O SQL oferece uma variedade de opções para consultar e filtrar dados de acordo com suas necessidades. Vamos explorar algumas das consultas mais comuns:</p>

<h3>Selecionando Colunas Específicas</h3>

<p>Em vez de selecionar todas as colunas com <code>SELECT *</code>, você pode especificar quais colunas deseja recuperar:</p>

<pre><code class="language-sql">SELECT name, star_name FROM planets;</code></pre>

<p>Este comando selecionará apenas as colunas &quot;name&quot; e &quot;star_name&quot; da tabela &quot;planets&quot;.</p>

<h3>Aplicando Filtros</h3>

<p>O comando <code>WHERE</code> permite aplicar filtros para recuperar apenas os registros que atendem a determinadas condições. Por exemplo:</p>

<pre><code class="language-sql">SELECT * FROM planets WHERE star_name = 'Sol';</code></pre>

<p>Esta consulta retornará todos os registros da tabela &quot;planets&quot; onde a coluna &quot;star_name&quot; é igual a 'Sol'.</p>

<p>Você pode combinar várias condições usando operadores lógicos como <code>AND</code> e <code>OR</code>. Por exemplo:</p>

<pre><code class="language-sql">SELECT * FROM planets WHERE discovery_date &gt; '1600-01-01' AND satellites &gt; 4;</code></pre>

<p>Esta consulta retornará todos os registros da tabela &quot;planets&quot; onde a data de descoberta é posterior a 1600-01-01 e o número de satélites é maior que 4.</p>

<h3>Operadores de Comparação</h3>

<p>Além de <code>=</code> (igual), <code>&gt;</code> (maior que) e <code>&lt;</code> (menor que), você pode usar outros operadores de comparação, como:</p>

<ul>
    <li><code>&gt;=</code> (maior ou igual)</li>
    <li><code>&lt;=</code> (menor ou igual)</li>
    <li><code>&lt;&gt;</code> ou <code>!=</code> (diferente)</li>
    <li><code>BETWEEN</code> (entre um intervalo de valores)</li>
    <li><code>LIKE</code> (correspondência de padrão em strings)</li>
    <li><code>IN</code> (verifica se um valor está em uma lista)</li>
</ul>

<p>Por exemplo:</p><pre><code class="language-sql">SELECT * FROM planets WHERE discovery_date BETWEEN '1500-01-01' AND '1700-12-31';</code></pre><p>Esta consulta retornará todos os registros da tabela &quot;planets&quot; onde a data de descoberta está entre 1500-01-01 e 1700-12-31.</p>

<h3>Ordenando Resultados</h3>

<p>Você pode ordenar os resultados de uma consulta usando a cláusula <code>ORDER BY</code>. Por exemplo:</p>

<pre><code class="language-sql">SELECT * FROM planets ORDER BY discovery_date DESC;</code></pre>

<p>Esta consulta retornará todos os registros da tabela &quot;planets&quot; ordenados pela coluna &quot;discovery_date&quot; em ordem decrescente.</p>

