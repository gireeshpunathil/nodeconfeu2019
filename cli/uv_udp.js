// PURPOSE: Inspect libuv section for UDP  data
// RUN: node --experimental-report uv_udp.js
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "JavaScript API"
// 3. Report trigger is recorded as "API"
// 4. In libuv section of the report, make sure there are 2 sections
//    for udp, one for the local and one for the remote endpoints.

const d = require('dgram');
const us = d.createSocket('udp4');
const cus = d.createSocket('udp4');
us.bind({}, () => {
  cus.connect(us.address().port, () => {
    process.report.writeReport();
    process.exit(0);
  });
});
