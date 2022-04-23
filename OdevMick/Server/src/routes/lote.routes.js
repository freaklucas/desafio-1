import { Router } from 'express';
import getLotesController from '../controllers/lotes/getLotes.controller';
import createLoteController from '../controllers/lotes/createLote.controller';
import updateLoteController from '../controllers/lotes/updateLote.controller';

const router = Router();

router.get("",getLotesController);
router.post("",createLoteController);
router.patch("/:id",updateLoteController);
// router.delete("/:id",deleteAnimalController);

export default router;