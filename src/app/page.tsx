"use client";

import React, { useState, useEffect } from "react";
import Column from "@/components/Column";
import Input from "@/components/Input";


function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const columns = tasks.map((category) =>
        <Column 
            category={category} 
            key={category.name}
            setTasks={setTasks}
        />
    );

    return (
        <div className="wrapper">
            <h1 className="p-5 mt-5 text-center text-5xl font-bold">Type Todo</h1>
            <div className="flex flex-nowrap justify-center overflow-x-scroll">
                {columns.length !== 0 ? columns : <p className="mt-10 text-gray-600">No tasks yet. Add one below.</p>}
            </div>
            <Input tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default Home;
