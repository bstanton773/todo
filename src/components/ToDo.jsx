import React from 'react';
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function ToDo(props) {
    let tasks = ['Create React App', 'Add Components', 'Display Cards', 'Allow Submissions'];
    return (
        <>
            <h1 className="text-center">Brian's Awesome To-Do List Generator</h1>
            <ToDoForm />
            {/* To-Do's */}
            <div className="row">
                {tasks.map((task, idx) => <ToDoCard task={task} key={idx} />)}
            </div>
        </>
    )
}
