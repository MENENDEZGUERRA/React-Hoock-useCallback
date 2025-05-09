import React, { memo } from 'react';

const OptimizedButton = memo(({ onClick }) => {
  console.log('Render de botón optimizado');
  return (
    <button className="optimized" onClick={onClick}>
      Generar Nuevo Número (Optimizado)
    </button>
  );
});

export default OptimizedButton;