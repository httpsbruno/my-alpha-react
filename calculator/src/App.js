import React, { useState } from 'react'

const operand1DefaultValue = '';
const operand2DefaultValue = '';
const operationDefaultValue = '+';

function App() {
  const [ operand1, setOperand1 ] = useState(operand1DefaultValue)
  const [ operand2, setOperand2 ] = useState(operand2DefaultValue)
  const [ operation, setOperation ] = useState(operationDefaultValue)
  const [ operandoSelect, setOperandoSelect ] = useState(1)
  
  function getValueFormated(value) {
    let valueCopy = value.slice(0);
    console.log(valueCopy);
    if(valueCopy.length > 0) {
      if(valueCopy[0] === '.') {
        valueCopy = `0${valueCopy}`
      }
      if(valueCopy[valueCopy.length - 1] === '.') {
        valueCopy = `${valueCopy}0`
      }
      console.log(valueCopy);
      return valueCopy;
    } else {
      return ''
    } 
  }
  
  function formatResult(value) {
    let valueString = String(value);
    const partes = valueString.split('.')
    return `${partes[0]}${partes.length > 1 ? `.${partes[1].length > 3 ? partes[1].substring(0, 3) : partes[1]}` : ''}`
  }

  function getResult() {
    switch (operation) {
      case '+':
        return formatResult(Number(getValueFormated(operand1)) + Number(getValueFormated(operand2)));
      case '-':
        return formatResult(Number(getValueFormated(operand1)) - Number(getValueFormated(operand2)));
      case '*':
        return formatResult(Number(getValueFormated(operand1)) * Number(getValueFormated(operand2)));
      case '/':
        return formatResult(Number(getValueFormated(operand1)) / Number(getValueFormated(operand2)));
      default:
        return 0;
    }
  }

  function clearCalculator() {
    setOperand1(operand1DefaultValue);
    setOperand2(operand2DefaultValue);
    setOperation(operationDefaultValue);
  }

  function updateCalculator(value) {
    if(operandoSelect === 1) {
      setOperand1(`${operand1}${value}`);
    } else {
      setOperand2(`${operand2}${value}`);
    }
  }
  
  function insertPoint() {
    if(operandoSelect === 1) {
      if(!operand1.includes('.')) {
        setOperand1(`${operand1}.`);
      }
    } else {
      if(!operand2.includes('.')) {
        setOperand2(`${operand2}.`);
      }
    }
  }
  
  function removeDigit() {
    if(operandoSelect === 1) {
      if(operand1.length > 0) {
        setOperand1(operand1.slice(0, -1));
      }
    } else {
      if(operand2.length > 0) {
        setOperand2(operand2.slice(0, -1));
      }
    }
  }
  
  return (
    <div className="App">
      <section id="container-page">
        <section id="container-calculator">
          <header>
            <div id="visor">
              {operandoSelect === 1 ? operand1 : operand2}
            </div>
          </header>
          <main>
            <div className="container-btn">
              <button id="btn-ac" className="btn btn-design" onClick={() => {
                clearCalculator();
                setOperandoSelect(1)
                setOperand1('')
                setOperand2('')
              }}>AC</button>
            </div>
            <div className="container-btn-ce">
              <button id="btn-ce" className="btn btn-design" onClick={() => {
                removeDigit();
              }}>CE</button>
            </div>
            <div className="container-btn">
              <button id="btn-divisao" className="btn btn-design" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('/');
              }}>÷</button>
            </div>
            <div className="container-btn">
              <button id="btn-7" className="btn btn-design" onClick={() => {
                updateCalculator('7');
              }}>7</button>
            </div>
            <div className="container-btn">
              <button id="btn-8" className="btn btn-design" onClick={() => {
                updateCalculator('8');
              }}>8</button>
            </div>
            <div className="container-btn">
              <button id="btn-9" className="btn btn-design" onClick={() => {
                updateCalculator('9');
              }}>9</button>
            </div>
            <div className="container-btn">
              <button id="btn-multiplicacao" className="btn btn-design" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('*');
              }}>x</button>
            </div>
            <div className="container-btn">
              <button id="btn-4" className="btn btn-design" onClick={() => {
                updateCalculator('4');
              }}>4</button>
            </div>
            <div className="container-btn">
              <button id="btn-5" className="btn btn-design" onClick={() => {
                updateCalculator('5');
              }}>5</button>
            </div>
            <div className="container-btn">
              <button id="btn-6" className="btn btn-design" onClick={() => {
                updateCalculator('6');
              }}>6</button>
            </div>
            <div className="container-btn">
              <button id="btn-menos" className="btn btn-design" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('-');
              }}>-</button>
            </div>
            <div className="container-btn">
              <button id="btn-1" className="btn btn-design" onClick={() => {
                updateCalculator('1');
              }}>1</button>
            </div>
            <div className="container-btn">
              <button id="btn-2" className="btn btn-design" onClick={() => {
                 updateCalculator('2');
              }}>2</button>
            </div>
            <div className="container-btn">
              <button id="btn-3" className="btn btn-design" onClick={() => {
                updateCalculator('3');
              }}>3</button>
            </div>
            <div className="container-btn">
              <button id="btn-mais" className="btn btn-design" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('+');
              }}>+</button>
            </div>
            <div className="container-btn">
              <button id="btn-0" className="btn btn-design" onClick={() => {
                updateCalculator('0');
              }}>0</button>
            </div>
            <div className="container-btn">
              <button id="btn-ponto" className="btn btn-design" onClick={() => {
                insertPoint();
              }}>.</button>
            </div>
            <div className="container-btn-equal">
              <button id="btn-equal" className="btn btn-design" onClick={() => {
                setOperand1(String(getResult()));
                setOperand2('');
                setOperandoSelect(1)
              }}>=</button>
            </div>
          </main>
        </section>
      </section>
    </div>
  );
}

export default App;