const request = require('supertest');
const app = require('../endpoints');
const customers = require('./test-constants');

describe('Get all customers', () => {
  it('should return all customers', async () => {
    const response = await request(app)
      .get('');

    expect(response.body).toEqual(customers);
  });
});

describe('Search by first name', () => {
  // Here I am simply looking for the first customer in the array of customers
  it('should return customer with first name GYPXT', async () => {
    const response = await request(app)
      .get('')
      .query({ search: 'GYPXT' });

    // We know that there is only one element in the array (the first element) whose
    // first name property has the value GYPXT. A real app's test would be done
    // differently, of course
    expect(response.body).toEqual([customers[0]]);
  })
});

describe('Filter by company name', () => {
  it('should return customer with company name TYUNH Inc.', async () => {
    const response = await request(app)
      .get('')
      .query({ filter_by_company_name: 'TYUNH Inc.'});

    // Similar logic to the comment in the previous test.
    expect(response.body).toEqual([customers[1]]);
  });
});
