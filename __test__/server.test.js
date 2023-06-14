'use strict';


const supertest = require('supertest');
const {app} = require('../src/server');
const req = supertest(app);

describe('Server test', () => {
    it('Handel not found pages', async () => {
      const res = await req.get('/items');
      expect(res.status).toEqual(404);
    })

    it('Handel not found pages', async () => {
      const res = await req.put('/items');
      expect(res.status).toEqual(404);
    })
    
    it('Handle errors', async () => {
      const res = await req.get('/bad');
      expect(res.status).toEqual(500);
      expect(res.body.route).toEqual('/bad');
    })
})  