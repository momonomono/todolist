import React, { useState } from 'react';

export default function FormContainer({ token }) {
    const [task, setTask] = useState('');

    const clickCreateTodolist = () => {
        fetch('api/todolist/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify({
                task: task
            })
        })
        .then(response => console.log(response))
        .then(data => console.log(data));
    };

    const blurInputTask = (e) => {
        setTask(e.target.value);
    }

    return (
        <div className="p-grid__main">
            <input 
                type="text" 
                className="p-form__text" 
                onBlur={blurInputTask}
            />
            <button 
                className="c-button__main" 
                onClick={clickCreateTodolist}
            >追加</button>
        </div>
    );
}