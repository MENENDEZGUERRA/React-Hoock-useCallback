import React, { useState, useCallback } from 'react';
import OptimizedButton from './OptimizedButton';
import NormalButton from './NormalButton';

const Card = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  // Función memorizada con useCallback
  const generateRandom = useCallback(() => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  }, []);

  // Función normal sin useCallback
  const addCounter = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <div className="card">
      <h2>Número aleatorio: {randomNumber}</h2>
      <h3>Contador: {counter}</h3>
      
      <OptimizedButton onClick={generateRandom} />
      <img src='https://web.archive.org/web/20090727125510/http://www.geocities.com/Heartland/Fields/2162/pinkrose.gif' alt='Pink'></img>
      <NormalButton onClick={addCounter} />
      
    </div>
  );
};

export default Card;