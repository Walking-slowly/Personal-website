const schemaModel = require('./schema').getModel()
const common = require('./common')

module.exports = {
    // 分页查询
    findData (req, res) {
        common.pagingFind(schemaModel, req.body).then(function (data) {
            res.json(data);
        })
    },

    // 详情查询
    findDetails (req, res) {
        common.detailsFind(schemaModel, req.body).then(function (data) {
            res.json(data);
        })
    }
}
   
 