import React, { memo } from 'react';

const NormalButton = memo(({ onClick }) => {
  console.log('Render de botón normal');
  return (
    <button className="normal" onClick={onClick}>
      Incrementar Contador (Normal)
    </button>
  );
});

export default NormalButton;