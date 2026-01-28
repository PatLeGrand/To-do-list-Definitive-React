import {useState} from "react";

type TaskInputProps = {
    addTask: (title: string) => void;
}

export const TaskInput = ({ addTask }: TaskInputProps) => {

    const [taskTitle, setTaskTitle] = useState<string>("")

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value)
    }

    const handleAddTask = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskTitle.trim() === "") {
            return
        }
        addTask(taskTitle)
        setTaskTitle("")
    }

    return (
        <div>
            <div
                className="p-4 border-2 rounded-box border-secondary flex flex-col gap-2 shadow-xl/30 ..."
            >
                <h2 className="text-secondary"> 📍 Ajouter une tache </h2>
                <form className="flex gap-2"  onSubmit={handleAddTask}>
                    <input
                        type="text"
                        className="input  border-dotted"
                        placeholder="Indiquez un titre de tache"
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-secondary" type="submit">Ajouter</button>

            </form>
        </div>

</div>
    )
};