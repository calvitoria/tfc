import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

export default class LeaderboardController {
  constructor(private service = new LeaderboardService()) { }

  public getHome = async (req: Request, res: Response) => {
    const allHome = await this.service.getHome();
    return res.status(200).json(allHome);
  };
}
