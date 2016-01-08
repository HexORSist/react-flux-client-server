var users=require('./models/user.model');

module.exports = {
    finduser:function(user,callback){
        
        users.findOne({'username': user},function(err,data){
            if (err) return console.error(err);
            callback(data);
        });
    },
    
    adduser:function(profile,callback){
        users.create({'username': profile.username,
                      'password': profile.password},
                       function(err,data){
                            if (err) return console.error(err);
                            data.save();
                            callback();
                       }
        )
    }
};