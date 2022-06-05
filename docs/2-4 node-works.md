# node work

## Node Arch

- **V8 engine**: convert JavaScript code into machine code thar a computer can actually understand
- **libuv**: asynchronous IO, gives Node access to the underlying computer operating system: file system, networking and more.
  - event loop
  - thread pool
- http-parser/c-ares/OpenSSL/zlib

## Thread Pool

> node.js process (instance of a program in execution on a computer)
>
> > single thread (sequence of instructions)
> >
> > - initialize program ->
> > - execute "top-level" code ->
> > - require modules ->
> > - register event callbacks ->
> > - start event loop <->

node takes care fof _automatically_ offloading these task into the thread pool:

- additional 4 threads (or more)
- offload work form the event loop
- handle heavy ("expensive") tasks

## Event Loop

- all the application code that is inside **callback functions**
- node.js is build around callback functions
- event-driven architecture
  - events are emitted
  - event loops picks them up
  - callbacks are called
- event loop does **orchestration**

### Callback Queues

- start ->
- expired timer callbacks ->
- I/O polling and callbacks ->
- setImmediate callbacks ->
- close callbacks ->
- any pending timers or I/O tasks? ->
- exit

### Process.nextTick() Queue

### Other MicroTasks Queue (Resolved promise)

### Don't Block

- don't use **sync** versions of functions in _fs_, _crypto_ and _zlib_ modules in your callback functions
- don't perform complex calculations (e.g. loops inside loops)
- be careful with JSON in large objects
- don't use too complex regular expressions (e.g. nested quantifiers)

## Event-Driven (Observer pattern)

- Event emitter -> (emits events)
- Event listener -> (calls)
- Attached callback function

## Streams

used to process (read and write) data piece by piece (chunks), without completing the whole read or write operation, and therefore without keeping all the data in memory.

- prefect for handling large volumes of data, for example videos
- more efficient data processing in terms of memory (no need to keep all data in memory) and time (we don't have to wait until all the data is available)

- readable streams: http requests, fs read streams
- writable streams: http responses, fs write streams
- duplex streams: net web socket
- transform streams: zlib gzip creation

## Require()

- resolving & loading ->
- wrapping ->
- execution ->
- returning exports ->
- caching
