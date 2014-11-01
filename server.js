/***************************************
## HINTS

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here so we need to use the net module from Node core which has all the basic networking functions.

The net module has a method named net.createServer() that takes a callback function. Unlike most callbacks in Node, the callback used by createServer() is called more than once. Every connection received by your server triggers another call to the callback. The callback function has the signature:

    function callback (socket) { ... }

net.createServer() also returns an instance of your server. You must call server.listen(portNumber) to start listening on a particular port.

A typical Node TCP server looks like this:

    var net = require('net')
    var server = net.createServer(function (socket) {
      // socket handling logic
    })
    server.listen(8000)

Remember to use the port number supplied to you as the first command-line argument.

The socket object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to. For this exercise we only need to write data and then close the socket.

Use socket.write(data) to write data to the socket and socket.end() to close the socket. Alternatively, the .end() method also takes a data object so you can simplify to just: socket.end(data).

Documentation on the net module can be found by pointing your browser here:

  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html

To create the date, you'll need to create a custom format from a new Date() object. The methods that will be useful are:

    date.getFullYear()
    date.getMonth()     // starts at 0
    date.getDate()      // returns the day of month
    date.getHours()
    date.getMinutes()

Or, if you want to be adventurous, use the strftime package from npm. The strftime(fmt, date) function takes date formats just like the unix date command. You can read more about strftime at: [https://github.com/samsonjs/strftime](https://github.com/samsonjs/strftime)
***********/
