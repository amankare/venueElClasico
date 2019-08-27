import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13864.69683599635!2d-95.42002002969973!3d29.685728543760135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b0f6ec2399a9d57!2sNRG%20Stadium!5e0!3m2!1sen!2sus!4v1566750133568!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;