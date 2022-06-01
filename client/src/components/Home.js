import React from "react";
import Dentists from "./Dentists";

const Home = ({dentists, getDentistInfo}) => {
  return (
      <>
        <Dentists dentists={dentists} getDentistInfo={getDentistInfo}/>
      </>
  );
}

export default Home;
