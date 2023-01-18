const cellDataModel = require('../models/cellDataModel');

const listAllCellData = async (req, res, next) => {
    try {
        // const { body } = req;
        const response = await cellDataModel.List();
        res.status(200).send({
            statusCode: 200,
            message: 'Get All Cell Data Success!',
            data: response
        });

    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            message: (err.message.split(':')[0] === 'forui') ? err.message.split(':')[1] : 'Sorry, we are having some issues, all cell data getting failed',
            error: 'Getting All Cell Data Error',
            data: {}
        });
    }
};

const saveCellData = async (req, res, next) => {
    try {
        const { body } = req;
        const response = await cellDataModel.saveCellData(body);
        res.status(200).send({
            statusCode: 200,
            message: 'Save All Cell Data Success!',
            data: response
        });
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            message: (err.message.split(':')[0] === 'forui') ? err.message.split(':')[1] : 'Sorry, we are having some issues, all cell data saving failed',
            error: 'Saving All Cell Data Error',
            data: {}
        });
    }
}

module.exports = {
    listAllCellData,
    saveCellData,
}
