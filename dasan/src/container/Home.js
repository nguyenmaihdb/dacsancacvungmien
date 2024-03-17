import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
// import Slider from "../layouts/Slider";



class Home extends React.Component{
  render (){
  return (
    <React.Fragment>
      <Header />
      {/* <Slider/> */}
      <Footer />

    </React.Fragment>
  );
}
}

export default Home;