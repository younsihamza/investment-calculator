import InputSection from "./components/InputValue/inputSection";
import Table from "./components/Table/Table";
import { useState } from "react";
function App() {
  const [tableValue, setTibleValue] = useState({
    duration: 0,
    expectedReturn: 0,
    annualInvestment: 0,
    initialInvestment: 0,
  });
  function handleChangeValue(event) {
    setTibleValue((table) => {
      const newTable = {...table};
      newTable[event.target.name]=parseFloat(event.target.value);
      return newTable;
    });
  }
  return (
    <>
      <InputSection onchange={handleChangeValue} />
      <Table tableValue={tableValue}/>
    </>
  );
}

export default App;
