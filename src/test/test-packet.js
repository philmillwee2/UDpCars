"use strict";

const {join} = require("path");
const {expect} = require("chai");
const fs = require("fs");
const {sneak} = require(join(__dirname, "../lib/packet"));

describe("packet module", function() {
  const testBuffer = fs.readFileSync(join(__dirname, "../../asset/packets/packet_0.bin"));
  const testPacket = sneak(testBuffer);
  describe("type-0 packets", function() {
    it("should have an sBuildVersion of 1122", function() {
      expect(testPacket.header.sBuildVersion).to.equal(1122);
    });

    it("should have a packet type of 0", function() {
      expect(testPacket.header.sPacketType).to.equal(0);
    });
  });
});
