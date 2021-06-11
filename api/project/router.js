const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.project_id(req.params.project_id)
    .then(res => {
        res.status(200).json(res)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        custom: "ohhh",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router