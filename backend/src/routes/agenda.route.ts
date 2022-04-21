import { Router } from 'express';
import * as agendaController from '../controllers/agenda.controller';

const router = Router();

router.get('/occurrence/:id', agendaController.getAgenda);

export { router as AgendaRouter };

