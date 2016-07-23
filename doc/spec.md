# UDpCars

UDP Service for Project Cars built in NodeJS.

# Listener Prototype

## Goals
1. Create a listening service for pCars
2. Receive packets from pCars into an input queue
3. Process input queue into output queue

![alt tag](https://raw.githubusercontent.com/philmillwee2/UDpCars/dev/doc/Pipeline.png)

## module
### Tests
#### socket state checks
1.[X] socket _bindState is 2
2.[X] socket address is 0.0.0.0
3.[X] socket port is 5606

#### message checks
1.[X] server is receiving messages as expected

#### socket teardown
1.[X] socket _bindState is 0

# Packet Prototype

## Note on levels
UDP Packets will consist of "packed" data types. This means that a certain level of decomposition will need to take place after the data types have been decoded initially. Decomposition consists of logical operations and bit manipulation.

* Stage-1 - data type extraction from buffer
* Stage-2 - decomposition of data type into atomic values

## Goals
1. Take a peek at the packet
2. Lookup packet definition based on type, seen in sneak(peek)
  * [ ] Refactor sneak function to use callbacks instead of returns
3. Decode packet (Stage-1 only) and create data structure
4. Decode Stage-2 into JSON document

## module
### Tests
1. [X] Verify "Stage-1" decode

# Backend Development
## Tasks
1. Docker environment for elasticsearch backend
2. Kibana dashboard for basic display and testing
