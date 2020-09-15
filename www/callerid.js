var callerId = {
    convert : function(onSuccess, onError) {
        cordova.exec(onSuccess, onError, "CalleID", "convert", [1, 2]);
    }
};
module.exports = callerId;