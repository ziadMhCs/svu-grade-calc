import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>title</h1>
      <Inputs />
      <Output />

    </div>
  );
}
export default App;

function Inputs() {
  const [weightingMode, setWeightingMode] = useState("standard");
  const [examWeight, setExamWeight] = useState(75);
  const [HomeWorkWeight, setHomeWorkWeight] = useState(25);
  const [examGrade, setExamGrade] = useState("exam grade");
  const [HomeWorkGrade, setHomeWorkGrade] = useState("HW grade");
  const [isWeightInputAllowed,setIsWeightInputAllowed] =useState(false);

  function calculateFinalResult(){
    const exam=1.0*examGrade*examWeight/100;
    // const HW = 1.0*HomeWorkGrade*HomeWorkWeight/100;
    const HW = 1.0*HomeWorkGrade*HomeWorkWeight/100;

    return(exam+HW); 
  }
    function handelChangeMode(e) {
    const newMode= e.target.value;
    setWeightingMode(newMode);

    if (newMode ==="english") {
      setIsWeightInputAllowed(false);
      setExamWeight(80);
      setHomeWorkWeight(20);
    } else if (newMode ==="standard") {
      setIsWeightInputAllowed(false);
      setExamWeight(75);
      setHomeWorkWeight(25);
    } else {

setIsWeightInputAllowed(true);
setExamWeight(0);
setHomeWorkWeight(0);

    }


  }
  return (
    <form className="container">
      <div className="weighting-input-section">
        {/* <button className="mode-btn" id="mode-standard">
          Standard
          </button>
          <button className="mode-btn" id="mode-custom">
          Custom
          </button> */}
        <fieldset>
          <legend>تثقيل العلامات</legend>
          <label htmlFor="weighting-mode">اختر نمط التثقيل</label>
          <select
            className="weighting-mode"
            value={weightingMode}
            onChange={(e) => handelChangeMode(e)}
          >
            <option value="standard">قياسي: وظيفية 25% ... امتحان 75 %</option>
            <option value="english">مادة لغة: وظيفية 20% ... امتحان 80%</option>
            <option value="custom">مخصص</option>
          </select>

{true && 
            <div className="">
            <div
              className="input-section"
              style={{ width: "40%", display: "inline-block" }}
            >
              <label for="exam-weight">تثقيل الامتحان (%)</label>
              <input
                type="number"
                id="exam-weight"
                placeholder="Exam Weight"
                min="0"
                max="100"
                disabled={!isWeightInputAllowed}
                value={examWeight}
                onChange={e=>Number(e.target.value)>=0?setExamWeight(Number(e.target.value)):setExamWeight(examWeight)}
                
/>
            </div>
            <span> </span>
            <div
              className="input-section"
              style={{ width: "40%", display: "inline-block" }}
            >
              <label for="exam-weight">تثقيل الوظيفة (%)</label>
              <input
                type="number"
                id="exam-weight"
                placeholder="Exam Weight"
                min="0"
                max="100"
                disabled={!isWeightInputAllowed}
                value={HomeWorkWeight}
                onChange={e=>Number(e.target.value)>=0?setHomeWorkWeight(Number(e.target.value)):setHomeWorkWeight(HomeWorkWeight)}
                              />
            </div>
          </div>}
        </fieldset>
      </div>
      <br></br>
      <div className="grades-input-section">
        <div className="input-section">
          <label for="lab-grade">علامة الوظيفة</label>
          <input
            type="number"
            id="lab-grade"
            placeholder="Lab Grade"
            min="1"
            max="100"
            value={HomeWorkGrade}
            onChange={e=>Number(e.target.value)>=0?setHomeWorkGrade(Number(e.target.value)):setHomeWorkGrade(HomeWorkWeight)}
          />
        </div>

        <div className="input-section">
          <label for="exam-grade">علامة الامتحان</label>
          <input
            type="number"
            id="exam-grade"
            placeholder="Exam Grade"
            min="1"
            max="100"
            value={examGrade}
            onChange={e=>Number(e.target.value)>=0?setExamGrade(Number(e.target.value)):setExamGrade(examGrade)}

          />
        </div>
      </div>
      <button id="calculate-btn"
      onClick={calculateFinalResult}
      >Calculate</button>
      <span>{calculateFinalResult()}</span>

    </form>
  );
}
function Output() {
  return (
    <div className="result-section">
      <h3>
        المحصلة: <span id="final-grade">555.9</span>
      </h3>
      <h3 id="pass-fail-result">ناجح/راسب</h3>
    </div>
  );
}
