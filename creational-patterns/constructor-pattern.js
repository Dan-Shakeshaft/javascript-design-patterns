//constructor pattern

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