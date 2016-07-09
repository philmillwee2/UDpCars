# UDpCars

UDP Service for Project Cars built in NodeJS.

# Goals
1. Create a listening service for pCars
2. Receive packets from pCars into an input queue
3. Process input queue into output queue

![alt tag](https://raw.githubusercontent.com/philmillwee2/UDpCars/dev/doc/Pipeline.png)

# listener module
## Tests
### socket state checks
1.[X] socket _bindState is 2
2.[X] socket address is 0.0.0.0
3.[X] socket port is 5606

### message checks
1.[ ] server is receiving messages as expected

### socket teardown
1.[ ] socket _bindState is 0
  * need to investigate test beforeEach/afterEach to setup test correctly

# Backend Development
## Tasks
1. Docker environment for elasticsearch backend
2. Kibana dashboard for basic display and testing
