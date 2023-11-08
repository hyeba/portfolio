import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profile.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>{resumeData.aboutme}</p>
               <p className="about_descriptionText">{resumeData.aboutDescription}</p>
               <p className="about_descriptionText">{resumeData.aboutDescription2}</p>
               <p className="about_descriptionText">{resumeData.aboutDescription3}</p>
               <div className='about_descriptionLink'>
                  <div>
                     <p className="about_descriptionText">{resumeData.aboutDescription4}</p>
                  </div>
                  <div className='about_npm' onClick={()=>{window.open('https://www.npmjs.com/package/phone-keypad')}}>phonekeypad-js</div>
               </div>
               <p className="about_descriptionText">{resumeData.aboutDescription5}</p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{resumeData.name}<br></br></span>
                     <span>{resumeData.email}<br></br></span>
                     <span>{resumeData.phone}<br></br></span>
                     <span>{resumeData.website}</span>
                  </p>
                  </div>
            </div>
            </div>
         </div>
      </section>
    );
  }
}
