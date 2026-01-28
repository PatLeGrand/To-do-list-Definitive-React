// Pour afficher l'intégralité de la fonctionnalité de tache

import {Header} from "./header/header.tsx";
import {TaskInput} from "./taskInput/taskInput.tsx";
import {TaskList} from "./taskList/taskList.tsx";
import {Footer} from "./footer/footer.tsx";
import {useState} from "react";

type Task = {
    id: number;
    title: string;
    completed: boolean;
}

export const TaskContainer = () => {

    const [taskList, setTaskList] = useState<Task[]>([]);

    const addTask = (title: string) => {
        const newTask : Task = {
            id: new Date().getTime(),
            title: title,
            completed: false
        }
        setTaskList([newTask, ...taskList])
    }

    return (
        <main className="p-4  flex flex-col gap-6">
            <Header/>
            <TaskInput addTask={addTask}/>
            <TaskList/>
            <Footer/>
        </main>
    )
}