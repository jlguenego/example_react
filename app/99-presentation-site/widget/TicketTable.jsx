import React from 'react';
import { Ticket } from '../business/Ticket';

const ticket = new Ticket();

async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Wake up after', time);
            resolve();
        }, time);
    });
}

class TicketTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: []
        };
        console.log('this.state', this.state);
    }

    componentDidMount() {
        this._isMounted = true;
        (async () => {
            try {
                const state = {};
                await sleep(2000);
                console.log('Keep going');
                const json = await ticket.fetch();
                state.table = json.tickets;
                console.log('state', state);
                // eslint-disable-next-line
                // if (this.isMounted()) {
                if (this._isMounted) {
                    this.setState(state);
                }
            } catch (e) {
                console.error('Cannot fill the table:', e);
            }
        })();


    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="flex-table">
                <div className="header">
                    <span className="col-id">Id</span>
                    <span className="col-name">Nom</span>
                    <span className="col-desc">Description</span>
                </div>
                {this.state.table.map((n) =>
                    <div className="body" key={n.id}>
                        <span className="col-id">{n.id}</span>
                        <span className="col-name">{n.name}</span>
                        <span className="col-desc">{n.description}</span>
                    </div>
                )
                }
            </div>
        );
    }
}

export default TicketTable;