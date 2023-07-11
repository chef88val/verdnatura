const request = require('supertest');
const URL = 'http://localhost:3100'
const ENDPOINT = '/api/book'
const book = {
    "id": "64adc16077da08918a52548a",
    "title": "TEST",
    "writer": "JS",
    "category": "1"
}
describe('Book module', () => {
    test('can get books', (done) => {
        request(URL)
            .get(ENDPOINT)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                return done()
            });
    });
    test('can post a book', (done) => {
        request(URL)
            .post(ENDPOINT).send(book)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                return done()
            });
    });
    test('can get a book', (done) => {
        request(URL)
            .get(`${ENDPOINT}?bookID=${book.id}`)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                return done()
            });
    });

    test('can update a book', (done) => {
        request(URL)
            .put(`${ENDPOINT}?bookID=${book.id}`).send({ "writer": "OTHER" })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                return done()
            });
    });
    test('can delete a book', (done) => {
        request(URL)
            .del(`${ENDPOINT}?bookID=${book.id}`)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                return done()
            });
    });
})
