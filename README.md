
# Controle do Parque Computacional

O projeto de Controle do Parque Computacional da SAR na UNICAMP visa otimizar e gerenciar eficientemente os recursos computacionais disponíveis na universidade. Será desenvolvido um sistema centralizado e automatizado para o monitoramento, alocação e gerenciamento desses recursos.

## Stack utilizada

**Front-end:** Vue.js, Semantic UI, Axios

**Back-end:** Node, GraphQL, Apollo Server

**Banco de dados:** MySQL



## Screenshots

![Tela inicial](https://img001.prntscr.com/file/img001/PGw94Q1zS5y8dKzIVXgAxQ.png)
Figura 1: Tela inicial

![Patrimônios](https://img001.prntscr.com/file/img001/BwlkWEHyST-OsRulK2mLqw.png)
Figura 2: Tela de Patrimônios

![API](https://img001.prntscr.com/file/img001/7GKGF7LNTQuacAnGKAx0yg.png)
Figura 3: API







## Autores

- [@daviesf](https://www.github.com/daviesf)
- [@SamukaCode](https://www.github.com/SamukaCode)
- [@NelsonModenezNeto](https://www.github.com/NelsonModenezNeto)
- [@NelsonLuisModenezJunior](https://www.github.com/NelsonLuisModenezJunior)





## Será usado por

Esse projeto é usado pelas seguintes empresas:

- Universidade Estadual de Campinas
- Secretaria de Administração Regional


## Documentação da API e WEB

Para possível uso externo, ressalta-se a licença [], permitindo a utilização do código, entretanto, deve-se dar os créditos. Seguem as 

A API é moldada usando GraphQL, o que a dá características específicas que se diferencia de uma API Rest, ou seja, não há diversos endpoints, apenas um, conforme o exemplo:

Quando falamos de "field", são as informações desejadas que se busca no banco, podendo escolher o que se busca, se são algumas informações ou todas.

#### Retorna todos os patrimônios:  

```http
  query Query {
  patrimonios {
    [fields requeridos]
  }
}

```

| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idPatrimonio`      | `id` |  O ID do item requerido. |
| `marca`      | `string` |  A marca do item requerido. |
| `modelo`      | `string` | O modelo do item requerido. |
| `status`      | `int` |  O status do item requerido. 1 para ativo, 2 para inativo, 3 para manutenção |
| `tipo`      | `string` |  O tipo do item requerido. |
| `idBancada`      | `int` | O ID da bancada em que o item é instanciado. |


#### Retorna um patrimônio pesquisado por ID:

```http
query Query($idPatrimonio: ID!) {
  patrimonio(idPatrimonio: $idPatrimonio) {
    [fields requeridos]
  }
}
```

| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idPatrimonio`      | `id` |  O ID do item requerido. |
| `marca`      | `string` |  A marca do item requerido. |
| `modelo`      | `string` | O modelo do item requerido. |
| `status`      | `int` |  O status do item requerido. 1 para ativo, 2 para inativo, 3 para manutenção |
| `tipo`      | `string` |  O tipo do item requerido. |
| `idBancada`      | `int` | O ID da bancada em que o item é instanciado. |

Nesse caso, solicita-se o ID, que deve ser colocado com **variables**:

| Variable   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idPatrimonio`      | `id` |  O ID do item requerido. |

=========================================

Seguem os fields para cada 'classe':

### Patrimônio:
| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idPatrimonio`      | `id` |  O ID do item |
| `marca`      | `string` |  A marca do item  |
| `modelo`      | `string` | O modelo do item |
| `status`      | `int` |  O status do item. 1 para ativo, 2 para inativo, 3 para manutenção |
| `tipo`      | `string` |  O tipo do item. |
| `idBancada`      | `int` | O ID da bancada em que o patrimônio é instanciado. |

### Bancada:
| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idBancada`      | `id` |  O ID da bancada. |
| `local`      | `string` |  O local da bancada. |
| `status`      | `int` | O status da bancada. 1 para ativa, 2 para inativa. |
| `apelido`      | `string` |  O 'apelido' da bancada, um nome pessoal de fácil identificação. |


### Chamados:
| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idChamado`      | `id` |  O ID do chamado. |
| `dataHora`      | `string` |  A data e hora em que o chamado foi aberto. |
| `assunto`      | `string` | O assunto do chamado. Título. |
| `detalhes`      | `string` |  Detalhes mais específicos. do chamado. |
| `status`      | `int` |  O status do chamado. 1 para pendente, 2 para concluído. |
| `idFuncionario`      | `int` | O ID do funcionário que abriu o chamado. |

### Consertos:
| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idConserto`      | `id` |  O ID do conserto. |
| `detalhes`      | `string` | Os detalhes do conserto. |
| `dataHora`      | `string` | A hora em que a manutenção foi feita. |
| `idPatrimonio`      | `int` |  O patrimônio em que foi feito manutenção |
| `idFuncionario`      | `int` |  O ID do funcionário que fez a manutenção. |

### Funcionário:
| Field   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idFuncionario`      | `id` |  O ID do funcionário. |
| `status`      | `int` |  O status do funcionário. 1 para ativo e 2 para desativado.|
| `nome`      | `string` | O nome do funcionário. |
| `tipo`      | `int` |  O tipo do funcionário. 1 para administrador e 2 para usuário comum |
| `email`      | `string` |  O email do funcionário. Precisa ser do Google. |
| `idSession`      | `string` | O id da sessão do usuário, não é chave estrangeira. **Parâmetro de segurança para login** |
| `idGoogle`      | `string` | O ID do Google do funcionário (SUB), não é chave estrangeira. **Parâmetro de segurança para login** |

=====================================

### Para iniciar a API:

É necessário possuir **Node.js** instalado do computador ou no servidor para que a API se instale.

1. Instalar node.js e git:
Para windows:
```
Acessar o site: https://nodejs.org/en
Fazer o download da versão mais recente.
Seguir o passo a passo da instalação.

Para o Git:
https://git-scm.com/downloads
Fazer o download da versão mais recente.
Seguir o passo a passo da instalação.

```
Para linux, passar os comandos em sequência no terminal:
```
sudo apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git-all
```

2. Clonar o repositório em questão com o seguinte comando no terminal.
```
git clone https://github.com/daviesf/projeto-integrador
```

3. Acessar a pasta em que o repositório foi clonado.
4. Acessar a pasta 'api':
```
cd api
```
5. Instalar todas as dependências para a API funcionar:
```
npm install
npm run build
```

6. É necessário alterar as informações do banco contidas no arquivo src/mysql.js. Informações em **MAIÚSCULAS** devem ser alteradas.
```
connection: {
		host: "IP DO SERVIDOR",
		user: "USUÁRIO DO SERVIDOR",
		password: "SENHA DO USUÁRIO",
		database: "BANCO USADO",
		port: "PORTA DO SERVIDOR - GERALMENTE 3306",
	}
```

7. Execute a API:
Se for em versão de desenvolvimento:
```
npm run dev
```
Se for em produção (o comando *npm run build* deve ser executado apenas uma vez):
```
npm run build
npm start
```

8. Para testar, acesse:
```
http://localhost:4000/
```

### Criação de tabelas no banco de dados:

Use os comandos abaixo para criação das 5 tabelas. Você pode copiá-los todos e colar juntos ou executá-los separadamente.
```
CREATE TABLE `bancadas` (
`idBancada` int NOT NULL AUTO_INCREMENT,
   `local` varchar(45) DEFAULT NULL,
   `status` int DEFAULT NULL,
   `apelido` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`idBancada`)
 ) ENGINE=InnoDB AUTO_INCREMENT=644 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 CREATE TABLE `chamados` (
   `idChamado` int NOT NULL AUTO_INCREMENT,
   `dataHora` varchar(45) DEFAULT NULL,
   `detalhes` varchar(200) DEFAULT NULL,
   `status` int DEFAULT NULL,
   `idFuncionario` int DEFAULT NULL,
   `assunto` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`idChamado`)
 ) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 CREATE TABLE `consertos` (
   `idConserto` int NOT NULL AUTO_INCREMENT,
   `detalhes` varchar(45) DEFAULT NULL,
   `dataHora` varchar(45) DEFAULT NULL,
   `idFuncionario` int DEFAULT NULL,
   `idPatrimonio` int DEFAULT NULL,
   PRIMARY KEY (`idConserto`)
 ) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 CREATE TABLE `funcionarios` (
   `idFuncionario` int NOT NULL AUTO_INCREMENT,
   `status` int DEFAULT NULL,
   `nome` varchar(45) DEFAULT NULL,
   `tipo` int DEFAULT NULL,
   `email` varchar(60) DEFAULT NULL,
   `idSession` varchar(72) DEFAULT NULL,
   `idGoogle` varchar(72) DEFAULT NULL,
   PRIMARY KEY (`idFuncionario`)
 ) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 CREATE TABLE `patrimonios` (
   `idPatrimonio` int NOT NULL,
   `marca` varchar(45) DEFAULT NULL,
   `modelo` varchar(45) DEFAULT NULL,
   `status` int DEFAULT NULL,
   `idBancada` int DEFAULT NULL,
   `tipo` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`idPatrimonio`),
   KEY `idbancada_idx` (`idBancada`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



