"use strict";

function unsignedClamp(val, maxInt) {
  return (val / maxInt).toFixed(3);
}

function signedClamp(val, maxInt) {
  return (val / maxInt).toFixed(3);
}

module.exports = {
  unsignedClamp,
  signedClamp
};
