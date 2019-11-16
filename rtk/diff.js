// PURPOSE: Make use of report tool kit's diff functionality
// RUN: node diff.js
// CHECK:
// 1. Two reports are generated
// 2. run: ls report.* | xargs rtk diff
// 3. Make sure at least 2 differences are shown:
//    i) two different process ids
//    ii) different values for env value FOO

// Child sequence
if (process.argv[2] === 'child') {
  // just write a report and exit
  process.report.writeReport();
  process.exit(0);
} else {

// Parent sequence
  const spawn = require('child_process').spawn;
  const args = ['--experimental-report', __filename, 'child'];

  // set an env called FOO with value X
  process.env.FOO = 'X';
  const c1 = spawn(process.execPath, args);

  c1.on('exit', (code) => {
    // reset FOO with value Y
    process.env.FOO = 'Y';
    spawn(process.execPath, args);
  })
}
