import Ileaderboard from '../interfaces/Ileaderboard';
import sequelize from '../database/models';
import queries from '../utils/leaderboardQueries';

export default class LeaderboardService {
  private allHome: unknown;

  public async getHome() {
    // https://sequelize.org/docs/v6/core-concepts/raw-queries/ - uso de raw queries
    [this.allHome] = await sequelize.query(queries.homeCase);
    return this.allHome as Ileaderboard;
  }
}
