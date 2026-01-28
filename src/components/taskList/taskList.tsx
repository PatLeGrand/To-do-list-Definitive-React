export const TaskList = () => {
    return (
        <div className="p-4 border-2 rounded-box border-secondary flex flex-col gap-2 shadow-xl/30 ...">
            <h2>
                📌 Il reste encre x tache a accomplir
            </h2>
            <ul>
                TaskItem
            </ul>
        </div>
    )
}