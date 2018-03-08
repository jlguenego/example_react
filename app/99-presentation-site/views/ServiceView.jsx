import React from 'react';

const ServiceView = () => <main>
    <section>
        <div className="container">
            <h1>Liste de ticket de maintenance</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Hello</td>
                        <td>Longue description de hello</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Hello</td>
                        <td>Longue description de hello</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Hello</td>
                        <td>Longue description de hello</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <section className="social-media-share">
        <button className="facebook">
            <i className="fa fa-facebook-square"></i> <b>Share on Facebook</b>
        </button>
    </section>
</main>;

export default ServiceView;
