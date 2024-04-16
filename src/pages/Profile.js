import React from "react";
import { useState } from "react";
import Pix from "../assets/pix.jpeg";

const buttons = [
  "Github",
  "frontend-mentor",
  "Twitter",
  "Instagram",
  "Linkdeln",
];
console.log(buttons);
export const Profile = () => {
  const [activeBtn, setActiveBtn] = useState("");

  return (
    <div className="container">
      <img src={Pix} />
      <p className="one">Jessical Randall</p>
      <p className="two">London,united kingdom</p>
      <p className="three">"frontend developer and avid-reader"</p>

      <div className="button_container">
        {buttons.map((button) => (
          <button
            key={button}
            className={
              button === activeBtn ? "_active_button" : "_inactive_button"
            }
            // style={{
            //   backgroundColor: button === activeBtn ? "greenyellow" : "grey ",
            // }}
            onClick={() => setActiveBtn(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};
