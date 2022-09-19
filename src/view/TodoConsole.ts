import * as inquirer from 'inquirer';
import { data } from '../data';
import { Commnads } from '../model/Commands';
import TodoItem from '../model/TodoItem';
import TodoCollection from '../service/TodoCollection';

class TodoConsole {
    private todoCollection : TodoCollection;

    constructor(){
        const sampleTodos: TodoItem[] = data.map(
            (item) => new TodoItem(item.id, item.task, item.complete)
        );

        this.todoCollection = new TodoCollection('My Todo List', sampleTodos);
    }

    displayTodoList():void{
        console.log(
            `====${this.todoCollection.userName}====` + 
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`
        )
        this.todoCollection.getTodoItems(true).forEach((item) => item.printDetails());
    }

    promptUser():void{
        console.clear();
        this.displayTodoList();

        inquirer.prompt({
            type:'list',
            name:'command',
            message:'Choose option',
            choices: Object.values(Commnads),
        }).then((answers) => {
            if(answers['command'] !== Commnads.Quit){
                this.promptUser();
            }
        });
    }
}

export default TodoConsole;