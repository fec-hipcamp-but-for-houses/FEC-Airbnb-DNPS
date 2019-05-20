const request = require('supertest');
const app = require('../server/app');

describe('Test the description API', () => {
  test('It should response a description object', async (done) => {
  //  url needs listingId becasue in server/index.js app.get use a whole URL
    const response = await request(app).get('/rooms?listingId=0');
    expect(response.statusCode).toBe(200);
    expect(response.header).toHaveProperty('content-type', 'application/json; charset=utf-8');
    expect(response.body.listingId).toBe(0);
    expect(response.body).toHaveProperty('room');
    done();
  });
});
