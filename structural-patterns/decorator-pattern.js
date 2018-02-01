var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving task ' + this.name);
}

var task1 = new Task('compile');
var task2 = new Task('execute');

task1.completed();
task2.save();



//complex decorating
//creating a sub object to wrap Task object
//creating and inheriting with a new sub object

var UrgentTask = function(name, priority) {
    Task.call(this, name); //calls the parent object (Task) 's constructor, passing in its required argument
    this.priority = priority;
} 

//giving urgent task sub object a prototype
//we could just assign it the task prototype but that would link them directly (meaning if we change prototype in urgent task it will change in task also)
//create a new object to be the prototype and assign it the task prototype
UrgentTask.prototype = Object.create(Task.prototype); 

UrgentTask.prototype.notify = function () {
    console.log('notifying peeps');
}

UrgentTask.prototype.save = function () {
    this.notify();
    console.log('saving urgent task');
    Task.prototype.save.call(this);
}

var task = new UrgentTask("Test", 2);







//simple decoration
//decorating Task with additional properties and functions onto a new instance of task without risk of changing functionality of task

var urgentTask = new Task("legacy");
urgentTask.priority = 2;

urgentTask.notify = function () {
    console.log("URGENT");
}

urgentTask.notify();

urgentTask.save = function() {
    urgentTask.notify();
    Task.prototype.save.call(this);
}

urgentTask.completed();