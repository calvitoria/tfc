import { Request, Response, NextFunction } from 'express';
import TeamsModel from '../database/models/TeamsModel';

const matchesTeamsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(422).json({
      message:
        'It is not possible to create a match with two equal teams',
    });
  }

  const home = await TeamsModel.findOne({ where: { id: homeTeam } });
  const away = await TeamsModel.findOne({ where: { id: awayTeam } });

  if (!home || !away) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default matchesTeamsValidation;
