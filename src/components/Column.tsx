function Column({ category, setTasks }) {
    function deleteTask(id) {
        setTasks(tasks => 
            tasks.map(currCategory =>
                currCategory.title === category.title
                ? {...currCategory, tasks: currCategory.tasks.filter(task => task.id !== id)}
                : currCategory
            ).filter(currCategory => currCategory.tasks.length !== 0)
        );
    }

    function toggleTask(id) {
        setTasks(tasks => 
            tasks.map(currCategory =>
                currCategory.title === category.title
                ? {...currCategory, tasks: currCategory.tasks.map(task => 
                    task.id === id
                    ? {...task, completed: !task.completed}
                    : task
                )}
                : currCategory
            ).filter(currCategory => currCategory.tasks.length !== 0)
        );
    }

    const taskList = category.tasks.map((task) =>
        <li key={task.id} className="mx-2 flex justify-start">
            <p className={"my-2 w-8/10" + (task.completed ? " line-through text-gray-500" : "")}>{task.title}</p>
            <button className="my-2 w-1/10 font-semibold text-green-800 text-center hover:text-green-500 cursor-pointer" onClick={() => toggleTask(task.id)}>[{task.completed ? "x" : " "}]</button>
            <button className="my-2 w-1/10 font-semibold text-red-800 text-center hover:text-red-500 cursor-pointer" onClick={() => deleteTask(task.id)}>[x]</button>
        </li>
    );

    return (
        <div className="w-100 min-w-100 p-5 m-5 rounded border-black border-2 border-solid h-min">
            <h1 className="font-semibold text-lg mb-5">{category.name}</h1>
            <ul>
                {taskList}
            </ul>
        </div>
    );
}

export default Column;