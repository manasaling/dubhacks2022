import React, { useState } from "react";
import './Userinfo.css';

function Userinfo() {
  return (
    <div className="user-information">
       
      <div className="form">
            
          <form >
            <div className="input-container">
                <div className="ind-questions">
                    <label className="label">Name</label>
                </div>
                <div className="ind-questions">
                    <input className="input-box"type="text" name="uname" required />
                </div>  
              
            </div>

            <div className="input-container">
              <label className="label">Age</label>
              <input className="input-box" type="text" name="pass" required />
            </div>

            <div className="input-container">
              <label className="label">BMI</label>
              <input className="input-box" type="text" name="pass" required />
            </div>

            <div className="input-container">
              <label className="label">Do you have high BP?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="input-container">
              <label className="label">Do you have high cholestrol?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="input-container">
              <label className="label">Do you smoke?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="input-container">
              <label className="label">Have you ever had a stroke?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>
            <div className="input-container">
              <label className="label">Have you ever had a heart attack?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="input-container">
              <label className="label">Do you eat fruits?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="input-container">
              <label className="label">Do you eat vegetables?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="input-container">
              <label className="label">Do you drink a lot of alcohol?</label>
              <input type="checkbox" value="Yes"/>
              <label className="label">Yes</label>
              <input type="checkbox" value="No"/>
              <label className="label">No</label>
            </div>

            <div className="button-container">
              <input className = "button" type="submit" />
            </div>
          </form>
        </div>
    </div>
  );
}

export default Userinfo;
