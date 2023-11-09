import React from "react";
import "./Query_Section.scss";
import Icons from "../../assets/icons/Icons";

function Query_Section() {

  

  return (
    <>
      <div className="query_Section h-100 d-flex flex-column ">
        <h2 className="m-4">Ask your queries here!</h2>
        <div className="d-flex flex-column">
          <div className="msg-area h-100">

          <p className="msg-box m-4">
            
            Hello! I am your Financial Analyst AI, I can assist you with
            financial analysis on companies. Type your questions below.
          </p>
          <p className="msg-box m-4">
            
            Hello! I am your Financial Analyst AI, I can assist you with
            financial analysis on companies. Type your questions below.
          </p>
        </div>
        </div>

        <div className="input-outer-box algin-items-md-end">
         
            <input
              type="text"
              className="input-box"
              id="input_box"
              placeholder="Type message"
              
            />
            <div className="input-btn">
              <img
                src={Icons.input_btn}
                alt="input_btn"
              />
            </div>
         
        </div>
      </div>
    </>
  );
}

export default Query_Section;
