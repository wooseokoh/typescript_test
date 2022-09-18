import TodoItem from "./TodoItem";
import {data} from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos : TodoItem [] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("공부");
myTodoCollection.addTodo("놀기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);

myTodoCollection.removeComplete();

myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("=============================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());