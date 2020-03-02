const bodyParser = require('body-parser');
const db = require('./../db/db');
const url = require('url');
const path = require('path');
const express = require('express');

const app = express(); 


app.use(bodyParser.json());
app.use(urlencoded({extended:true}));


app.get('fetchCitiesForCountry',function(req,res){
    var out = {
        status : "500",
        message : ""
    };
    db.saafs(args,(err,data)=>{
        if(!err){
            out.status
            out.message
            res.status(out.status).send(out);
        }
    });

});


var saafs = function(args,callback){
    var query;
    var queryparams;
    mysql.format(query,queryparams);
    
    db.query(query,function(err,data){
        if(!err){
            callback(null,data);
        } else{
            callback(data,null);
        }
    })

}



var isValidUser = function (userId, userPhoneNumber) {
    return new Promise(function (resolve, reject) {
        db.validateUser(userId, userPhoneNumber).then(function (data) {
            //console.log(data);
            if (data.inputMobile === data.outputMobile) {
                resolve(true);
            } else if (data.inputMobile !== data.outputMobile) {
                resolve(false);
            }
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};



app.post(options.server.apiEndpoint + "/crm/updateLeadForRework", function (req, res) {
    var customerId = req.body.customerId;
    var assignGroupId = req.body.assignGroupId;
    var out = {
        error: false,
        status: 0,
        message: "",
    };

    deleteLoanRequestPromise = db.deleteLoanRequestDB(customerId);
    deleteCRMBankAllocationPromise = db.deleteCRMBankAllocationDB(customerId);
    deleteCRMStatusAuditPromise = db.deleteCRMStatusAuditDB(customerId);
    updateLeadForReworkPromise = db.updateLeadForReworkDB(customerId, assignGroupId);

    Promise.all([deleteLoanRequestPromise, deleteCRMBankAllocationPromise, deleteCRMStatusAuditPromise, updateLeadForReworkPromise]).then(function (data) {
        out.status = 200;
        out.message = "Lead Successfully Assigned For Rework";
        res.status(out.status).send(out);
    }).catch(function (err) {
        out.status = 500;
        out.message = "Error in assigning lead for rework";
        out.error = err;
        res.status(out.status).send(out);
    });
});