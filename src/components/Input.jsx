import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ tasks, setTasks }) {
    const [inputValue, setInputValue] = useState("");

    function addTask(input) {
        const match = input.match(/^(.*?)\s*#(\w+)$/);
        
        let text, taskCategory
        if (match) {
            text = match[1].trim()
            taskCategory = match[2].trim()
        } else {
            text = input.trim()
            taskCategory = "other"
        }

        const newTask = {title: text, id: uuidv4(), completed: false};
        
        if (tasks.filter(category => category.name === taskCategory).length !== 0) {
            setTasks(tasks => tasks.map(category =>
                category.name === taskCategory
                ? {...category, tasks: [...category.tasks, newTask]}
                : category
            ));
        } else {
            console.log("creating new cat")
            setTasks(tasks =>
                [
                    ...tasks, 
                    {
                        name: taskCategory, 
                        tasks: [newTask]
                    }
                ]
            );
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTask(inputValue);
            setInputValue("");
        }
    }

    return (
        <div className="flex justify-center fixed bottom-1/4 w-full">
            <input
                type="text"
                value={inputValue}
                placeholder="Write task here... (e.g. 'do maths homework #school')"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-200 p-3 mx-5 rounded border-black border-2 border-solid outline-0 bg-white"
            ></input>
        </div>
    );
}  

export default Input;