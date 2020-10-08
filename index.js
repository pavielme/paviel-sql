const fetch = require('node-fetch');

class PavielSQL {
    constructor(box) {
        this.box = `http://paviel.me:3330/${box}`;
    }

    async read(option = {}) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const url = [this.box, typeof option === 'string' ? option : ''].join(
            '/'
        );

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        return data;
    }

    async create(body) {
        if (typeof body === 'object') {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            };

            const response = await fetch(this.box, requestOptions);
            const data = await response.json();

            return data;
        } else {
            return { message: 'Invaild request args' };
        }
    }

    async update(record, body) {
        if (typeof body === 'object') {
            const requestOptions = {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            };

            const url = [
                this.box,
                typeof record === 'string' ? record : 'invaild',
            ].join('/');

            const response = await fetch(url, requestOptions);
            const data = await response.json();

            return data;
        } else {
            return { message: 'Invaild body' };
        }
    }

    async remove(record) {
        const requestOptions = {
            method: 'DELETE',
            body: JSON.stringify({
                records: Array.isArray(record) ? [...record] : [],
            }),
            headers: { 'Content-Type': 'application/json' },
        };

        const url = [this.box, typeof record === 'string' ? record : ''].join(
            '/'
        );

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        return data;
    }
}

module.exports = { PavielSQL };
