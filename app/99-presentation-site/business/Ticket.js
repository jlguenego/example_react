import 'babel-polyfill';

export class Ticket {
    async fetch() {
        return fetch('./data/ticket.json').then(function(response) {
			return response.json();
		}).then(function(json) {
            console.log('json', json);
            return Promise.resolve(json);
        }).catch((e) => {
            console.error('error', e);
            return [];
		});
    }

   
}
