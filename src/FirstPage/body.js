import React from "react";

const imageURL = 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-05/81aa90d0-36bd-11eb-a219-73e9ca8fa2ef.jpg';

const Body = () => {
    return (
        <div className="jumbotron">
            <div className="inside">
                <div className="content">
                    <h1 className="display-4">India's largest doorstep diagnostic</h1>
                    <h2>service provider</h2>
                    <div className="button-container">
                        <button className="btn1" type="submit" onClick={navigateToSection()}>Search by Test</button>
                        <button className="btn2" type="submit" onClick={navigateToSection()}>Search By Lab</button>
                    </div>
                    <form>
                        <input className="form-control mr-sm-2"
                            type="search"
                            placeholder="Find your Package/Test/Scans"
                            aria-label="Find your Package/Test/Scans" />
                        <button className="btns" type="submit" onClick={navigateToSection()}>Search</button>
                    </form>
                </div>
                <div className="image">
                    <img src={imageURL} alt="React Illustration" />
                </div>

            </div>
            <div className="btoons">
                <button className="btoon" type="submit" onClick={navigateToSection()}>Search By Lab</button>
                <button className="btoon" type="submit" onClick={navigateToSection()}>Search By Lab</button>
                <button className="btoon" type="submit" onClick={navigateToSection()}>Search By Lab</button>
            </div>
        </div>
    )
};
function navigateToSection() {
    window.location.href = '#';
  }

export default Body;
