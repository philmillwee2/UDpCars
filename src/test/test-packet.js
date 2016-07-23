"use strict";

const {join} = require("path");
const {expect} = require("chai");
const fs = require("fs");
const {sneak} = require(join(__dirname, "../lib/packet"));

describe("packet module", function() {
  const content = fs.readFileSync(join(__dirname, "../../asset/packets/packet_0.bin"));

  let testPacket;
  sneak(content, function(tmpPacket) {
    testPacket = tmpPacket;
  });
  describe("type-0 packets", function() {
    describe("stage 1 decoding", function() {
      it("should have an sBuildVersion of 1122", function() {
        expect(testPacket.header.sBuildVersion).to.equal(1122);
      });

      it("should have an sPacketType of 0", function() {
        expect(testPacket.header.sPacketType).to.equal(0);
      });
    });
  });
});
