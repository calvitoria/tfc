import TeamsModel from '../database/models/TeamsModel';

export default class TeamsService {
  private model;

  constructor() {
    this.model = TeamsModel;
  }

  public async getAll() {
    const teamListDB = await this.model.findAll();
    return teamListDB;
  }

  public async getTeam(id:string) {
    const team = await this.model.findOne({ where: { id } });
    return team;
  }
}
