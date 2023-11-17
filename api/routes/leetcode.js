const { default: axios } = require("axios")
const router = require("express").Router()
const Promises = require('bluebird')

const query = require('./Queries/userInfo')

//Changes Required
const codeforeces_URL_1='https://codeforces.com/api/user.rating?handle=akhilg11';
const codeforeces_URL_2='https://codeforces.com/api/user.info?handles=akhilg11';
try{
    router.get('/',async(req,res)=>{
        const response = await axios.get(query)       
        await res.send(response.data);
    });
    router.get('/codeforces',async(req,res)=>{
        const res1 = await axios.get(codeforeces_URL_1);
        const res2 = await axios.get(codeforeces_URL_2);
        const data = await Promises.all([res1.data,res2.data]);
        //Add both the responses in a single object and send it
        await res.send(data);
    })
}
catch(error){
    console.log(error);
}
     
module.exports = router;