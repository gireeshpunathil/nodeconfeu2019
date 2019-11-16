// PURPOSE: verify that report on exception can be configured
// RUN: node --experimental-report exception.js
// CHECK: The report is generated upon uncaught exception

process.report.reportOnUncaughtException = true;

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
