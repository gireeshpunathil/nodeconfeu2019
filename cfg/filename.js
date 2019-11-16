// PURPOSE: verify that report filename can be configured
// RUN: node --experimental-report filename.js
// CHECK: The report is generated with the specified filename

process.report.filename = 'myreport.json';
process.report.writeReport();
