import React from 'react';

function TareaLista({ tareas }) {
  return (
    <ul className="list-disc pl-5">
      {tareas.map((tarea, index) => (
        <li key={index} className="mb-2 flex justify-between items-center">
          {tarea}
        </li>
      ))}
    </ul>
  );
}

export default TareaLista;
