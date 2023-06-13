
import React, { useEffect, useState } from "react";


import NoCounter from "./NoCounter";
import ReduxDemo from "./ReduxDemo";

const messege = ["Good morning", "Good afternoon ", "Good Evening"];

const NewThought: React.FC = () => {




  // fix this {problem is that byValue

  // fix this
  // useSelector((state: IRootState) => state.user.loggedIn);

  const [step] = useState(1);

  

  const [advise, setAdvise] = useState("");

  async function clickit() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvise(data.slip.advice);
  }

    // changing title of page according to page
   useEffect(
    function() {
      if(!advise) return;
      document.title =(advise)
    }
    ,[advise])

    // changing title of page according to page

  return (
    <div>
      <h4>Ask me something</h4>
      <button onClick={clickit} className="btn btn-primary">
        say something
      </button>
      <p>{advise}</p>

      <form action="">
        <select>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      </form>

      {/* tab content  */}

      <div>
        <div className="d-flex flex-column">
          <h1>Tab Content</h1>
          <div className="d-flex flex-row justify-content-between">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p>
            {step} :{messege[step - 1]}
          </p>
          <h5>66</h5>

          <div>
            <button className="btn btn-primary me-2" >
              Increament
            </button>
            <button className="btn btn-primary me-2" >
              Increament By 5
            </button>

            <button className="btn btn-primary ms-2" >
              Decreament
            </button>
          </div>
        </div>
      </div>
      {/* tab content  */}
      {/* No. Counter  */}
      <NoCounter/>
      {/* No. Counter  */}

      {/* Redux demo project  */}
       <ReduxDemo/>
      {/* Redux demo project  */}



    </div>
  );
};

export default NewThought;
