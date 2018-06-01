const schemaModel = require('./schema').getModel()
const common = require('./common')

exports.update = function (req, res) {
    common.updateData(schemaModel, req.body).then(function(data) {
        res.json(data);
    });
}