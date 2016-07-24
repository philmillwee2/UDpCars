"use strict";

const {join} = require("path");
const raceMath = require(join(__dirname, "raceMath"));

let Packet = {
  "0": function(peek, callback) {
    let packet = {
      header: peek.header,
      data: {
        // Unfiltered input
        sUnfilteredThrottle: peek.payload.readUInt8(6),
        sUnfilteredBrake: peek.payload.readUInt8(7),
        sUnfilteredSteering: peek.payload.readInt8(8),
        sUnfilteredClutch: peek.payload.readUInt8(9),
        sRaceStateFlags: peek.payload.readUInt8(10),

        // Event information
        sLapsInEvent: peek.payload.readUInt8(11),

        // Timings
        sBestLapTime: peek.payload.readFloatLE(12),
        sLastLapTime: peek.payload.readFloatLE(16),
        sCurrentTime: peek.payload.readFloatLE(20),
        sEventTimeRemaining: peek.payload.readFloatLE(36),
        sCurrentSector1Time: peek.payload.readFloatLE(48),
        sCurrentSector2Time: peek.payload.readFloatLE(52),
        sCurrentSector3Time: peek.payload.readFloatLE(56),
        sFastestSector1Time: peek.payload.readFloatLE(60),
        sFastestSector2Time: peek.payload.readFloatLE(64),
        sFastestSector3Time: peek.payload.readFloatLE(68)
      }
    };
    callback(packet);
  },
  "1": function(peek, callback) {
    callback({ header: peek.header, data: null });
  },
  "2": function(peek, callback) {
    callback({ header: peek.header, data: null });
  }
};

function sneak (content, callback) {
  let peek = {
    header: {
      sBuildVersion: content.readUInt16LE(0),
      sequence: content.readUInt8(2) & 0xFC >> 2,
      sPacketType: content.readUInt8(2) & 0x3
    },
    payload: content
  };

  Packet[peek.header.sPacketType](peek, callback);
}

module.exports = {
  sneak,
};
