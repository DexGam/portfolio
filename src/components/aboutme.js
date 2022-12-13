import React, { Component } from 'react';
import "../style/aboutme.css"

class AboutMe extends Component {
    render() {
        return (
            <>
                <div className="aboutme_container">
                    <div className="aboutMeGrid">
                        <div className="img-wrap">
                            <div className="img-name-job">
                                <img className="aboutme-img" src={process.env.PUBLIC_URL + "/pictures/me.png"} />
                                <h3>Cseri, Péter</h3>
                                <h4>Front-End Developer</h4>
                            </div>
                        </div>
                        <div className="desc">
                            <div className="text-wrap">
                                <p>
                                    I am working as a developer at ExxonMobil for almost a year now. We are creating websites for the intranet to help
                                    other employees in their everyday work. I have built a few websites either in React or AngularJS that were later used
                                    by thousands in the company.
                                </p>
                                <p>
                                    I have a Bachelor's degree in computer science from Óbuda University. Ever since coding became one of my hobbies I've
                                    built multiple games for mobile, one of them made it to Google Play.
                                </p>
                                <p>
                                    I enjoy coding and I always want to improve, currently I am learning to be a better front-end developer and also learn some
                                    back-end in the meantime.
                                </p>
                                <p>
                                    If you want to check out my projects please keep scrolling!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutMe