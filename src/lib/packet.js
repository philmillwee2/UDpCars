"use strict";

function sneak (content) {
  let peek = {
    header: {
      sBuildVersion: content.readUInt16LE(0),
      sequence: content.readUInt8(2) & 0xFC >> 2,
      sPacketType: content.readUInt8(2) & 0x3
    },
    payload: content
  };

  return peek;
}

module.exports = {
  sneak,
};
