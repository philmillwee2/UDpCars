"use strict";

module.exports = class Packet {
  constructor(content) {
    this.sBuildVersion = content.readUInt16LE(0);
    const seq_packet = content.readUInt8(2);
    this.sequenceNumber = seq_packet & 0xFC >> 2;

    this.sPacketType = seq_packet & 0x3;

    this.payload = Buffer.from(content);
  }
};
