import React from 'react';

// eslint-disable-next-line
const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.461824096926!2d2.641590151138295!3d48.84940330919189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e605534a9b1ca5%3A0x7f3b8de133199602!2sA%2C+99+Rue+de+Paris%2C+77200+Torcy!5e0!3m2!1sfr!2sfr!4v1519217847501';


const GoogleMap = () =>
    <section>
        <iframe className="contact-map"
            src={src}
            width="100%" height="450" frameBorder="0" style={{ border: 0, marginTop: 10 }} allowFullScreen>
        </iframe>
    </section>
    ;

export default GoogleMap;
