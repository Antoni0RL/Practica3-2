import React from 'react';

function TareaFormulario({ tarea, setTarea }) {
  return (
    <input
      type="text"
      className="w-full px-3 py-2 border rounded"
      value={tarea}
      onChange={(e) => setTarea(e.target.value)}
      placeholder="Index tarea"
    />
  );
}

export default TareaFormulario;
