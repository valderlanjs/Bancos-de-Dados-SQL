<h1>Trabalhando com Migrations no SQLize</h1>

<h2>Introdução</h2>

<p>No desenvolvimento de aplicações web, é comum a necessidade de criar e manipular tabelas no banco de dados. Anteriormente, utilizávamos a linguagem SQL diretamente no terminal ou em ferramentas visuais como o pgAdmin para realizar essas tarefas. No entanto, com o advento dos ORMs (Object-Relational Mapping), como o SQLize, podemos realizar essas operações de forma mais simples e organizada através das migrations.</p>

<p>As migrations são estruturas que facilitam a criação, manipulação e controle de versão das tabelas no banco de dados. Elas permitem que você defina as alterações necessárias no esquema do banco de dados por meio de código, em vez de ter que executar comandos SQL diretamente.</p>


<h2>O que são Migrations?</h2>

<p>Migrations são arquivos que descrevem as alterações que devem ser aplicadas ao esquema do banco de dados. Elas podem ser usadas para criar, modificar ou remover tabelas, colunas, índices e outras estruturas do banco de dados.</p><p>Cada migration é composta por dois métodos principais:</p>

<ol>
    <li><p><strong>Up</strong>: Este método contém as instruções para aplicar as alterações descritas na migration. Por exemplo, se a migration cria uma nova tabela, o método <code>up</code> conterá o código necessário para criar essa tabela.</p></li>
    <li><p><strong>Down</strong>: Este método contém as instruções para desfazer as alterações descritas na migration. Por exemplo, se a migration cria uma nova tabela, o método <code>down</code> conterá o código necessário para remover essa tabela.</p></li>
</ol>

<p>As migrations são executadas em ordem cronológica, permitindo que você mantenha um histórico das alterações feitas no esquema do banco de dados. Isso facilita o controle de versão e a colaboração em equipe, pois todos os desenvolvedores podem aplicar as mesmas alterações em seus ambientes locais.</p>

<h2>Criando uma Migration no SQLize</h2>

<p>No SQLize, podemos criar uma nova migration usando o comando <code>sequelize migration:create</code>. Este comando criará um novo arquivo de migration na pasta <code>migrations</code> do seu projeto. Por exemplo, para criar uma migration chamada <code>create-planet-table</code>, execute o seguinte comando:</p>

<pre><code>npx sequelize-cli migration:create --name create-planet-table</code></pre>

<p>Este comando criará um novo arquivo de migration na pasta <code>migrations</code> com um nome similar a <code>20230501123456-create-planet-table.js</code>. O número no início do nome do arquivo é um carimbo de data/hora que garante que cada migration tenha um nome único. O arquivo de migration recém-criado conterá os métodos <code>up</code> e <code>down</code> vazios, onde você pode adicionar o código para criar ou modificar as tabelas do banco de dados.</p>

<h2>Definindo o Esquema da Tabela</h2>

<p>Dentro do método <code>up</code> da migration, você pode definir o esquema da tabela que deseja criar ou modificar. No SQLize, você pode usar o objeto <code>QueryInterface</code> para executar consultas SQL. Por exemplo, para criar uma tabela chamada <code>planets</code> com as colunas <code>id</code>, <code>name</code> e <code>position</code>, você pode adicionar o seguinte código no método <code>up</code>:</p>


<pre><code class="language-javascript">await queryInterface.createTable('planets', {  id: {    type: Sequelize.INTEGER,    autoIncrement: true,    allowNull: false,    primaryKey: true  },  name: {    type: Sequelize.STRING,    allowNull: false  },  position: {    type: Sequelize.INTEGER,    allowNull: false  },  createdAt: {    type: Sequelize.DATE,    allowNull: false  },  updatedAt: {    type: Sequelize.DATE,    allowNull: false  }});</code></pre>

<p>Neste exemplo, estamos criando uma tabela chamada <code>planets</code> com as seguintes colunas:</p>

<ul>
    <li><code>id</code>: Um número inteiro que será gerado automaticamente e será a chave primária da tabela.</li>
    <li><code>name</code>: Uma string que representa o nome do planeta.</li>
    <li><code>position</code>: Um número inteiro que representa a posição do planeta.</li>
    <li><code>createdAt</code>: Uma data que representa quando o registro foi criado.</li>
    <li><code>updatedAt</code>: Uma data que representa quando o registro foi atualizado pela última vez.</li>
</ul>

<p>As opções <code>allowNull</code> e <code>primaryKey</code> definem se a coluna pode ter valores nulos e se ela é a chave primária da tabela, respectivamente.</p>

<h2>Desfazendo Alterações com o Método Down</h2>

<p>O método <code>down</code> é usado para desfazer as alterações feitas pelo método <code>up</code>. No caso de criar uma nova tabela, o método <code>down</code> deve remover essa tabela.</p>

<p>Por exemplo, para remover a tabela <code>planets</code>, você pode adicionar o seguinte código no método <code>down</code>:</p>

<pre><code class="language-javascript">await queryInterface.dropTable('planets');</code></pre>


<p>Este código simplesmente remove a tabela <code>planets</code> do banco de dados.</p>

<h2>Aplicando Migrations</h2>

<p>Depois de definir os métodos <code>up</code> e <code>down</code> na sua migration, você pode aplicar as alterações ao banco de dados usando o comando <code>sequelize db:migrate</code>.</p>

<pre><code>npx sequelize-cli db:migrate</code></pre>

<p>Este comando executará todas as migrations pendentes, aplicando as alterações descritas nos métodos <code>up</code>.</p>


<p>Se você precisar desfazer a última migration aplicada, você pode usar o comando <code>sequelize db:migrate:undo</code>.</p>

<pre><code>npx sequelize-cli db:migrate:undo</code></pre>

<p>Este comando executará o método <code>down</code> da última migration aplicada, desfazendo as alterações.</p>

<h2>Benefícios das Migrations</h2>

<p>Usar migrations oferece vários benefícios:</p>

<ol>
    <li><p><strong>Controle de Versão</strong>: As migrations permitem que você mantenha um histórico das alterações feitas no esquema do banco de dados, facilitando o controle de versão e a colaboração em equipe.</p></li>
    <li><p><strong>Consistência entre Ambientes</strong>: Aplicando as mesmas migrations em diferentes ambientes (desenvolvimento, teste, produção), você garante que o esquema do banco de dados seja consistente em todos os lugares.</p></li>
    <li><p><strong>Rastreabilidade</strong>: As migrations fornecem uma trilha de auditoria das alterações feitas no esquema do banco de dados, tornando mais fácil identificar e corrigir problemas.</p></li>
    <li><p><strong>Automação</strong>: As migrations podem ser facilmente integradas em processos de implantação automatizados, garantindo que o esquema do banco de dados seja atualizado corretamente sempre que uma nova versão do aplicativo for implantada.</p></li>
</ol>

<h1>Inserindo Dados no Banco com Sequelize</h1>

<h2>Introdução</h2>

<p>Como inserir dados em um banco de dados PostgreSQL utilizando o Sequelize, uma poderosa biblioteca ORM (Object-Relational Mapping) para Node.js. O Sequelize facilita a interação com bancos de dados relacionais, abstraindo a complexidade das queries SQL e fornecendo uma camada de abstração orientada a objetos.</p>

<h2>Configurando o Sequelize</h2>

<p>Primeiramente, vamos configurar o Sequelize em nosso projeto. Crie um novo arquivo chamado <code>config/sequelize.js</code> e adicione o seguinte código:</p>

<pre><code class="language-javascript">const Sequelize = require('sequelize');const database = require('./config');const sequelize = new Sequelize(database);module.exports = sequelize;</code></pre>

<p>Neste arquivo, estamos importando o pacote <code>sequelize</code> e o arquivo de configuração do banco de dados (<code>config.js</code>). Em seguida, criamos uma nova instância do Sequelize, passando as informações de conexão do banco de dados. Por fim, exportamos essa instância para ser utilizada em outros arquivos do projeto.</p><h2>Criando o Modelo</h2><p>Agora, vamos criar um modelo para representar a tabela &quot;planets&quot; em nosso banco de dados. Crie um novo arquivo chamado <code>models/Planet.js</code> e adicione o seguinte código:</p><pre><code class="language-javascript">const { DataTypes } = require('sequelize');const sequelize = require('../config/sequelize');const Planet = sequelize.define('Planet', {  name: DataTypes.STRING,  position: DataTypes.INTEGER}, {});module.exports = Planet;</code></pre><p>Neste arquivo, estamos importando o <code>DataTypes</code> do Sequelize, que nos permite definir os tipos de dados das colunas da tabela. Também importamos a instância do Sequelize que criamos anteriormente.</p><p>Em seguida, definimos o modelo <code>Planet</code> utilizando o método <code>define</code> do Sequelize. O primeiro argumento é o nome do modelo (que deve corresponder ao nome da tabela no banco de dados), e o segundo argumento é um objeto que define as colunas da tabela e seus respectivos tipos de dados.</p><p>Neste exemplo, estamos definindo duas colunas: <code>name</code> (do tipo <code>STRING</code>) e <code>position</code> (do tipo <code>INTEGER</code>). Por fim, exportamos o modelo para ser utilizado em outros arquivos do projeto.</p><h2>Inserindo Dados</h2><p>Agora que temos o modelo configurado, podemos inserir dados no banco de dados. Crie um novo arquivo chamado <code>index.js</code> na raiz do projeto e adicione o seguinte código:</p><pre><code class="language-javascript">const Planet = require('./models/Planet');async function insertPlanets() {  try {    await Planet.create({ name: 'Terra', position: 3 });    await Planet.create({ name: 'Vênus', position: 5 });    console.log('Planetas inseridos com sucesso!');  } catch (error) {    console.error('Erro ao inserir planetas:', error);  }}insertPlanets();</code></pre><p>Neste arquivo, estamos importando o modelo <code>Planet</code> que criamos anteriormente. Em seguida, definimos uma função assíncrona <code>insertPlanets</code> que utiliza o método <code>create</code> do Sequelize para inserir novos registros na tabela <code>planets</code>.</p><p>No exemplo acima, estamos inserindo dois planetas: &quot;Terra&quot; com a posição 3 e &quot;Vênus&quot; com a posição 5. Após a inserção bem-sucedida, exibimos uma mensagem no console. Caso ocorra algum erro durante a inserção, capturamos e exibimos o erro no console.</p><p>Por fim, chamamos a função <code>insertPlanets</code> para executar a inserção dos dados.</p><p>Para executar este código, abra o terminal, navegue até o diretório do seu projeto e execute o seguinte comando:</p><pre><code>node index.js</code></pre><p>Se tudo correr bem, você deverá ver a mensagem &quot;Planetas inseridos com sucesso!&quot; no console. Você também pode verificar se os dados foram realmente inseridos no banco de dados utilizando uma ferramenta de gerenciamento de banco de dados, como o pgAdmin ou o DBeaver.</p><h2>Conclusão</h2><p><p>Sinta-se à vontade para explorar a documentação oficial do Sequelize (https://sequelize.org/docs/v6/getting-started/). Com o Sequelize, você pode desenvolver aplicações robustas e escaláveis, abstraindo a complexidade do banco de dados subjacente e trabalhando com uma camada de abstração orientada a objetos.</p>

<h1>Consultar Dados no Banco de Dados com Sequelize</h1>

<h2>Introdução</h2>

<p>Após aprender a inserir dados no banco de dados utilizando o Sequelize, é hora de explorar como consultar esses dados armazenados. Diferentes maneiras de recuperar informações do banco de dados por meio de consultas SQL utilizando o Sequelize, um poderoso ORM (Object-Relational Mapping) para Node.js.</p>

<h2>Preparação</h2>

<p>Antes de iniciar as consultas, é importante garantir que você não estará inserindo novos dados a cada execução do código. Caso contrário, você pode acabar com registros duplicados no banco de dados. Para evitar isso, comente ou remova a parte do código responsável pela inserção de novos dados.</p><pre><code class="language-javascript">// Código para inserir novo planeta (comentado)// const newPlanet = await Planet.create({ name: &quot;Terra&quot; });</code></pre><p>Dessa forma, você pode manter o registro do que foi feito anteriormente sem afetar o banco de dados.</p>

<h2>Consultando Todos os Registros</h2>

<p>A maneira mais simples de consultar dados é recuperar todos os registros de uma tabela. Para fazer isso, você pode utilizar o método <code>findAll()</code> do Sequelize. Veja o exemplo:</p><pre><code class="language-javascript">const sePlanets = await Planet.findAll();console.log(sePlanets);</code></pre><p>Neste código, <code>sePlanets</code> é uma constante que armazena o resultado da consulta <code>findAll()</code> realizada na tabela <code>Planet</code>. O <code>console.log(sePlanets)</code> exibirá todos os registros encontrados.</p><p>Ao executar esse código, você verá uma saída semelhante a esta:</p><pre><code>[  {    id: 1,    name: 'Terra',    ...  },  {    id: 2,    name: 'Vênus',    ...  },  ...]</code></pre><p>Cada objeto dentro do array representa um registro da tabela, contendo os valores das colunas correspondentes.</p>

<h2>Consultando por ID (Chave Primária)</h2>

<p>Em muitos casos, você pode querer consultar um registro específico com base em sua chave primária (ID). O Sequelize fornece o método <code>findByPk()</code> para essa finalidade:</p><pre><code class="language-javascript">const planetaEspecifico = await Planet.findByPk(1);console.log(planetaEspecifico);</code></pre><p>Neste exemplo, <code>findByPk(1)</code> buscará o registro cuja chave primária é <code>1</code>. O resultado será armazenado na constante <code>planetaEspecifico</code> e exibido no console.</p><p>A saída será semelhante a:</p><pre><code>{  id: 1,  name: 'Terra',  ...}</code></pre>

<h2>Consultando por Condições</h2>

<p>Além de consultar por ID, você pode filtrar registros com base em outras condições. O método <code>findAll()</code> aceita um objeto de opções como parâmetro, permitindo que você especifique condições de filtragem usando a propriedade <code>where</code>.</p><pre><code class="language-javascript">const planetasTerra = await Planet.findAll({  where: {    name: 'Terra'  }});console.log(planetasTerra);</code></pre><p>Neste caso, <code>findAll()</code> buscará todos os registros onde a coluna <code>name</code> é igual a <code>'Terra'</code>. O resultado será armazenado na constante <code>planetasTerra</code> e exibido no console.</p><p>A saída será semelhante a:</p><pre><code>[  {    id: 1,    name: 'Terra',    ...  },  {    id: 2,    name: 'Terra',    ...  }]</code></pre><p>Você pode combinar várias condições usando operadores lógicos como <code>AND</code>, <code>OR</code>, etc. Por exemplo:</p><pre><code class="language-javascript">const planetsQuery = await Planet.findAll({  where: {    name: 'Terra',    id: {      [Op.gt]: 1 // Maior que 1    }  }});</code></pre><p>Neste caso, a consulta buscará todos os registros onde <code>name</code> é <code>'Terra'</code> e <code>id</code> é maior que <code>1</code>.</p>

<h2>Operadores de Consulta</h2>

<p>O Sequelize fornece uma ampla gama de operadores de consulta que podem ser usados na propriedade <code>where</code>. Alguns exemplos comuns incluem:</p><ul><li><code>[Op.eq]</code>: igual a</li><li><code>[Op.ne]</code>: diferente de</li><li><code>[Op.gt]</code>: maior que</li><li><code>[Op.gte]</code>: maior ou igual a</li><li><code>[Op.lt]</code>: menor que</li><li><code>[Op.lte]</code>: menor ou igual a</li><li><code>[Op.in]</code>: está contido em</li><li><code>[Op.notIn]</code>: não está contido em</li><li><code>[Op.like]</code>: correspondência de padrão (usando <code>LIKE</code> do SQL)</li></ul><p>Esses operadores podem ser importados do Sequelize:</p><pre><code class="language-javascript">const { Op } = require('sequelize');</code></pre><p>E então utilizados nas consultas:</p><pre><code class="language-javascript">const planetsQuery = await Planet.findAll({  where: {    name: {      [Op.like]: '%Ter%' // Contém 'Ter'    }  }});</code></pre><p>Neste exemplo, a consulta buscará todos os registros onde a coluna <code>name</code> contém a substring <code>'Ter'</code>.</p>

<h2>Ordenação e Limitação de Resultados</h2>

<p>Além de filtrar registros, você pode ordenar e limitar os resultados das consultas. O Sequelize fornece as opções <code>order</code> e <code>limit</code> para isso.</p><pre><code class="language-javascript">const planetsQuery = await Planet.findAll({  order: [    ['name', 'ASC'] // Ordenar por nome em ordem crescente  ],  limit: 2 // Limitar a 2 resultados});</code></pre><p>Neste exemplo, a consulta buscará todos os registros, ordenados pelo campo <code>name</code> em ordem crescente (<code>ASC</code>), e limitará o resultado a apenas 2 registros.</p>

