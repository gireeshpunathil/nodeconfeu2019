// PURPOSE: Inspect libuv section for timer data
// RUN: node --experimental-report uv_timer.js
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "JavaScript API"
// 3. Report trigger is recorded as "API"
// 4. In libuv section of the report, make sure there are 2 sections
//    for timer, one with timer expired and non-active, while the
//    the other still active with some firesInMsFromNow less than 10K.

setTimeout(() => {}, 10000);
setTimeout(() => {
  process.report.writeReport();
  process.exit(0);
}, 1000);
