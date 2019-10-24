
module.exports = {
    listing: (cases) => {
        let log_case = []
        Object.keys(cases.issues).forEach(function(key) {
            let case_obj = cases.issues[key]
            let case_info = {
                case_no: case_obj.id,
                project: case_obj.project.name,
                priority: case_obj.priority.name,
                author: case_obj.author.name,
                assigned_to: case_obj.assigned_to.name,
                subject: case_obj.subject
            }
            log_case.push(case_info)
        });
        return {
            status: cases.issues[0].status.name,
            cases: log_case
        }
    }
} 