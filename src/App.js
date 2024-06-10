import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import TareaLista from './TareaLista';

let controlTarea=0;

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');

  const agregarTarea = () => {
    if (tarea.trim()) {
      const nuevaTarea = `tarea ${controlTarea=controlTarea + 1}: ${tarea}`;
      setTareas([...tareas, nuevaTarea]);
      setTarea('');
    }
  };

  const completarTarea = () => {
    setTareas(tareas.slice(1));
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Tareas</h1>
      <div className="flex justify-center mb-4">
        <button onClick={agregarTarea} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
          Agregar
        </button>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Index tarea"
        />
        <button onClick={completarTarea} className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
          Completar
        </button>
      </div>
      <TareaLista tareas={tareas} />
    </div>
  );
}

export default App;
