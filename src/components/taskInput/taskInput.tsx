export const TaskInput = () => {
    return (
        <div>
            <div
                className="p-4 border-2 rounded-box border-secondary flex flex-col gap-2 shadow-xl/30 ..."
            >
                <h2 className="text-secondary"> 📍 Ajouter une tache </h2>
                <form className="flex gap-2">
                    <input
                        type="text"
                        className="input  border-dotted"
                        placeholder="Indiquez un titre de tache"
                    />
                    <button className="btn btn-secondary" type="submit">Ajouter</button>

            </form>
        </div>

</div>
    )
};