const Axios = require('axios')
var issues_manipulate = require('./manipulate/issues')
require('dotenv').config()

module.exports = {
    projects: async () => {
        return await Axios.get('https://redmine.eperolehan.gov.my/projects.json', {
            headers: { "Authorization": `Basic ${process.env.AUTHORIZATION}` }
        })
            .then(response => {
                let resp = response.data
                return resp
            }).catch(err => {
                console.log(err)
            })
    },

    issue_id: async (id) => {
        return await Axios.get(`${process.env.REDMINE_URL}/issues/${id}.json`, {
            headers: { "Authorization": `Basic ${process.env.AUTHORIZATION}` }
        })
        .then(response=>{
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
    },

    statuses: async () => {
        return await Axios.get(`${process.env.REDMINE_URL}/issue_statuses.json`, {
            headers: { "Authorization": `Basic ${process.env.AUTHORIZATION}` }
        })
        .then(response=>{
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
    },

    issue_by_status: async (status_id) => {
        return await Axios.get(`${process.env.REDMINE_URL}/issues.json/?status_id=${status_id}`, {
            headers: { "Authorization": `Basic ${process.env.AUTHORIZATION}` }
        })
        .then(response => {
            return issues_manipulate.listing(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
