const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

    //this.before 
    this.before('POST', 'CaptainCool', async function (req) {
        var { fullname } = req.data
        // req.data = {
        //     "id": "4",
        //     "fullname": "varghese",
        //     "doj": "2008-09-01",
        //     "age": 40
        // }
        req.data.fullname = fullname.toUpperCase()

        // req.data = {
        //     "id": "4",
        //     "fullname": "VARGHESE",
        //     "doj": "2008-09-01",
        //     "age": 40
        // }
    })

    this.after('READ', 'CaptainCool', each =>

        each.age = each.age + 5

    )

    this.on('POST', 'CaptainCool', async function (req) {
        console.log(req.data)
        var { id, fullname, doj, age } = req.data;
        //insert query 
        var payload = {
            id: id,
            fullname: fullname,
            doj: doj,
            age: age
        }
        var query = INSERT.into`ironman.Employees`.entries(payload)

        var result = await cds.run(query)

        return result

    })





})