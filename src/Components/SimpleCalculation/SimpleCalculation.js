import React, { useMemo, useState } from 'react';

const SimpleCalculation = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");

    const sum = useMemo(() => {
       
      return parseFloat(number1) + parseFloat(number2);
    }, [number1, number2]);

    const difference = useMemo(() => {
          
      return parseFloat(number1) - parseFloat(number2);
    }, [number1, number2]);

    const product = useMemo(() => {
         
      return parseFloat(number1) * parseFloat(number2);
    }, [number1, number2]);

    const quotient = useMemo(() => {
         
      return parseFloat(number1) / parseFloat(number2);
    }, [number1, number2]);
    return (
      <div>
        <div>
          <label htmlFor="number1">Number 1:</label>
          <input
            type="number"
            id="number1"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number2">Number 2:</label>
          <input
            type="number"
            id="number2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
        <div>
          <p>Sum: {sum?sum: 0 }</p>
          <p>Difference: {difference? difference:0}</p>
          <p>Product: {product?product:0}</p>
          <p>Quotient: {quotient?quotient:0}</p>
        </div>
      </div>
    );
};

export default SimpleCalculation;