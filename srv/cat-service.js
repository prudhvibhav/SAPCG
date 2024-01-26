const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const { ARecords, Invoice } = this.entities;
    
    const service = await cds.connect.to('aribacus');
    
    this.on('READ', ARecords, request => {
        //console.log("Variable in ARecords ==> 1");
        const var1 = service.tx(request).get('/cus_PaymentDocType_V1');
        //console.log("Variable in ARecords ==> " + var1)
        return var1;
    });
    this.on('READ', Invoice, async request => {
        //console.log("Variable in AReqs ==> 1");
        const { Records } = await this.read(ARecords);
        //console.log("Variable in AReqs ==> 3 " + Records);

        return request.reply(Records);
    });

});