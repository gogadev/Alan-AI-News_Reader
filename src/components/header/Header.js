import React from "react";

import "./header.style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-body">
        <h1>
          <span>N</span>ews <span>R</span>eader
        </h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZonIkoU9hfFZsLhdIOHOBcc9mU2Vh5v6Xw&usqp=CAU"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
