import * as inquirer from 'inquirer';
import { data } from '../data';
import { Commnads } from '../model/Commands';
import TodoItem from '../model/TodoItem';
import TodoCollection from '../service/TodoCollection';

class TodoConsole {
    private todoCollection : TodoCollection;

    private showCompleted : boolean;

    constructor(){
        this.showCompleted = true;
        const sampleTodos: TodoItem[] = data.map(
            (item) => new TodoItem(item.id, item.task, item.complete)
        );

        this.todoCollection = new TodoCollection('My Todo List', sampleTodos);
    }

    displayTodoList() : void{
        console.log(
            `====${this.todoCollection.userName}====` + 
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`
        )
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach((item) => item.printDetails());
    }

    promptUser() : void{
        console.clear();
        this.displayTodoList();

        inquirer.prompt({
            type:'list',
            name:'command',
            message:'Choose option',
            choices: Object.values(Commnads),
        }).then((answers) => {
            switch(answers['command']){
                case Commnads.Toggle:
                    this.showCompleted = !this.showCompleted;
                    this.promptUser();
                    break;
                case Commnads.Add:
                    this.promptAdd();
                    break;
                case Commnads.Purge:
                    this.todoCollection.removeComplete();
                    this.promptUser();
                    break;
                case Commnads.Complete:
                    if(this.todoCollection.getItemCounts().incomplete > 0){
                        this.promptComplete();
                    }else{
                        this.promptUser();
                    }
                    break;
            }
        });
    }

    promptAdd() : void {
        console.clear();
        inquirer.prompt({
            type:'input',
            name:'add',
            message:'Enter task :',
        }).then((answers) => {
            if(answers['add'] !== ""){
                this.todoCollection.addTodo(answers['add']);
            }
            this.promptUser();
        })
    };

    promptComplete() : void {
        console.clear();
        inquirer.prompt({
            type:'checkbox',
            name:'complete',
            message:'Mark Tasks Complete :',
            choices: this.todoCollection.getTodoItems(this.showCompleted).map((item) => ({
                name:item.task,
                value:item.id,
                checked:item.complete
            })),
        }).then((answers) => {
            let completedTasks = answers["complete"] as number[];
            this.todoCollection.getTodoItems(true).forEach((item)=> 
                this.todoCollection.markComplete(
                    item.id,
                    completedTasks.find((id) => id === item.id) != undefined
                )
            )
            this.promptUser();
        })
    };
}

export default TodoConsole;