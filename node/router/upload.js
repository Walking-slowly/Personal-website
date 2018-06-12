module.exports = function (req, res, next) {
    res.json({files:req.files})
}