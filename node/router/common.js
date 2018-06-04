
module.exports = {
    // 分页查询
    pagingFind (model, parameter) {
        return new Promise(function (resolve,reject) {
            model.find().skip( (parameter.page-1)* parameter.num ).limit(Number(parameter.num)).sort({"_id":-1}).exec(function (err, res){
                if(err) {
                    resolve({ status : 0, flag : 'find data fail'})
                } else {
                     model.find( function(err, results) {
                        if(err) {
                            resolve({ status : 0, flag : 'find data fail'})
                        } else {
                            resolve({ status : 1, flag : 'find data success', result : res, total : results.length})
                        }
                    }) 
                }
            })
        });
    },

    // 插入数据
    insertFind (model, parameter) {
        var data = new model({
            title : parameter.title,                
            brief : parameter.brief,                           
            lick : 0,  
            Fabulous : 0,
            ueditor : parameter.ueditor,
            comment : [],
            time : new Date()                                        
        });
        return new Promise(function (resolve,reject) {
            data.save(function (err, res) {
                if(err) {
                    resolve({ status : 0, flag : 'add data fail'});
                } else {
                    resolve({ status : 1, flag : 'add data success'});
                }
            });
        });
    },

    // 详情查询
    detailsFind (model, parameter) {
        return new Promise(function (resolve,reject) {
            model.findById(parameter.id, {
                '_id':'tinyjoy',
                'title':'tinyjoy',
                'Fabulous':'tinyjoy',
                'comment':'tinyjoy',
                'lick':'tinyjoy',
                'ueditor':'tinyjoy'
            }, function(err, res){
                if(err) {
                    resolve({ status : 0, flag : 'find data fail'});
                } else {
                    var next, prev
                    model.find({'_id':{$lt:parameter.id}}, {'title':'tinyjoy'}, function(err,data){
                        if(!err){
                          next = data[data.length-1]
                          model.find({'_id':{$gt:parameter.id}}, {'title':'tinyjoy'}, function(err,data){
                            if(!err){
                              prev = data[0]
                              resolve({ status : 1, flag : 'find data success', result : res , next: next, prev: prev })
                            }
                          })
    
                        }
                    })          
                }
            });
        });
    },

    // 更新数据
    // Model.findByIdAndUpdate([conditions], [update], [options], [callback])　　
    updateData (model, parameter) {
        return new Promise(function (resolve,reject) {
            model.findByIdAndUpdate(parameter._id, parameter, function(err, res){
                if(err) {
                    resolve({ status : 0, flag : 'find data fail'});
                } else {
                    resolve({ status : 1, flag : 'find data success'});
                }
            });
        });
    },

    // 删除数据
    // Model.findOneAndRemove(conditions, [options], [callback])　　
    deleteDate (model, parameter) {
        return new Promise(function (resolve,reject) {
            model.findOneAndRemove(parameter.id, function(err, res){
                if(err) {
                    resolve({ status : 0, flag : 'find data fail'});
                } else {
                    resolve({ status : 1, flag : 'find data success'});
                }
            });
        });
    },

}