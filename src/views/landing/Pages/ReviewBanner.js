import React from 'react';
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie-player'
import {Button} from "reactstrap";
import cookingWomen from '../assets/lottie/cookingWomen.json';
import appStoreIcon from '../../../assets/img/gfew_img/appstore.jpg';

const ReviewBanner = () => {
    return(
    <section className="signupBackground">
     <div class="container-fluid">
                <div class="row pt-5 pb-3 text-center">
                        <div class="col">
                                <p >
                                        Enjoy your class - and unforgettable meat for two afterward. <br />
                                        
                                        Your chef will lead you through your recipes , cooking right alongside you.
                                </p>
                                <a class="nav-link btn btn-outline-secondary ml-3 signup signup_btn" href="#">Sign Up <span class="sr-only">(current)</span></a>
                        </div>
                </div>
      </div>
    </section>
    )
}

export default ReviewBanner;







