const { expect } = require('chai')
const router = require('../router')
const request = require('request')

describe('Test for getting and posting notes', () => {

  describe('for getting notes', () => {
    it('should get notes', (done) => {
      const options = {
        json: true,
        method: 'GET'
      }
      request('http://localhost:3000/notes', options, (error, res, body) => {
        expect(res.statusCode).to.be.equal(200)
        done()
      })
    })
  })

  describe('for posting notes', () => {
    it('should post notes', (done) => {
      const options = {
        method: 'POST',
        json: true,
        body: {notas: 'this is first message'}
      }
      request('http://localhost:3000/notes', options, (error, res, body) => {
        expect(res.statusCode).to.be.equal(201)
        expect(res.body).to.have.property('id')
          .that.is.a('number')
        expect(res.body).to.have.property('timestamp')
        done()
      })
    })
  })

})
