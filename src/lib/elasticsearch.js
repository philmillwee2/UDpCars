"use strict";

const util = require("util");
const elasticsearch = require("elasticsearch");

let client = new elasticsearch.Client({
  host: "bowser.bigblue.local:9200",
  log: "error"
});

function loadTelemetry(packet, index) {
  let data = {};

  const timestamp = (new Date()).toISOString();
  const today = timestamp.substring(0, 10).replace(/-/g, ".");

  if (index === null) {
    data.index = util.format("pcars-%s", today);
  } else {
    data.index = util.format(index + "-%s", "1999.01.01");
  }

  data.type = "race";
  data.body = packet.data;
  data.body.date = timestamp;

  client.create(data);
}

module.exports = {
  loadTelemetry
};
