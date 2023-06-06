const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

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