import { Router } from 'express';

import getAnimaisLotesController from '../controllers/animaisLotes/getAnimaisLotes.controller';
import createAnimalLoteController from '../controllers/animaisLotes/createAnimalLote.controller';
// import updateAnimalController from '../controllers/animaisLotes/updateAnimal.controller';
// import deleteAnimalController from '../controllers/animaisLotes/deleteAnimal.controller';

const router = Router();

router.get("",getAnimaisLotesController);
router.post("",createAnimalLoteController);
// router.patch("/:id",updateAnimalLoteController);
// router.delete("/:id",deleteAnimalLoteController);

export default router;