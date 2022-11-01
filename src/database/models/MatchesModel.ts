import { Model, INTEGER } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: number;
}

Matches.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    homeTeam: {
      type: INTEGER,
      allowNull: false,
    },

    homeTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },

    awayTeam: {
      type: INTEGER,
      allowNull: false,
    },

    awayTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },

    inProgress: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Matches',
    timestamps: false,
  },
);

Matches.belongsTo(Teams, {
  foreignKey: 'awayTeam',
  as: 'teamAway', // como o req quer o retorno do db
});
Matches.belongsTo(Teams, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});

Teams.hasMany(Matches, { // um time pode ter inúmeras partidas como teamHome ou teamAway
  foreignKey: 'awayTeam',
  as: 'teamAway',
});
Teams.hasMany(Matches, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});

export default Matches;
