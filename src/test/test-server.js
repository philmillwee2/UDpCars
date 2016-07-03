"use strict";

const {join} = require("path");
const {expect} = require("chai");

global.testing = true;

describe("server module", function() {
  let testServer, testStop;

  beforeEach(function(done) {
    testServer = require(join(__dirname, "../../server")).server;
    testStop = require(join(__dirname, "../../server")).stop;
    done();
  });

  afterEach(function(done) {
    if (testServer.status = true) {
      testStop(function(status) {
        testServer.status = status;
      });
    }
    done();
  });

  it("should start properly", function(done) {
    expect(testServer.status, true);
    done();
  });

  // Don't know how to check to see if stopped properly =/
});
