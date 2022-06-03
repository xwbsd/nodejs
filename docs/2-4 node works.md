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
