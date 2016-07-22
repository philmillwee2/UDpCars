"use strict";

let Packet = {
  "0": function(peek) {
    return {
      header: peek.header,
      data: {
        // Game states
        sGameSessionState: peek.payload.readUInt8(3),

        // Participant info
        sViewedParticipantIndex: peek.payload.readInt8(4),
        sNumParticipants: peek.payload.readInt8(5),

        // Unfiltered input
        sUnfilteredThrottle: peek.payload.readUInt8(6),
        sUnfilteredBrake: peek.payload.readUInt8(7),
        sUnfilteredSteering: peek.payload.readInt8(8),
        sUnfilteredClutch: peek.payload.readUInt8(9),
        sRaceStateFlags: peek.payload.readUInt8(10),

        // Event information
        sLapsInEvent: peek.payload.readUInt8(11),
      }

        // Timings
        //sBestLapTime: peek.payload.readFloatLE(12),
        //sLastLapTime: peek.payload.readFloatLE(16),
        //sCurrentTime: peek.payload.readFloatLE(20),
        //sSplitTimeAhead: peek.payload.readFloatLE(24),
        //sSplitTimeBehind: peek.payload.readFloatLE(28),
        //sSplitTime: peek.payload.readFloatLE(32),
        //sEventTimeRemaining: peek.payload.readFloatLE(36),
        //sPersonalFastestLapTime: peek.payload.readFloatLE(40),
        //sWorldFastestLapTime: peek.payload.readFloatLE(44),
        //sCurrentSector1Time: peek.payload.readFloatLE(48),
        //sCurrentSector2Time: peek.payload.readFloatLE(52),
        //sCurrentSector3Time: peek.payload.readFloatLE(56),
        //sFastestSector1Time: peek.payload.readFloatLE(60),
        //sFastestSector2Time: peek.payload.readFloatLE(64),
        //sFastestSector3Time: peek.payload.readFloatLE(68),
        //sPersonalFastestSector1Time: peek.payload.readFloatLE(72),
        //sPersonalFastestSector2Time: peek.payload.readFloatLE(76),
        //sPersonalFastestSector3Time: peek.payload.readFloatLE(80),
        //sWorldFastestSector1Time: peek.payload.readFloatLE(84),
        //sWorldFastestSector2Time: peek.payload.readFloatLE(88),
        //sWorldFastestSector3Time: peek.payload.readFloatLE(92),

        //sJoyPad: peek.payload.readUInt16LE(96),

        // Flags
        //sHighestFlag: peek.payload.readUInt8(98),

        // Pit info
        //sPitModeSchedule: peek.payload.readUInt8(99),

        // Car state
        //sOilTempCelsius: peek.payload.readInt16LE(100),
        //sOilPressureKPa: peek.payload.readUInt16LE(102),
        //sWaterTempCelsius: peek.payload.readInt16LE(104),
        //sWaterPressureKpa: peek.payload.readUInt16LE(106),
        //sFuelPressureKpa: peek.payload.readUInt16LE(108),
        //sCarFlags: peek.payload.readUInt8(110),
        //sFuelCapacity: peek.payload.readUInt8(111),
        //sBrake: peek.payload.readUInt8(112),
        //sThrottle: peek.payload.readUInt8(113),
        //sClutch: peek.payload.readUInt8(114),
        //sSteering: peek.payload.readInt8(115),
        //sFuelLevel: peek.payload.readFloatLE(116),
        //sSpeed: peek.payload.readFloatLE(120),
        //sRpm: peek.payload.readUInt16LE(124),
        //sMaxRpm: peek.payload.readUInt16LE(126),
        //sGearNumGears: peek.payload.readUInt8(128),
        //sBoostAmount: peek.payload.readUInt8(129),
        //sEnforcedPitStopLap: peek.payload.readInt8(130),
        //sCrashState: peek.payload.readUInt8(131),

        //sOdometerKM: peek.payload.readFloatLE(132),
        //sOrientation[3]: peek.payload.readFloatLE(136),
        //sLocalVelocity[3]: peek.payload.readFloatLE(148),
        //sWorldVelocity[3]: peek.payload.readFloatLE(160),
        //sAngularVelocity[3]: peek.payload.readFloatLE(172),
        //sLocalAcceleration[3]: peek.payload.readFloatLE(184),
        //sWorldAcceleration[3]: peek.payload.readFloatLE(196),
        //sExtentsCentre[3]: peek.payload.readFloatLE(208),

        // Wheels / Tyres
        //sTyreFlags[4]: peek.payload.readUInt8(220),
        //sTerrain[4]: peek.payload.readUInt8(224),
        //sTyreY[4]: peek.payload.readFloatLE(228),
        //sTyreRPS[4]: peek.payload.readFloatLE(244),
        //sTyreSlipSpeed[4]: peek.payload.readFloatLE(260),
        //sTyreTemp[4]: peek.payload.readUInt8(276),
        //sTyreGrip[4]: peek.payload.readUInt8(280),
        //sTyreHeightAboveGround[4]: peek.payload.readFloatLE(284),
        //sTyreLateralStiffness[4]: peek.payload.readFloatLE(300),
        //sTyreWear[4]: peek.payload.readUInt8(316),
        //sBrakeDamage[4]: peek.payload.readUInt8(320),
        //sSuspensionDamage[4]: peek.payload.readUInt8(324),
        //sBrakeTempCelsius[4]: peek.payload.readInt16LE(328),
        //sTyreTreadTemp[4]: peek.payload.readUInt16LE(336),
        //sTyreLayerTemp[4]: peek.payload.readUInt16LE(344),
        //sTyreCarcassTemp[4]: peek.payload.readUInt16LE(352),
        //sTyreRimTemp[4]: peek.payload.readUInt16LE(360),
        //sTyreInternalAirTemp[4]: peek.payload.readUInt16LE(368),
        //sWheelLocalPositionY[4]: peek.payload.readFloatLE(376),
        //sRideHeight[4]: peek.payload.readFloatLE(392),
        //sSuspensionTravel[4]: peek.payload.readFloatLE(408),
        //sSuspensionVelocity[4]: peek.payload.readFloatLE(424),
        //sAirPressure[4]: peek.payload.readUInt16LE(440),

        // Extras
        //sEngineSpeed: peek.payload.readFloatLE(448),
        //sEngineTorque: peek.payload.readFloatLE(452),

        // Car damage
        //sAeroDamage: peek.payload.readUInt8(456),
        //sEngineDamage: peek.payload.readUInt8(457),

        // Weather
        //sAmbientTemperature: peek.payload.readInt8(458),
        //sTrackTemperature: peek.payload.readInt8(459),
        //sRainDensity: peek.payload.readUInt8(460),
        //sWindSpeed: peek.payload.readInt8(461),
        //sWindDirectionX: peek.payload.readInt8(462),
        //sWindDirectionY: peek.payload.readInt8(463),

        // MAGIC STRUCT BUSINESS HERE sParticipantInfo sParticipantInfo[56]:  // 464
                                      // 56*16=896
        //sTrackLength: peek.payload.readFloatLE(1360),
        //sWings[2]: peek.payload.readUInt8(1364),
        //sDPad: peek.payload.readUInt8(1366),
    };
  },
  "1": function() {
    return "bar";
  },
  "2": function() {
    return null;
  }
};

function sneak (content) {
  let peek = {
    header: {
      sBuildVersion: content.readUInt16LE(0),
      sequence: content.readUInt8(2) & 0xFC >> 2,
      sPacketType: content.readUInt8(2) & 0x3
    },
    payload: content
  };

  return Packet[peek.header.sPacketType](peek);
}

module.exports = {
  sneak,
};
