const schemaModel = require('./schema').getModel()
const common = require('./common')

exports.delete = function (req, res) {
    common.deleteDate(schemaModel, req.body).then(function(data) {
        res.json(data);
    });
}