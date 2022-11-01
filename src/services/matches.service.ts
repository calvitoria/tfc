import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';

export default class MatchesService {
  private model;

  constructor() {
    this.model = MatchesModel;
  }

  public async getAll() {
    const matchesList = await this.model.findAll({
      include: [
        { model: TeamsModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return matchesList;
  }

  public async getInProgress(progressMatches:boolean) {
    const matchesList = await this.model.findAll({
      where: { inProgress: progressMatches },
      include: [
        { model: TeamsModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matchesList;
  }

  public async insertMatchIP(body:MatchesModel) {
    const insertedMatch = await this.model.create({
      ...body,
      inProgress: true,
    });

    return insertedMatch;
  }

  public async updateMatchIP(id:string) {
    await this.model.update({ inProgress: false }, {
      where: { id } });

    return { message: 'Finished' };
  }

  public async updateMatch(id:number, { homeTeamGoals, awayTeamGoals }:MatchesModel) {
    await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );

    return { message: 'Updated' };
  }
}
