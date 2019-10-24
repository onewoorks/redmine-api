const Axios = require('axios')

var express = require('express');
var router = express.Router();

var issues_controller = require('../src/issues')

/* GET issues listing. */
router.get('/', async function (req, res, next) {
    issues_controller.projects().then(response => {
        res.json(response);
    })
});

router.get('/id/:id', async function (req, res, next) {
    issues_controller.issue_id(req.params.id)
        .then(response => {
            res.json(response)
        })
})

router.get('/statuses', async function (req, res, next) {
    issues_controller.statuses()
        .then(response => {
            res.json(response)
        })
})

router.get('/by-status-id/:status_id', async (req, res, next) => {
    issues_controller.issue_by_status(req.params.status_id)
    .then( response => {
        res.json(response)
    })
})

module.exports = router;
