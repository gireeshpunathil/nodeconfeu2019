// PURPOSE: verify that report on fatalerror can be configured
// RUN: node --experimental-report --max-old-space-size=20 fatalerror.js
// CHECK: The report is generated upon fatal error (OOM)

process.report.reportOnFatalError = true;

// emulate an Javascript heap OOM

const list = [];
while (true) {
  const record = new MyRecord();
  list.push(record);
}

function MyRecord() {
  this.name = 'foo';
  this.id = 128;
  this.account = 9845432470;
}
