import request from 'request'
import { expect } from 'chai'
import 'mocha'
//  mock data to be served from this URL: https://api.myjson.com/bins/1eg3bc

//  import sinon
import sinon from 'sinon'

//  import Fetcher
import { Fetcher } from '../../src/services/Fetcher';


describe ('Fetcher', () => {
    before(() => {
        sinon
        .stub(request, 'get')
        .yields(null, null, {data: 200})
    })

    it ('should do get request', () => {
       Fetcher.get('https://api.myjson.com/bins/1eg3bc').then((res) => {
       console.log('Get request was successful')
       expect(res.model).to.equal("Ferrari 458 Italia")
       expect(res.color).to.equal('red');
       })
       .catch((err) => {
           throw err;
       })
    })
})
