import React from 'react';
import FacebookShare from '../widget/FacebookShare';

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
    <FacebookShare/>
</main>;

export default ServiceView;
