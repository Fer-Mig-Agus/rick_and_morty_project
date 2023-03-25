
const axios=require("axios");


const URL_BASE="https://be-a-rym.up.railway.app/api" ;
const KEY="d640439ec558.6d012afc549ba6662537";

const successH=(response,res)=>{
    const {id,name,gender,status,origin,species,image}=response.data;
    res.writeHead(200,{"Content-Type":"aplication/json"})
    res.end(JSON.stringify({id,name,gender,status,origin,species,image}))
}

const failedH=(error,res)=>{
    res.writeHead(500,{"Content-Type":"text/plain"})
    res.end(error.message)

}

const getCharDetail=(res,id)=>{
    axios(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response => successH(response,res))
    .catch(error => failedH(error,res));

}

module.exports=getCharDetail;