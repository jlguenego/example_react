import React from 'react';
import FacebookShare from '../widget/FacebookShare';
import TicketTable from '../widget/TicketTable';

const ServiceView = () => <main>
    <section>
        <div className="container">
            <h1>Liste de ticket de maintenance</h1>
            <TicketTable />
        </div>
    </section>
    <FacebookShare/>
</main>;

export default ServiceView;
