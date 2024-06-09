import React from "react";
import NavBar from "./NavBar";
import Body from "./body";
import Card from "./card";
import HealthConcern from "./HealthConcern";
import Card2 from "./card2";
import BottomPage from "./bottompage";

const Home = () =>{
    return (
        <div>
            <NavBar />
            <Body />
            <Card />
            <HealthConcern />
            <Card2 />
            <BottomPage />
        </div>
    )
};

export default Home;