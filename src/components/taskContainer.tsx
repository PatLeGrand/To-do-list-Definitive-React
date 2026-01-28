// Pour afficher l'intégralité de la fonctionnalité de tache

import {Header} from "./header/header.tsx";
import {TaskInput} from "./taskInput/taskInput.tsx";
import {TaskList} from "./taskList/taskList.tsx";

export const TaskContainer = () => {
    return (
        <main className="p-4  flex flex-col gap-6">
            <Header/>
            <TaskInput/>
            <TaskList/>
        </main>
    )
}