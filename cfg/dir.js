// PURPOSE: verify that report directory can be configured
// RUN: node --experimental-report dir.js
// CHECK: The report is generated in the specified folder


const f = require('fs');
const p = require('path');

const d = p.join(__dirname, 'temp');
f.mkdirSync(d);
process.report.directory = d;
process.report.writeReport();
