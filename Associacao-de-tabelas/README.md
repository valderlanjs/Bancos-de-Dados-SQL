<h1>Associações de Tabelas com Chaves Estrangeiras</h1>

<h2>Introdução</h2>

<p>Conceito de associações de tabelas em bancos de dados relacionais, utilizando chaves estrangeiras. Como criar duas tabelas relacionadas, onde uma tabela terá uma chave estrangeira que fará referência à chave primária da outra tabela. Essa relação permitirá que os dados de uma tabela sejam vinculados aos dados da outra tabela, estabelecendo uma conexão lógica entre elas.</p>

<p>Utilizaremos um exemplo prático envolvendo astronautas e suas respectivas naves espaciais. A tabela &quot;astronauta&quot; será a tabela principal, contendo informações básicas sobre os astronautas, enquanto a tabela &quot;nave&quot; conterá detalhes sobre as naves espaciais, incluindo a qual astronauta cada nave pertence.</p>

<p>Ao longo deste ebook, você aprenderá os seguintes conceitos:</p>

<ul>
    <li>Criação de tabelas em um banco de dados</li>
    <li>Definição de chaves primárias e chaves estrangeiras</li>
    <li>Inserção de dados em tabelas relacionadas</li>
    <li>Consulta de dados em tabelas relacionadas</li>
    <li>Importância das chaves estrangeiras para manter a integridade dos dados</li>
</ul>

<p>Prepare-se para mergulhar no mundo das associações de tabelas e chaves estrangeiras, um conceito fundamental para o desenvolvimento de aplicações robustas e eficientes com bancos de dados relacionais.</p>

<h2>Criando o Banco de Dados e as Tabelas</h2>

<p>Antes de começarmos, vamos criar um novo banco de dados chamado &quot;foreign_key&quot; e conectar-nos a ele. Em seguida, criaremos duas tabelas: &quot;astronauta&quot; e &quot;nave&quot;.</p>

<pre><code class="language-sql">CREATE DATABASE foreign_key;USE foreign_key;</code></pre>

h3>Tabela &quot;astronauta&quot;</h3>

<p>A tabela &quot;astronauta&quot; será nossa tabela principal, contendo informações básicas sobre os astronautas. Ela terá uma chave primária chamada &quot;id&quot;, que será um valor único e identificará cada astronauta de forma exclusiva.</p>

<pre><code class="language-sql">CREATE TABLE astronauta (    id INT PRIMARY KEY AUTO_INCREMENT,    nome VARCHAR(50) NOT NULL,    idade INT NOT NULL);</code></pre>


<p>Nesta tabela, temos os seguintes campos:</p>

<ul>
    <li><code>id</code>: Chave primária que identifica exclusivamente cada astronauta. É um valor inteiro auto-incrementado pelo banco de dados.</li>
    li><code>nome</code>: Nome do astronauta, com um tamanho máximo de 50 caracteres.</li><li><code>idade</code>: Idade do astronauta, armazenada como um valor inteiro.</li>
</ul>

<h3>Tabela &quot;nave&quot;</h3>

<p>A tabela &quot;nave&quot; conterá informações sobre as naves espaciais, incluindo o nome da nave, sua capacidade e a qual astronauta ela pertence. Essa última informação será armazenada como uma chave estrangeira, fazendo referência à chave primária da tabela &quot;astronauta&quot;.</p>

<pre><code class="language-sql">CREATE TABLE nave (    id INT PRIMARY KEY AUTO_INCREMENT,    nome VARCHAR(50) NOT NULL,    capacidade INT NOT NULL,    astronauta_id INT,    CONSTRAINT fk_astronauta        FOREIGN KEY (astronauta_id)        REFERENCES astronauta(id));</code></pre>

<p>Nesta tabela, temos os seguintes campos:</p>

<ul>
    <li><code>id</code>: Chave primária que identifica exclusivamente cada nave. É um valor inteiro auto-incrementado pelo banco de dados.</li>
    <li><code>nome</code>: Nome da nave espacial, com um tamanho máximo de 50 caracteres.</li>
    <li><code>capacidade</code>: Capacidade máxima de astronautas que a nave pode transportar, armazenada como um valor inteiro.</li>
    <li><code>astronauta_id</code>: Chave estrangeira que faz referência à chave primária <code>id</code> da tabela &quot;astronauta&quot;. Esse campo indica a qual astronauta a nave pertence.</li>
</ul>

<p>A chave estrangeira <code>astronauta_id</code> é definida através da restrição <code>CONSTRAINT fk_astronauta FOREIGN KEY (astronauta_id) REFERENCES astronauta(id)</code>. Essa restrição garante que o valor armazenado em <code>astronauta_id</code> deve corresponder a um <code>id</code> válido na tabela &quot;astronauta&quot;. Caso contrário, o banco de dados não permitirá a inserção ou atualização de dados na tabela &quot;nave&quot;.</p>

<h2>Inserindo Dados nas Tabelas</h2>

<p>Agora que temos nossas tabelas criadas, podemos inserir alguns dados de exemplo.</p>

<h3>Inserindo Dados na Tabela &quot;astronauta&quot;</h3>

<pre><code class="language-sql">INSERT INTO astronauta (nome, idade) VALUES    ('Neil Armstrong', 44),    ('Marcos Pontes', 49);</code></pre>

<p>Neste exemplo, estamos inserindo dois astronautas: &quot;Neil Armstrong&quot; com 44 anos de idade e &quot;Marcos Pontes&quot; com 49 anos de idade.</p>

<h3>Inserindo Dados na Tabela &quot;nave&quot;</h3>

<pre><code class="language-sql">INSERT INTO nave (nome, capacidade, astronauta_id) VALUES    ('Apollo 11', 6, 2);</code></pre>

<p>Aqui, estamos inserindo uma nova nave chamada &quot;Apollo 11&quot;, com capacidade para 6 astronautas, e associando-a ao astronauta com <code>id</code> 2, que é o &quot;Marcos Pontes&quot;.</p>

<h2>Consultando Dados em Tabelas Relacionadas</h2>

<p>Após inserir os dados, podemos consultá-los utilizando a cláusula <code>SELECT</code> do SQL. Vamos começar consultando a tabela &quot;astronauta&quot;:</p>

<pre><code class="language-sql">SELECT * FROM astronauta;</code></pre>

<p>Essa consulta retornará todas as linhas e colunas da tabela &quot;astronauta&quot;.</p>

<p>Agora, vamos consultar a tabela &quot;nave&quot;:</p>

<pre><code class="language-sql">SELECT * FROM nave;</code></pre>

<p>Essa consulta retornará todas as linhas e colunas da tabela &quot;nave&quot;. Observe que o valor <code>astronauta_id</code> é 2, correspondendo ao <code>id</code> do astronauta &quot;Marcos Pontes&quot; na tabela &quot;astronauta&quot;.</p>

<p>Podemos combinar as duas tabelas em uma única consulta usando a cláusula <code>JOIN</code>. Isso nos permitirá obter informações dos astronautas e suas respectivas naves em uma única consulta.</p>

<pre><code class="language-sql">SELECT a.nome AS 'Astronauta', n.nome AS 'Nave', n.capacidade AS 'Capacidade'FROM astronauta aJOIN nave n ON a.id = n.astronauta_id;</code></pre>

<p>Nesta consulta, estamos selecionando o nome do astronauta (<code>a.nome</code>), o nome da nave (<code>n.nome</code>) e a capacidade da nave (<code>n.capacidade</code>). A cláusula <code>JOIN</code> combina as duas tabelas com base na condição <code>a.id = n.astronauta_id</code>, que é a chave estrangeira na tabela &quot;nave&quot; que faz referência à chave primária da tabela &quot;astronauta&quot;.</p>

<p>O resultado dessa consulta será:</p>

<pre><code>+---------------+------------+------------+| Astronauta    | Nave       | Capacidade |+---------------+------------+------------+| Marcos Pontes | Apollo 11  |          6 |+---------------+------------+------------+</code></pre>

<p>Isso mostra que a nave &quot;Apollo 11&quot; pertence ao astronauta &quot;Marcos Pontes&quot; e tem capacidade para 6 astronautas.</p>

<h2>Importância das Chaves Estrangeiras</h2>

<p>As chaves estrangeiras desempenham um papel crucial na manutenção da integridade dos dados em um banco de dados relacional. Elas garantem que os valores inseridos em uma tabela correspondam a valores válidos em outra tabela, estabelecendo uma relação lógica entre elas.</p>

<p>No nosso exemplo, a chave estrangeira <code>astronauta_id</code> na tabela &quot;nave&quot; garante que cada nave esteja associada a um astronauta existente na tabela &quot;astronauta&quot;. Se tentarmos inserir uma nave com um valor de <code>astronauta_id</code> que não corresponda a um <code>id</code> válido na tabela &quot;astronauta&quot;, o banco de dados rejeitará essa operação, evitando a inserção de dados inconsistentes.</p>

<p>Além disso, as chaves estrangeiras também ajudam a manter a integridade dos dados quando realizamos operações de atualização ou exclusão. Por exemplo, se tentarmos excluir um astronauta da tabela &quot;astronauta&quot; que tenha naves associadas na tabela &quot;nave&quot;, o banco de dados pode impedir essa operação ou aplicar uma ação específica, como excluir também as naves associadas ou definir os valores de <code>astronauta_id</code> como nulos.</p>

<p>Essas restrições de integridade garantem que os dados permaneçam consistentes e confiáveis, evitando inconsistências e dados órfãos no banco de dados.</p>

<h2>Conclusão</h2>

<p>Compreender o conceito de chaves estrangeiras é fundamental para o desenvolvimento de aplicações robustas e eficientes com bancos de dados relacionais. Elas permitem estabelecer relações lógicas entre tabelas, mantendo a integridade dos dados e evitando inconsistências.</p>
