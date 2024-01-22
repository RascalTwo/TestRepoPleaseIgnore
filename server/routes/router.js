import express from 'express';
import {
  createFluidIntake,
  createWaterIntakeGoal,
  getFluidIntake,
  getWaterIntakeGoal,
  updateFluidIntake,
  deleteFluidIntake,
} from '../controllers/fluidIntake.js';

const router = express.Router();

// GET
router.get('/api/fluidIntakeLog', getFluidIntake);
router.get('/api/waterIntakeGoal', getWaterIntakeGoal);

// POST
router.post('/api/fluid', createFluidIntake);
router.post('/api/waterIntakeGoal', createWaterIntakeGoal);

// PUT
router.put('/api/fluid/:id', updateFluidIntake);

// DELETE
router.delete('/api/fluid/:id', deleteFluidIntake);

export default router;
