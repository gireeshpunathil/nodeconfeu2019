// PURPOSE: simulate a signal reception
// RUN: node --experimental-report --report-on-signal signal.js
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "SIGUSR2"
// 3. Report trigger is recorded as "Signal"
// 4. A valid native stack is present in the report
// 5. Javascript heap section is present
// 6. resource usage section is present
// 7. libuv section is present
// 8. environment variable section is present

// dummy sleep so that the program does not exit premature
setTimeout(()=>{}, 1000);

// Inject a signal.
process.kill(process.pid, 'SIGUSR2');
