// PURPOSE: simulate an uncaught exception
// RUN: node --experimental-report --report-uncaught-exception exception.js
// CHECK:
// 1. An uncaught exception has occurred (of type ERR_INVALID_PROTOCOL)
// 2. A report is generated on exception
// 3. Report event is recorded as "Protocol hppt not supported. Expected http"
// 4. Report trigger is recorded as "Exception"
// 5. A valid Javastack with message is present in the report
// 6. A valid native stack is present in the report

const h = require('http');
h.createServer((q, r) => {
  r.end('hello!')
}).listen(12000, ()=> {
  h.get('hppt://localhost:12000', (r) => {
    r.on('data', (d) => {
      console.log(d.toString())
    })
  })
});
