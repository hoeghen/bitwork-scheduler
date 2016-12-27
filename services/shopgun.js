var request=require('request')
var api_key = '00ix2uliu8y2tobx8rowrshxwtr03g2b'
var api_secret = '00ix2uliu8w70qfdrafwhe4f1vukngas'
var baseurl = 'https://api.etilbudsavis.dk'

function getSession(){
    request.post({
        baseUrl:baseurl,
        url:'v2/sessions',
        json:{'api_key':api_key}
    },function(error,resp,body){
        console.log(error)
        console.log(resp.toJSON())
        console.log(body)
    })
}


getSession()

module.exports = 
{
    getSession:getSession
}

