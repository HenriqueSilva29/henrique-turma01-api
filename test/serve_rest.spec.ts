import pactum from 'pactum';
import { SimpleReporter } from '../simple-reporter';
import { faker } from '@faker-js/faker';
import { StatusCodes } from 'http-status-codes';

describe('Company API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api-desafio-qa.onrender.com';

  p.request.setDefaultTimeout(90000);

  beforeAll(() => {
    p.reporter.add(rep);
  });

  it('Deve criar um registro de empresa com sucesso', async () => {
    const empresa = {
      name: faker.word.words(3), // Gera um nome de empresa aleatório com 3 palavras
      cnpj: faker.string.numeric(14),
      state: faker.address.state(), // Gera um estado aleatório
      city: faker.address.city(), // Gera uma cidade aleatória
      address: faker.address.streetAddress(), // Gera um endereço aleatório
      sector: faker.commerce.department() // Gera um setor aleatório
    };

    await p.spec()
      .post(`${baseUrl}/company`)
      .withHeaders('monitor', false)
      .withJson(empresa)
      .expectStatus(StatusCodes.CREATED) // Verifica se o status é 201 Created
      .expectJsonLike({
        
      });
  });
  // Você pode adicionar outros testes aqui (como testes de falha, etc.)
});

describe('Company API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api-desafio-qa.onrender.com';

  p.request.setDefaultTimeout(90000);

  beforeAll(() => {
    p.reporter.add(rep);
  });

  it('Deve retornar a lista de empresas com sucesso', async () => {
    const response = await p.spec()
      .get(`${baseUrl}/company`) // Faz uma requisição GET na URL
      .withHeaders('monitor', false)
      .expectStatus(StatusCodes.OK) // Verifica se o status é 200 OK
      .expectJsonLike([ // Verifica se a resposta é um array e contém objetos
        {
        }
      ]);
      console.log(response.body); // Mostra o corpo da resposta no console
  });
  // Você pode adicionar outros testes aqui (como testes de falha, etc.)
});

describe('Company API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api-desafio-qa.onrender.com';

  p.request.setDefaultTimeout(90000);

  beforeAll(() => {
    p.reporter.add(rep);
  });

  it('Deve atualizar uma empresa com sucesso', async () => {
    await p.spec()
      .put(`${baseUrl}/company/45`) // Faz uma requisição PUT na URL com o ID da empresa
      .withHeaders('monitor', false)
      .expectStatus(StatusCodes.NOT_FOUND) // Verifica se o status é 200 OK
      .expectJsonLike({        
      });
  });
  // Você pode adicionar outros testes aqui (como testes de falha, etc.)
});

describe('Company API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api-desafio-qa.onrender.com';

  p.request.setDefaultTimeout(90000);

  beforeAll(() => {
    p.reporter.add(rep);
  });

  it('Deve obter uma empresa pelo ID com sucesso', async () => {
    const idToGet = Math.floor(Math.random() * 50) + 1; // Gera um ID aleatório entre 1 e 50

    await p.spec()
      .get(`${baseUrl}/company/${idToGet}`) // Faz uma requisição GET na URL com o ID
      .withHeaders('monitor', false)
      .expectStatus(StatusCodes.NOT_FOUND) // Verifica se o status é 200 OK

  });

  it('Deve deletar uma empresa com sucesso', async () => {
    const idToDelete = Math.floor(Math.random() * 50) + 1; // Gera um ID aleatório entre 1 e 50

    await p.spec()
      .delete(`${baseUrl}/company/${idToDelete}`) // Faz uma requisição DELETE na URL com o ID
      .withHeaders('monitor', false)
      .expectStatus(StatusCodes.OK); // Verifica se o status é 204 No Content
  });

  // Você pode adicionar outros testes aqui (como testes de falha, etc.)
});