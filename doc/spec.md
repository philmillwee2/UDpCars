# UDpCars

UDP Service for Project Cars built in NodeJS.

# Goals
1. Create a listening service for pCars
2. Receive packets from pCars into an input queue
3. Process input queue into output queue

![alt tag](https://raw.githubusercontent.com/philmillwee2/UDpCars/dev/doc/Pipeline.png)

# Thoughts
1. Split out the specific socket events into units (moved to separate file)
2. Maybe focus on the units once things have been broken apart

# Server module
## Tests
### Server state checks
1.[ ] server is started (status === true)
2.[ ] server ip is 0.0.0.0
3.[ ] server port is 5606

### dgram checks
1.[ ] server is receiving messages as expected

### Server teardown
1.[ ] server is stopped (status === false)
  * need to investigate test beforeEach/afterEach to setup test correctly
