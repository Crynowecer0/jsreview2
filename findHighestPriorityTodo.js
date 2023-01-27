//find highest priority task from an array of task objects, and returning it in the form of an array

//in - array of task objects, each containg a task property and a priorty property
//out - a tuple of the task with the highest priority
//edge - todo list of length 1

function findHighestPriorityTodo(todos) {
  //declare an array that will hold the current highest priority task, alone with its priority
  let topTask = [todos[0].task, todos[0].priority];

  //loop over the array of task objects
  for (let i = 1; i < todos.length; i++) {
    //check if the prioirty is greater than the priority of the current highest priority task
    if (todos[i].priority > topTask[1]) {
      //if it is, set the current task equal to the task that has higher priority
      topTask = [todos[i].task, todos[i].priority];
    }
  }

  //return the array containing the highest priority task + its priority
  return topTask;
}

let todos = [
  {
    task: "Eat",
    priority: 18,
  },
  {
    task: "Sleep",
    priority: 22,
  },
  {
    task: "Solve problems",
    priority: 17,
  },
];

console.log(findHighestPriorityTodo(todos)); // ["Sleep", 22]
