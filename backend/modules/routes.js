const router = require('express').Router();

const cellDataRoutes = require('./cellData/cellDataRoutes');

router.use(cellDataRoutes);

module.exports = router;
