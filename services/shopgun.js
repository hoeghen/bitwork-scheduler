var request=require('request')
var api_key = '00ix2uliu8y2tobx8rowrshxwtr03g2b'
var api_secret = '00ix2uliu8w70qfdrafwhe4f1vukngas'
var baseurl = 'https://api.etilbudsavis.dk'

var offset = 0;
var pageSize = 100;
var stop = false;
var token;

var stores = [];


function getSession(){
    return new Promise(function(resolve,reject){
        request.post({
            baseUrl:baseurl,
            url:'v2/sessions',
            json:{'api_key':api_key}
        },function(error,resp,body){
            if(!error){
                console.log("shopgun session toke = "+body.token);
                token = body.token;
                resolve();
            }else{
                reject(error);
            }
        })
    })
}

function getStores(){
    return new Promise(function(resolve,reject){
        request.get({
            baseUrl:baseurl,
            url:'v2/stores',
            json:{'_token':token,'limit':pageSize,'offset':offset},
            headers:{'origin':'localhost'}
        },function(error,resp,body){
            if(error || body.message){
                reject(error+body.message);
            }else{
                resolve(body)
            }
        })
    })
}

function getAll(){
    var p = getSession()
    p.then(getAllStores)
    p.catch(handleError)
}
 
function getAllStores(){
        console.log('getStores ' + offset*pageSize + ' to ' + ((offset+1)*pageSize-1))
        var storesP = getStores();
        storesP.then(handleStores).catch(handleError);

}

function handleStores(stores){
    stores.forEach(function(item){
        
        console.log(item.branding.name + ":"+item.country.id + ":" + item.street);
    })
    if(stores.size < pageSize){
        stop = true;
    }else{
        offset++;
        getAllStores();
    }
}

function handleError(e){
    console.log(e);
}



module.exports = 
{
    getAll:getAll
}

