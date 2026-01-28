// Pour afficher l'intégralité de la fonctionnalité de tache

import {Header} from "./header/header.tsx";
import {TaskInput} from "./taskInput/taskInput.tsx";

export const TaskContainer = () => {
    return (
        <main>
            <Header/>
            <TaskInput/>
        </main>
    )
}