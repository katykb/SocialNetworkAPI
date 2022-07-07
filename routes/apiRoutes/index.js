const router = require('express').Router();
const thoughtRoutes = require('../../controllers/thoughtController');
const userRoutes = require('../../controllers/userController');


router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;