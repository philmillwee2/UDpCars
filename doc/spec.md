# UDpCars

UDP Service for Project Cars built in NodeJS.

# Goals
1. Create a listening service for pCars
2. Receive packets from pCars into an input queue
3. Process input queue into output queue

![alt tag](https://raw.githubusercontent.com/philmillwee2/UDpCars/dev/doc/Pipeline.png)

# listener.js (skipped)
## Tests
1. [X] address() checks for ip
2. [X] address() checks for port
3. [ ] test message receipt
  a. learn how to mock message

## Questions
1. In "test-listener.js" the second it() in describe("listener module"), the
   assert is not wrapped in a promise. Will the it#1 and it#2 always work in
   order as desired?
