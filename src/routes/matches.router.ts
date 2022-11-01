import { Router } from 'express';
import matchesTeamsValidation from '../utils/matchesTeamsValidation';
import tokenValidation from '../utils/tokenValidation';
import MatchesController from '../controllers/matches.controller';

const router = Router();
const controller = new MatchesController();

router.get('/', controller.getInProgress);
router.post('/', matchesTeamsValidation, tokenValidation, controller.insertMatchIP);
router.patch('/:id/finish', controller.updateMatchIP);
router.patch('/:id', controller.updateMatch);

export default router;
