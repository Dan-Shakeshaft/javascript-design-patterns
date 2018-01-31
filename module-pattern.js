//Examples for node environment!


//creating a module (function)
//returns an object with a series of functions we can use for a common purpose e.g. database interactions
//can be used by other js files (when imported into the file using require command)

var repo = function () {

    var db = {};

    return {
        get: function(id) {
            console.log("Getting task " + id);

            return {
                name: "New task"
            }
        },
        save: function (task) {
            console.log("Saving " + task + " to the database");
        } 
    }
}



//alternate way of creating module for pattern
//provides a self documented module object so we can see what methods we can call!

var repo = function () {

    var db = {};

    var get = function(id) {
        console.log("Getting task " + id);

        return {
            name: "New task"
        }
    }

    var save = function (task) {
        console.log("Saving " + task + " to the database");
    } 

    return {
        get: get,
        save: save
    }
}