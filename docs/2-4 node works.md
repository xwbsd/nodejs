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
