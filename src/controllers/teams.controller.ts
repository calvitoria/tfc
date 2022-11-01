import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

export default class TeamsController {
  constructor(private service = new TeamsService()) { }

  public getAll = async (req: Request, res: Response) => {
    const teamList = await this.service.getAll();
    return res.status(200).json(teamList);
  };

  public getTeam = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this.service.getTeam(id);
    return res.status(200).json(team);
  };
}
