const router = require('express').Router();
const connection = require('./connection');

const query = require('./query')
const insert = require('./insert')
const update = require('./update')
const deletes = require('./delete')

router.post('/getList',query.findData) // 分页获取列表
router.post('/insert',insert.insertData) // 插入数据
router.post('/details',query.findDetails) // 详情查询
router.post('/update',update.update) // 更新数据
router.post('/delete',deletes.delete) // 删除数据

module.exports = router;