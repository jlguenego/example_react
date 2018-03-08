import React from 'react';
import FacebookShare from '../widget/FacebookShare';
import GoogleMap from '../widget/GoogleMap';

const ContactView = () => <main>
    <section>
        <div className="container">
            <h1>Contact</h1>
            <address>
                <br /> TheReactFactory
					<br /> 99 rue de Paris
					<br /> Batiment A, 1er étage
					<br /> 77200 TORCY
					<br /> FRANCE
					<br /> Mail: <a href="mailto:contact@thereactfactory.com">contact@thereactfactory.com</a>
                <br />
                <br /> Tel: <a href="tel:0172179862">01.72.17.98.62</a>
            </address>
        </div>
    </section>
    <GoogleMap/>
    <FacebookShare/>
</main>;

export default ContactView;
