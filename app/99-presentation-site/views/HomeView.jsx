import React from 'react';
import { Link } from 'react-router-dom';


const HomeView = () => <main>
    <section className="jumbo">
        <div>
            <p className="tagline">Use React for your webapp !</p>
            <p className="buttons">
                <Link to="/examples" className="button primary">See our examples</Link>
                <Link to="/services" className="button secondary">Check our services</Link>
            </p>
        </div>
    </section>
    <section className="social-media-share">
        <button className="facebook"><i className="fa fa-facebook-square"></i> <b>Share on Facebook</b></button>
    </section>
</main>;

export default HomeView;
