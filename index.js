const router = require('express').Router();

const userRoutes = require('./routes/user-routes.js');

router.use('/users', userRoutes);

module.exports = router;
