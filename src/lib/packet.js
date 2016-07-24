"use strict";

const {join} = require("path");
const {unsignedClamp, signedClamp} = require(join(__dirname, "raceMath"));
const numeral = require("numeral");

function decodeTelemetry(packet, callback) {
  let telemetry = {
    header: packet.header,
    data: {
      // Game States
      mRaceState: (packet.data.sRaceStateFlags & 0x7),

      // Unfiltered input
      mUnfilteredThrottle: unsignedClamp(packet.data.sUnfilteredThrottle, 255),
      mUnfilteredBrake: unsignedClamp(packet.data.sUnfilteredBrake, 255),
      mUnfilteredSteering: signedClamp(packet.data.sUnfilteredSteering, 127),
      mUnfilteredClutch: unsignedClamp(packet.data.sUnfilteredClutch, 255),

      // Event Information
      mLapsInEvent: packet.data.sLapsInEvent,

      // Timings
      mLapInvalidated: ((packet.data.sRaceStateFlags & 0x8) > 0),
      mBestLapTime: numeral(packet.data.sBestLapTime).format("00:00:00"),
      mLastLapTime: numeral(packet.data.sLastLapTime).format("00:00:00"),
      mCurrentTime: numeral(packet.data.sCurrentTime).format("00:00:00"),
      mEventTimeRemaining: numeral(packet.data.sEventTimeRemaining).format("00:00:00"),
      mCurrentSector1Time: numeral(packet.data.sCurrentSector1Time).format("00:00:00"),
      mCurrentSector2Time: numeral(packet.data.sCurrentSector2Time).format("00:00:00"),
      mCurrentSector3Time: numeral(packet.data.sCurrentSector3Time).format("00:00:00"),
      mFastestSector1Time: numeral(packet.data.sFastestSector1Time).format("00:00:00"),
      mFastestSector2Time: numeral(packet.data.sFastestSector2Time).format("00:00:00"),
      mFastestSector3Time: numeral(packet.data.sFastestSector3Time).format("00:00:00"),

      // Car state
      mAntiLockActive: ((packet.data.sRaceStateFlags & 0x16) > 0),
      mBoostActive: ((packet.data.sRaceStateFlags & 0x32) > 0),
    }
  };

  callback(telemetry);
}

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
    decodeTelemetry(packet, callback);
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
