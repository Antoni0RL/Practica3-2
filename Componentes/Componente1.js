import React, { useState } from 'react';

export const Componente1 = () => {
    const [lista_tareas, setLista] = useState([]);
    const [tarea, setTarea] = useState("Tarea...");

    const asig_tarea = () => {
        if (tarea.trim() !== "") {
            setLista([tarea, ...lista_tareas]);
            setTarea(""); 
        }
    }

    return (
        <div>
            <input type='text' value={tarea} onChange={e => setTarea(e.target.value)} placeholder='Escribe una tarea...' />
            <button onClick={asig_tarea}>
                Asignar tarea
            </button>
            <ul>
                {lista_tareas.map((tareai, index) => (
                    <li key={index}>{tareai}</li>
                ))}
            </ul>
        </div>
    );
}
