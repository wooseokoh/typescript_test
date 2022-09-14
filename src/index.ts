import TodoItem from "./TodoItem";

const data = [
    { id: 1, task: "장보기", complete: true},
    { id: 2, task: "학습하기", complete: false},
];


console.log("My Todo List");
for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItem(data[i].id,data[i].task,data[i].complete)
    todoItem.printDetails();
}

