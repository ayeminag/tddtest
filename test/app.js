var sinon = require('sinon'),
  chai = require('chai'),
  request = require('supertest'),
  httpMock = require('node-mocks-http'),
  app = require('./../app'),
  mymiddlewares = require('./../middlewares/mymiddlewares');
  execpt = chai.expect;
chai.should();

describe('all', function(){
  describe("app.js", function(){
    it("should return object with a message hellothere", function(done){
      request(app).post('/')
        .expect(200, {
          message: "fucker"
        }, done);
    });

    it("should return you made it here on get request", function(done) {
      request(app).get('/')
        .expect(200, "you made it, here!", done);
    });
  });

  describe("mymiddlewares.somemiddleware", function() {
    beforeEach(function(){
      req = httpMock.createRequest({body: {}});
      res = httpMock.createResponse();
    });

    it("should assign req.body to an object", function() {
      var somemiddleware = mymiddlewares.somemiddleware();
      var next = sinon.spy();
      somemiddleware(req, res, next);
      req.body.should.be.an.object;
      req.body.should.have.property("message");
      req.body.message.should.equal("hello there");
      next.calledOnce.should.be.true;
    });
  });
});