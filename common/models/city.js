'use strict';

module.exports = function(City) {
    /*City.validate('Cname', customValidator, {message: 'Bad name'});
    function customValidator(err) {
        
        if (this.Cname === 'bad') err();
        console.log(this.Cname);
    };
    var city = new City({Cname: 'delhi'});
    city.isValid(); 
    city.Cname = 'bad';
    city.isValid();*/ 

    City.validatesLengthOf("Cid",{max:5,message:{min:"Invalid City id,please enter valid id"}});  
      City.validatesLengthOf("Cname",{min:3,message:{min:"Invalid city name, please enter minimum 3 charcters"}});
  

    

    
    /*City.getCityName = function (Cid, callback) {
        console.log(Cid);
        City.findById(Cid).then(res =>{
            console.log('response',res);
            callback(null, res);
        }).catch(err =>{
            callback(err,null);
        });
    }
    City.remoteMethod(
        'getCityName',
        {
            returns: { root: true, type: 'object' },
            accepts: [{
                arg: 'Cid',
                type: 'number',
                required: false,
                http: {
                    source: 'query'
                }
            }],
            http: { path: '/getCityName', verb: 'get' },
        }


    )
    }*/
}
    



  

