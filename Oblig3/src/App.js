import React, { useState } from 'react';
// import react from 'react';
import Alert from './components/Alert';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Food from './components/Food';


//task  6
const food = ['Pizza', 'Hamburger', 'Coke'];
// task 8 ,9 ,10 ,11
function App() {
  const [inputValue, setInputValue] = useState('');

  // const handleChange = (event) => {
  //   const newValue = event.target.value;
  //   setInputValue(newValue);
  //   console.log('change');
  // };

  // const handleClick = () => {
  //   task 11
  //   alert(inputValue);
  //   console.log('Klikked');
  const handleAlertInputChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div className="App">
      <MyComponent title="it works" />

      <Wrapper>
        <Title title="Test" />
      </Wrapper>
      {/* //task  6 og 7
      <ul>
        {food.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <Food food={food} />

      {/* <button onClick={handleClick}>Klikk her</button>

      <input type="text" onChange={handleChange} placeholder="Type here" />

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here"
      /> */}
      {/* <Alert /> */}
      <Alert onInputChange={handleAlertInputChange} />

      <p>{inputValue}</p>
    </div>
  );
}

export default App;
