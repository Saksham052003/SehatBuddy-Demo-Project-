import React from "react";
import BIMG1 from './images/Bootem Page/image1.png';
import BIMG2 from './images/Bootem Page/image2.png';
import BIMG3 from './images/Bootem Page/image3.png';
import BIMG4 from './images/Bootem Page/image4.png';
import WA from './images/whatsapp.png';
import BackgroundImage from './images/background-image.jpg';
import PRO1 from './images/profile/profile1.png';
import PRO2 from './images/profile/profile2.png'; 
import PRO3 from './images/profile/profile3.png';
import PRO4 from './images/profile/profile4.png';

const BottomPage = () => {
    return (
        <div className="Bottom">
            <div className="container1">
                <div className="item">
                    <div className="image-container">
                        <img src={BIMG1} alt="image"/>
                    </div>
                    <div className="text-container">
                        <p className="text-name">Home Sample collection</p>
                        <p className="text">Free shipping</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image-container">
                        <img src={BIMG2} alt="image"/>
                    </div>
                    <div className="text-container">
                        <p className="text-name">2000+ Location served</p>
                        <p className="text">Any back within 7 days</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image-container">
                        <img src={BIMG3} alt="image"/>
                    </div>
                    <div className="text-container">
                        <p className="text-name">NABL, CAP ISO Certified</p>
                        <p className="text">Instent access to perfect support</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image-container">
                        <img src={BIMG4} alt="image"/>
                    </div>
                    <div className="text-container">
                        <p className="text-name">Upto 80% Discount</p>
                        <p className="text">We ensure safe payment</p>
                    </div>
                </div>
            </div>

            <div className="container2">
                <div className="whatsapp-content">
                    <img src={WA} alt="WhatsApp" className="whatsapp-img" />
                    <h3>Lab Test's Book on WhatsApp</h3>
                </div>
                <div>
                    <button>Book Now</button>
                </div>
            </div>

            <div className="container3">
               <h3 className="Customer-say">What our Customer say</h3>
               <p className="Customer-speak">Customer speak Customer setisfaction is our prime focus. We would like to here your comments about our server.</p>
               <div className="rating">
               <div className="card3-item">
                    <div className="card3">
                        <div>
                            <p>"SathBuddy has truly transformed my healthcare experince. Booking diagnostic test through the app is a breeze, and there home sample collection service is a game-chainger. I resive my result faster then I expected, and the apps health insights were incradebly helpful. highly recomended!"</p>
                            <img src={PRO1} alt="profile1"/>
                            <h4>Deepika Vats</h4>
                        </div>
                    </div>
                </div>
                <div className="card3-item">
                    <div className="card3">
                        <div>
                            <p>"SathBuddy has truly transformed my healthcare experince. Booking diagnostic test through the app is a breeze, and there home sample collection service is a game-chainger. I resive my result faster then I expected, and the apps health insights were incradebly helpful. highly recomended!"</p>
                            <img src={PRO2} alt="profile1"/>
                            <h4>Deepika Vats</h4>
                        </div>
                    </div>
                </div>
                <div className="card3-item">
                    <div className="card3">
                        <div>
                            <p>"SathBuddy has truly transformed my healthcare experince. Booking diagnostic test through the app is a breeze, and there home sample collection service is a game-chainger. I resive my result faster then I expected, and the apps health insights were incradebly helpful. highly recomended!"</p>
                            <img src={PRO3} alt="profile1"/>
                            <h4>Deepika Vats</h4>
                        </div>
                    </div>
                </div>
                <div className="card3-item">
                    <div className="card3">
                        <div>
                            <p>"SathBuddy has truly transformed my healthcare experince. Booking diagnostic test through the app is a breeze, and there home sample collection service is a game-chainger. I resive my result faster then I expected, and the apps health insights were incradebly helpful. highly recomended!"</p>
                            <img src={PRO4} alt="profile1"/>
                            <h4>Deepika Vats</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default BottomPage;
