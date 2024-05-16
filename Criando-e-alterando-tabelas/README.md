<h1>Alterando Estruturas de Tabelas no SQL</h1>

<h2>Introdução</h2>

<p>Após criar e excluir tabelas, é fundamental saber como modificá-las de acordo com as necessidades do seu projeto. A capacidade de alterar tabelas é essencial para manter a integridade e a eficiência do seu banco de dados.</p>

<h2>Criando uma Tabela de Exemplo</h2>

<p>Antes de começarmos a alterar a estrutura de uma tabela, vamos criar uma tabela de exemplo chamada &quot;planets&quot;. Esta tabela terá as seguintes colunas:</p>

<pre><code class="language-sql">CREATE TABLE planets (    planet_id SERIAL PRIMARY KEY,    planet_name VARCHAR(100) NOT NULL,    star_name VARCHAR(100) NOT NULL,    galaxy VARCHAR(100) NOT NULL,    satellites INT NOT NULL,    has_life BOOLEAN NOT NULL);</code></pre>

<p>Aqui, criamos uma tabela chamada &quot;planets&quot; com as seguintes colunas:</p>
<ul>
    <li><code>planet_id</code>: Um identificador único para cada planeta (chave primária).</li>
    <li><code>planet_name</code>: O nome do planeta.</li>
    <li><code>star_name</code>: O nome da estrela à qual o planeta orbita.</li>
    <li><code>galaxy</code>: A galáxia à qual o planeta pertence.</li>
    <li><code>satellites</code>: O número de satélites (luas) que orbitam o planeta.</li>
    <li><code>has_life</code>: Um valor booleano que indica se o planeta possui vida ou não.</li>
</ul>

<h2>Adicionando uma Nova Coluna</h2>

<p>Para adicionar uma nova coluna à tabela, usamos o comando <code>ALTER TABLE</code> com a cláusula <code>ADD COLUMN</code>. Veja o exemplo:</p>

<pre><code class="language-sql">ALTER TABLE planets ADD COLUMN description TEXT;</code></pre>

<p>Neste caso, adicionamos uma nova coluna chamada &quot;description&quot; do tipo <code>TEXT</code> à tabela &quot;planets&quot;. Após executar este comando, a tabela terá uma nova coluna onde poderemos armazenar descrições detalhadas sobre cada planeta.</p>

<h2>Removendo uma Coluna</h2>

<p>Se precisarmos remover uma coluna da tabela, usamos o comando <code>ALTER TABLE</code> com a cláusula <code>DROP COLUMN</code>. Por exemplo:</p>

<pre><code class="language-sql">ALTER TABLE planets DROP COLUMN description;</code></pre>

<p>Este comando remove a coluna &quot;description&quot; que adicionamos anteriormente.</p>

<h2>Adicionando uma Restrição (Constraint)</h2>

<p>As restrições (constraints) são regras que garantem a integridade dos dados em uma tabela. Podemos adicionar uma restrição usando o comando <code>ALTER TABLE</code> com a cláusula <code>ADD CONSTRAINT</code>. Veja o exemplo:</p>

<pre><code class="language-sql">ALTER TABLE planets ADD CONSTRAINT check_satellites CHECK (satellites &gt;= 1);</code></pre>

<p>Neste caso, adicionamos uma restrição chamada &quot;check_satellites&quot; à tabela &quot;planets&quot;. Esta restrição garante que o valor da coluna &quot;satellites&quot; seja sempre maior ou igual a 1, impedindo a inserção de valores negativos ou zero.</p>

<h2>Definindo um Valor Padrão para uma Coluna</h2>

<p>Podemos definir um valor padrão para uma coluna usando o comando <code>ALTER TABLE</code> com a cláusula <code>ALTER COLUMN</code>. Veja o exemplo:</p>

<pre><code class="language-sql">ALTER TABLE planets ALTER COLUMN has_life SET DEFAULT TRUE;</code></pre>

<p>Este comando altera a coluna &quot;has_life&quot; da tabela &quot;planets&quot; para ter um valor padrão de <code>TRUE</code>. Isso significa que, sempre que uma nova linha for inserida na tabela sem especificar um valor para a coluna &quot;has_life&quot;, o valor padrão <code>TRUE</code> será atribuído automaticamente.</p>

<h2>Renomeando uma Coluna</h2>

<p>Se precisarmos renomear uma coluna existente, usamos o comando <code>ALTER TABLE</code> com a cláusula <code>RENAME COLUMN</code>. Por exemplo:</p>

<pre><code class="language-sql">ALTER TABLE planets RENAME COLUMN sun_name TO star_name;</code></pre>

<p>Este comando renomeia a coluna &quot;sun_name&quot; para &quot;star_name&quot; na tabela &quot;planets&quot;.</p>

<h2>Conclusão</h2>

<p>Aprender como alterar a estrutura de tabelas no SQL usando o comando <code>ALTER TABLE</code>. Vimos como adicionar, remover e renomear colunas, além de adicionar restrições e definir valores padrão. Essas operações são fundamentais para manter a integridade e a eficiência do seu banco de dados, permitindo que você adapte suas tabelas conforme as necessidades do seu projeto evoluem.</p>
