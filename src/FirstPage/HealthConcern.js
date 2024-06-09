import React from "react";
import image1 from './images/Health Concern/image1.png';
import image2 from './images/Health Concern/image2.png';
import image3 from './images/Health Concern/image3.png';
import image4 from './images/Health Concern/image4.png';

import IMG1 from './images/radiology categories/image1.png';
import IMG2 from './images/radiology categories/image2.png';
import IMG3 from './images/radiology categories/image3.png';
import IMG4 from './images/radiology categories/image4.png';
import IMG5 from './images/radiology categories/image5.png';
import IMG6 from './images/radiology categories/image6.png';

import imag1 from './images/Health Packages/image1.png';
import imag2 from './images/Health Packages/image2.png';
import imag3 from './images/Health Packages/image3.png';
import imag4 from './images/Health Packages/image4.png';
import imag5 from './images/Health Packages/image5.png';
import imag6 from './images/Health Packages/image6.png';

import Lab1 from './images/Lab Partner/image1.png';
import Lab2 from './images/Lab Partner/image2.png';
import Lab3 from './images/Lab Partner/image3.png';
import Lab4 from './images/Lab Partner/image4.png';
import Lab5 from './images/Lab Partner/image5.png';
import Lab6 from './images/Lab Partner/image6.png';

const HealthConcern = () => {
    return (
        <div className="Container">
            <div className="Continer-one">
            <h3 className="health">By Health Concern</h3>
            <div className="HealthConcern">
                <div className="health-item" ><a onClick={navigateToSection()}>
                    <img src={image1} alt="Joint Pain Care"/>
                    <p className="Care">Joint Pain Care</p>
                    </a>
                </div>
                <div className="health-item"><a onClick={navigateToSection()}>
                    <img src={image2} alt="Kidney Care"/>
                    <p className="Care">Kidney Care</p>
                    </a>
                </div>
                <div className="health-item"><a onClick={navigateToSection()}>
                    <img src={image3} alt="Liver Care"/>
                    <p className="Care">Liver Care</p>
                    </a>
                </div>
                <div className="health-item">
                    <img src={image4} alt="Kidney"/>
                    <p className="Kidney">Kidney</p>
                    <p className="Kidney-body">Kidney are one of the major organs of the <br></br>body, these bean-shaped organs which are <br></br>approximately</p>
                </div>
            </div>
        </div>
        <div className="Continer-two">
            <h3 className="health">Popular radiology categories</h3>
            <div className="radiologyCategories">
                <div className="radiology-item">
                <a onClick={navigateToSection()}>
                    <img src={IMG1} alt="X-Ray"/>
                    <p className="radiology">X-Ray</p>
                    <p className="Starting">Starting @*1050*149</p>
                </a>
                </div>
                <div className="radiology-item">
                <a onClick={navigateToSection()}>
                    <img src={IMG2} alt="X-Ray"/>
                    <p className="radiology"> ECG Test</p>
                    <p className="Starting">Starting @*1050*149</p>
                    </a>
                </div>
                <div className="radiology-item">
                <a onClick={navigateToSection()}>
                    <img src={IMG3} alt="X-Ray"/>
                    <p className="radiology">X-Ray</p>
                    <p className="Starting">Starting @*1050*149</p>
                    </a>
                </div>
                <div className="radiology-item">
                <a onClick={navigateToSection()}>
                    <img src={IMG4} alt="X-Ray"/>
                    <p className="radiology">Ultrasound</p>
                    </a>
                    
                </div>
                <div className="radiology-item">
                <a onClick={navigateToSection()}>
                    <img src={IMG5} alt="X-Ray"/>
                    <p className="radiology">MRI</p>
                    </a>
                    
                </div>
                <div className="radiology-item">
                <a onClick={navigateToSection()}>
                    <img src={IMG6} alt="X-Ray"/>
                    <p className="radiology">Echo Test</p>
                    </a>
                </div>
            </div>
        </div>
        <div className="Continer-three">
            <h3 className="health">Health Packages for every need</h3>
            <div className="Package">
                <div className="Package-item">
                <a onClick={navigateToSection()}>
                    <img src={imag1} alt="X-Ray"/>
                    <p className="Health-Packages"><b>Full body Checkups</b></p>
                    </a>
                </div>
                <div className="Package-item">
                <a onClick={navigateToSection()}>
                    <img src={imag2} alt="X-Ray"/>
                    <p className="Health-Packages"><b>Full-body with <br></br>scans</b></p>
                    </a>
                </div>
                <div className="Package-item">
                <a onClick={navigateToSection()}>
                    <img src={imag3} alt="X-Ray"/>
                    <p className="Health-Packages"><b>Diabetes & Heart <br></br>health</b></p>
                    </a>
                </div>
                <div className="Package-item">
                <a onClick={navigateToSection()}>
                    <img src={imag4} alt="X-Ray"/>
                    <p className="Health-Packages"><b>Women's Health</b></p> 
                    </a>  
                </div>
                <div className="Package-item">
                <a onClick={navigateToSection()}>
                    <img src={imag5} alt="X-Ray"/>
                    <p className="Health-Packages"><b>Elderly Care</b></p>
                    </a>
                    
                </div>
                <div className="Package-item">
                <a onClick={navigateToSection()}>
                    <img src={imag6} alt="X-Ray"/>
                    <p className="Health-Packages"><b>Men's Health</b></p>
                    </a>
                </div>
            </div>
        </div>
        <div className="Continer-forth">
            <h3 className="health">Lab Partner</h3>
            <p className="Lab-body">We provide lab test and health package from well-reputed, certified diagnostic labs across the country.</p>
            <div className="Lab-partner">
                <div className="Lab-partner-item">
                    <img src={Lab1} alt="Lab"/>
                </div>
                <div className="Lab-partner-item">
                    <img src={Lab2} alt="Lab"/>
                </div>
                <div className="Lab-partner-item">
                    <img src={Lab3} alt="Lab"/>
                </div>
                <div className="Lab-partner-item">
                    <img src={Lab4} alt="Lab"/>
                </div>
                <div className="Lab-partner-item">
                    <img src={Lab5} alt="Lab"/>
                </div>
                <div className="Lab-partner-item">
                    <img src={Lab6} alt="Lab"/>
                </div>
            </div>
        </div>
        </div>
    )
};

function navigateToSection() {
    window.location.href = '#';
  }

export default HealthConcern;
