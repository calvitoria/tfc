import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModel from '../database/models/UsersModels';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const responseModelMock = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}

const errorRequestMock = {
  email: 'lol@admin.com',
  password: '$2a$PW'
}

describe('Testa endpoint de Login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(UsersModel, "findOne")
      .resolves(responseModelMock as UsersModel);
  });

  afterEach(()=> { sinon.restore() });

  // it('Verifica se a resposta é esperada ao passar email e senha válidos', async () => {
  //   const chaiHttpResponse = await chai.request(app).post('/login').send({
  //     email: 'admin@admin.com',
  //     password: 'secret_admin',
  //   });

  //   expect(chaiHttpResponse.status).to.be.equal(200);
  //   expect(chaiHttpResponse.body).to.have.property('token');
  // });

  it('Verifica se a resposta é esperada ao passar email ou senha inválidos', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(errorRequestMock);
  
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'Incorrect email or password'});
    expect(chaiHttpResponse.body).not.to.have.property('token');
    expect(chaiHttpResponse.status).to.be.equal(401);
  });

  it('Verifica se a resposta é esperada ao não passar email à requesição', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({  password: errorRequestMock.password   });
  
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled'});
    expect(chaiHttpResponse.status).to.be.equal(400); 
  });

  it('Verifica se a resposta é esperada ao não passar senha à requesição', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ email: errorRequestMock.email });
  
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled'});
    expect(chaiHttpResponse.status).to.be.equal(400);
    
  });

  // it('Verifica a rota login/validate', async () => {
  //   const chaiHttpToken = await chai.request(app).post('/login').send(responseModelMock);
    
  //   chaiHttpResponse = await chai.request(app).get('/login/validate')
  //   .send().set('Authorization', chaiHttpToken.body.token);
  
  //   expect(chaiHttpToken.status).to.be.equal(200);
  //   expect(chaiHttpResponse.body).to.deep.equal({ role: 'admin'}); 
  // });

});
