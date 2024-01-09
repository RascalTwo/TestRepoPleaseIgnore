import FluidIntakeList from '../models/fluidIntakeList.js';

// Create a new FluidIntakeList
export const createFluidIntake = async (req, res) => {
  const newItem = new FluidIntakeList({
    fluidType: req.body.fluidType,
    amount: req.body.amount,
  });
  try {
    await newItem.save();
    console.log(newItem);
    res.json(newItem);
  } catch (err) {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  }
};

// Read a new FluidIntakeList

export const getFluidIntake = async (req, res) => {
  try {
    const getItems = await FluidIntakeList.find();
    res.status(200).send(getItems);

    console.log(getItems);
  } catch (err) {
    if (err) return res.status(500).send(err);
  }
};

// Update a new FluidIntakeList
export const updateFluidIntake = async (req, res) => {
  try {
    const { id } = req.params;
    const updateEntry = await FluidIntakeList.findByIdAndUpdate(id, {
      fluidType: req.body.fluidType,
      amount: req.body.amount,
    });

    res.status(200).send(updateEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a new FluidIntakeList
