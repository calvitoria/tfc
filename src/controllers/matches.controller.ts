import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
// com
export default class MatchesController {
  constructor(private service = new MatchesService()) { }

  public getAll = async (req: Request, res: Response) => {
    const matchesList = await this.service.getAll();
    return res.status(200).json(matchesList);
  };

  public getInProgress = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (!inProgress) return this.getAll(req, res);

    let inProgressValue; // para bool
    if (inProgress === 'true') {
      inProgressValue = true;
    } else {
      inProgressValue = false;
    }

    const matchesList = await this.service.getInProgress(inProgressValue);
    return res.status(200).json(matchesList);
  };

  public insertMatchIP = async (req: Request, res: Response) => {
    const insertedMatch = await this.service.insertMatchIP(req.body);

    return res.status(201).json(insertedMatch);
  };

  public updateMatchIP = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { message } = await this.service.updateMatchIP(id);
    return res.status(200).json({ message });
  };

  public updateMatch = async (req: Request, res: Response) => {
    // testando try catch após conversa com o colega Brainon
    const { id } = req.params;
    const { body } = req;
    try {
      const { message } = await this.service.updateMatch(Number(id), body);
      return res.status(200).json({ message });
    } catch (e) {
      return res.status(500).json({ message: 'something went wrong' });
    }
  };
}
