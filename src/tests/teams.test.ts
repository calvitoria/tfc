import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import TeamsModel from '../database/models/TeamsModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const teamListMock = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  {
    "id": 4,
    "teamName": "Corinthians"
  },
  {
    "id": 5,
    "teamName": "Cruzeiro"
  },
  {
    "id": 6,
    "teamName": "Ferroviária"
  },
  {
    "id": 7,
    "teamName": "Flamengo"
  },
  {
    "id": 8,
    "teamName": "Grêmio"
  },
  {
    "id": 9,
    "teamName": "Internacional"
  },
  {
    "id": 10,
    "teamName": "Minas Brasília"
  },
  {
    "id": 11,
    "teamName": "Napoli-SC"
  },
  {
    "id": 12,
    "teamName": "Palmeiras"
  },
  {
    "id": 13,
    "teamName": "Real Brasília"
  },
  {
    "id": 14,
    "teamName": "Santos"
  },
  {
    "id": 15,
    "teamName": "São José-SP"
  },
  {
    "id": 16,
    "teamName": "São Paulo"
  }
]


describe('Testa endpoint Teams', () => {

  let chaiHttpResponse: Response;

   afterEach(()=> { sinon.restore() });

  it('Verifica se a rota get teams retorna todos os times', async () => {
    
    chaiHttpResponse = await chai.request(app).get('/teams');
  
    expect(chaiHttpResponse.body).to.deep.equal(teamListMock);
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('Verifica se a resposta é esperada ao buscar time por id', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/4');
  
    expect(chaiHttpResponse.body).to.deep.equal({
      "id": 4,
      "teamName": "Corinthians"
    });
    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});
