const schemaModel = require('./schema').getModel()
const common = require('./common')

exports.insertData = function (req, res) {
    common.insertFind(schemaModel, req.body).then(function(data) {
        res.json(data);
    });
}
