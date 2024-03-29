let http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
const data = require("./utils/data");


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if (url.includes("onsearch")) {
        const id = url.split("/").at(-1);
        getCharById(res, id);
    }
    if (url.includes("detail")) {
        const id = url.split("/").at(-1);
        getCharDetail(res, id);
    }


}).listen(3001, "localhost")














// http.createServer(function(req,res){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     const {url}=req;
//     if(url.includes("/rickandmorty/character/")){
//         const id=url.split("/").at(-1);
//         const character=data.find(char => char.id == id);
//         if(character){
//             res.writeHead(200,{"Content-Type":"aplication/json"})
//             return res.end(JSON.stringify(character))
//         }
//         res.writeHead(404,{"Content-Type":"aplication/json"})
//         return res.end(JSON.stringify({error:"Character not fount"}))
//     }}).listen(3001,"localhost");