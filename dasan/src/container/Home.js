import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "./user/Login";
// import Slider from "../layouts/Slider";



class Home extends React.Component{
  render (){
  return (
    <React.Fragment>
      <Header />
    <Login />
      {/* <Slider/> */}
      <Footer />

    </React.Fragment>
  );
}
}

export default Home;