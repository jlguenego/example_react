import React from 'react';
import { Link } from 'react-router-dom';

import FacebookShare from '../widget/FacebookShare';


const HomeView = () =>
    <main>
        <section className="jumbo">
            <div>
                <p className="tagline">Use React for your webapp !</p>
                <p className="buttons">
                    <Link to="/examples" className="button primary">See our examples</Link>
                    &nbsp;
                    <Link to="/services" className="button secondary">Check our services</Link>
                </p>
            </div>
        </section>
        <FacebookShare />
    </main>;

export default HomeView;
