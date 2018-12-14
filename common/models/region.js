'use strict';

module.exports = function(Region) {
Region.validatesLengthOf("Rid",{max:3,message:{min:"Invalid City id,please enter valid id"}});
Region.validatesLengthOf("RegionName",{min:3,message:{min:"Invalid city name,please enter minimum 3 charactersgi"}});

Region.getRegionName = function (Rid, callback) {   
    console.log(Rid);                                       //Using Promises
    Region.findById(Rid).then(res => {
        {   
        console.log('response',res);
        callback(null, res);
    }
}).catch(err => {
    callback(err,null);
});
}
Region.remoteMethod(
    'getRegionName',
    {
        returns: { root: true, type: 'object' },
        accepts: [{
            arg: 'Rid',
            type: 'number',
            required: false,
            http: {
                source: 'query'
            }
        }],
        http: { path: '/getRegionName', verb: 'get' },
    }
)
}



/*Region.getOneRecord = function (RegionName, callback) {
    Region.findOne({where:{RegionName:"Delhi"}}).then(res => {
            console.log('response',res);
            callback(null, res);

        }).catch(err => {
            callback(err,null);
        });

    };

Region.remoteMethod(
    'getOneRecord', {
        returns: {
            root: true,
            type: "object"
        },
        accepts: [{
            arg: "RegionName",
            type: "string",
            http: {
                source: 'query'
            }

        }],
        http: {
            path: "/getOneRecord", verb: "get"
        },

    }
)
}*/



/*Region.getRecords = function (RegionName, callback) {
    Region.find({where:{RegionName:"Hyd"}}).then(res => {
            console.log('response',res);
            callback(null, res);

        }).catch(err => {
            callback(err,null);
        });

    };

Region.remoteMethod(
    'getRecords', {
        returns: {
            root: true,
            type: "Array"
        },
        accepts: [{
            arg: "RegionName",
            type: "string",
            http: {
                source: 'query'
            }

        }],
        http: {
            path: "/getRecords", verb: "get"
        },

    }
)
}*/


/*Region.getRecord = function (Object, callback) {
    console.log(object);
    var obj={
        Rid:1,
        RegionName: "yy1",
        Cid:1

    }
    Region.findOrCreate({where:{RegionName:object.name}},obj).then(res => {
            console.log('response',res);
            callback(null, res);

        }).catch(err => {
            callback(err,null);
        });

    };

Region.remoteMethod(
    'getRecord', {
        returns: {
            root: true,
            type: "object"
        },
        accepts: [{
            arg: "object",
            type: "object",
            http: {
                source: 'query'
            }

        }],
        http: {
            path: "/getRecord", verb: "get"
        },

    }
)
}*/


/*Region.UpdateRecord = function (object, callback) {
    console.log('object--------',object);
    var obj = {
        Rid:8,
        RegionName: "yyy2",
        Cid:1
    }
    Region.upsertWithWhere({RegionName:object.name},obj).then(res => {
            console.log('response',res);
            callback(null, res);

        }).catch(err => {
            callback(err,null);
        });

    };

Region.remoteMethod(
    'UpdateRecord', {
        returns: {
            root: true,
            type: "object"
        },
        accepts: [{
            arg: "object",
            type: "object",
            http: {
                source: 'body'
            }

        }],
        http: {
            path: "/UpdateRecord", verb: "post"
        },

    }
)
}*/


/*Region.deleteRecord=function(Rid,callback){
    console.log(Rid);
    Region.destroyById(Rid).then(res =>{
 console.log('response:'+res);
 callback(null,res);
    }).catch(err =>{
        callback(err,null);
    });
};
Region.remoteMethod(
    'deleteRecord',{
        returns:{
            root:true,
            type:"number"
        },
        accepts:[{
            arg:"id",
            type:"number",
        http:{
        source:"query"
        }}],
        http:{
            path: "/deleteRecord", verb:"del"
        },
    

    }
)
}*/


/*Region.updateRegionName = function (input, callback) {
    Region.findById(input.Rid).then(res =>{
        console.log(input.Rid);
        var updateObj = res;
        console.log(res);
        updateObj.RegionName = input.RegionName;
        res.updateAttributes(updateObj).then(res => {
            console.log('updated record : ', res);
            callback(null, res);

        }).catch(err => {
            callback(err, null);
        })

    }).catch(err =>{
        callback(err,null);
    });   
    };

Region.remoteMethod(
    'updateRegionName', {
        returns: {
            root: true,
            type: "object"
        },
        accepts: [{
            arg: "input",
            type: "object",
            http: {
                source: 'body'
            }

        }],
        http: {
            path: "/updateRegionName", verb: "put"
        },
    }
)
}*/






