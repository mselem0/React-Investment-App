import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInputs from './components/UserInputs.jsx';
import Result from './components/Result.jsx';

function App() {
  const [inputsData, setInputsData] = useState({
    initialInvestment: 10000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 12,
  });

  function handleInputChange(key, val) {
    setInputsData(oldDataObj => { return { ...oldDataObj, [key]: +val }; });
  }

  const INPUTS_ARE_VALID = inputsData.duration > 0;

  return (
    <>
      <Header />
      <UserInputs data={inputsData} onInputChange={handleInputChange} />
      {INPUTS_ARE_VALID ? <Result data={ inputsData } /> : <p class="center">Sorry, but duration must be greater than 0 !</p>} 
    </>
  );
}

export default App
