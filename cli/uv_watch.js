// PURPOSE: Inspect libuv section for file watch data
// RUN: node --experimental-report uv_watch.js
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "JavaScript API"
// 3. Report trigger is recorded as "API"
// 4. In libuv section of the report, make sure there are sections for
//    i) fs_poll ii) fs_event that map to the file being watched.

const f = require('fs');
let w;
try {
  w = f.watch(__filename);
} catch {
}

f.watchFile(__filename, () => {});

setInterval(() => {
  process.report.writeReport();
  if (w) w.close();
  process.exit(0);
}, 1000);
