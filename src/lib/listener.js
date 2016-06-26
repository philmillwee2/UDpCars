"use strict";

const dgram = require("dgram");

exports.listener = function() {
	                                        const server = dgram.createSocket("udp4");

	                                        server.bind(5606);

	                                        return server;
};