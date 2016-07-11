"use strict";

const {join} = require("path");
const {expect} = require("chai");

const {createListener} = require(join(__dirname, "../lib/listener"));

describe("listener module", function() {
  describe("socket state", function() {
    let listener, properties;

    beforeEach(function(done) {
      listener = createListener();
      listener.start(done);
    });

    it("should be in 'BOUND' state (2)", function() {
      expect(listener.socket).to.have.property("_bindState")
        .and.to.equal(2);
    });

    it("should have a correct address (0.0.0.0)", function() {
      properties = listener.socket.address();
      expect(properties.address).to.equal("0.0.0.0");
    });

    it("should have been bound to port 5606", function() {
      properties = listener.socket.address();
      expect(properties.port).to.equal(5606);
    });

    afterEach(function(done) {
      listener.stop(done);
      listener, properties = {};
    });
  });

  describe("message events", function() {
    xit("should receive a message", function(done) {
      expect(server.messageQueue.length).to.have.length(1);
      done();
    });
  });

  describe("socket teardown", function() {
    let listener = {};

    before(function(done) {
      listener = createListener();
      listener.start(function() {
        listener.stop(done);
      });
    });

    it("should have a 'null' handle", function() {
      expect(listener.socket).to.have.property("_handle")
        .and.to.be.null;
    });
  });
});
