const router = require('express').Router();
const cellDataController = require('./controllers/cellDataController');

router.get(
    '/get-all-cell-data',
    cellDataController.listAllCellData
);

router.post(
    '/save-cell-data',
    cellDataController.saveCellData
);

module.exports = router;
