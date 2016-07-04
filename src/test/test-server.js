"use strict";

const {join} = require("path");
const {expect} = require("chai");

describe("server module", function() {
  describe("server state", function() {
    xit("should have a server status of true", function(done) {
      expect(server.status).to.be.true;
      done();
    });

    xit("should have been bound to address 0.0.0.0", function(done) {
      expect(properties.address).to.equal("0.0.0.0");
      done();
    });

    xit("should have been bound to port 5606", function(done) {
      expect(properties.port).to.equal(5606);
      done();
    });
  });

  describe("udp socket", function() {
    xit("should receive a message", function(done) {
      expect(server.messageQueue.length).to.have.length(1);
      done();
    });
  });

  describe("server teardown", function() {
    xit("should have a server status of false after teardown", function(done) {
      expect(server.status).to.be.false;
      done();
    });
  });
});
