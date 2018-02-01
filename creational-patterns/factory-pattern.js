var repoFactory = function () {

    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            //we would return the task repo in module-pattern.js here
            return console.log("Returning task repo");
        }

        //add more conditions here for other repos created
    }
} 


//cleaner factory pattern - dont have to pass in repo name type
//simply call which one you require e.g. var user = repoFactory.task.get(1);

var repoFactory = function() {
    //scope of object (repoFactory)
    var repos = this;
    //could pull this from repo directory and get all repo files?
    var repolist = [
        {
            name: 'task',
            source: 'source here'
        }];

    //when created, loop through repo list and pull in the repos required by the factory
    repolist.forEach(function(repo){
        //adds a new property each iteration to our repoFactory object, each pulling in the required repo file
        repos[repo.name] = require(repo.source)();
    });
}