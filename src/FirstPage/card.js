import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="popular-packeges">
        <div className="left-side">
          <h2>Popular Packages</h2>
          <button className="view-All" type="submit" onClick={navigateToSection()}>View All</button>
        </div>
        <div className="right-side">
          <i className="fa-solid fa-arrow-left" onClick={navigateToSection()}></i>
          <i className="fa-solid fa-arrow-right" onClick={navigateToSection()}></i>
        </div>
      </div>
      <div className="card-list">
        <div className="card-item">
          <div className="card">
            <div className="card-top">
            <h4 className="card-name">Swasth Bharat Non Fasting Package</h4>
            <h4 className="card-test">25 Tests</h4>
            </div>
            <hr className="navbar-divider" />
            <div className="card-body">
              <p><b>Test Include:</b> Random Blood Sugar</p>
              <div className="card-mid"><div className="ben"><a onClick={navigateToSection()}>+Exclusive benefits</a></div>
              <div className="more"><a onClick={navigateToSection()}>Know more</a></div></div>
              
            </div>
            <div className="mid">
              <p className="mid-item">No Fasting Required</p>
              <p className="mid-item">Recommended for Everyone</p>
              <p className="mid-item">Report within 24 hr</p>
            </div>
            <div className="card-bottom"><div>199</div>
            <div><button className="btoon" type="submit" onClick={navigateToSection()}>Book Now</button></div></div>
            
          </div>
        </div>
        <div className="card-item">
          <div className="card">
            <div className="card-top">
            <h4 className="card-name">Swasth Bharat Non Fasting Package</h4>
            <h4 className="card-test">25 Tests</h4>
            </div>
            <hr className="navbar-divider" />
            <div className="card-body">
              <p><b>Test Include:</b> Random Blood Sugar</p>
              <div className="card-mid"><div className="ben"><a onClick={navigateToSection()}>+Exclusive benefits</a></div>
              <div className="more"><a onClick={navigateToSection()}>Know more</a></div></div>
              
            </div>
            <div className="mid">
              <p className="mid-item">No Fasting Required</p>
              <p className="mid-item">Recommended for Everyone</p>
              <p className="mid-item">Report within 24 hr</p>
            </div>
            <div className="card-bottom"><div>199</div>
            <div><button className="btoon" type="submit" onClick={navigateToSection()}>Book Now</button></div></div>
            
          </div>
        </div>
        <div className="card-item">
          <div className="card">
            <div className="card-top">
            <h4 className="card-name">Swasth Bharat Non Fasting Package</h4>
            <h4 className="card-test">25 Tests</h4>
            </div>
            <hr className="navbar-divider" />
            <div className="card-body">
              <p><b>Test Include:</b> Random Blood Sugar</p>
              <div className="card-mid"><div className="ben"><a onClick={navigateToSection()}>+Exclusive benefits</a></div>
              <div className="more"><a onClick={navigateToSection()}>Know more</a></div></div>
              
            </div>
            <div className="mid">
              <p className="mid-item">No Fasting Required</p>
              <p className="mid-item">Recommended for Everyone</p>
              <p className="mid-item">Report within 24 hr</p>
            </div>
            <div className="card-bottom"><div>199</div>
            <div><button className="btoon" type="submit" onClick={navigateToSection()}>Book Now</button></div></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

function navigateToSection() {
  window.location.href = '#';
}

export default Card;
