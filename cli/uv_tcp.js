// PURPOSE: Inspect libuv section for TCP data
// RUN: node --experimental-report uv_tcp.js
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "JavaScript API"
// 3. Report trigger is recorded as "API"
// 4. In libuv section of the report, make sure there are 3 sections
//    for tcp, one for server socket (port: 12K), and one for the client
//    socket with some arbitrary lcoal port and 12K as the remote port,
//    and one for the accepted server socket with 12K as local port and
//    the client's port as the remote port


const h = require('http');
const s = h.createServer((q, r) => {
  q.on('end', () => {
    process.report.writeReport();
    process.exit(0)
  });
  q.resume();
});
s.listen(12000, () => {
  h.get({ port: 12000 });
});
