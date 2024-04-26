import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AvailableNumbers from "./components/AvailableNumbers";
import FormData from "./components/FormData";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);
  const [dataFilled, setDataFilled] = useState();
  return (
    <div className="App">
      <div className="container">
        <Resume />
        {step === 1 ? (
          <AvailableNumbers setStep={setStep} setDataFilled={setDataFilled} />
        ) : null}
        {step === 2 ? (
          <FormData
            setStep={setStep}
            setDataFilled={setDataFilled}
            dataFilled={dataFilled}
          />
        ) : null}
        {step === 3 ? (
          <Step3 setStep={setStep} dataFilled={dataFilled} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
