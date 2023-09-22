import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header/Header";
import Footer from "./footer/Footer";

const Body = () => {
  return (
    <>
      <body id="page-top">
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header></Header>
          </div>
          
          <Footer></Footer>
          </div>
        </div>
        
      </body>
    </>
  );
};

export default Body;
