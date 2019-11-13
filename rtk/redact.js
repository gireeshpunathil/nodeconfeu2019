// PURPOSE: Make use of report tool kit's redact functionality
// RUN: USER=root PASSWORD=passwd node --experimental-report --report-on-signal redact.js
// NOTICE: this doesn't yet work on windows
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "SIGUSR2"
// 3. Report trigger is recorded as "Signal"
// 4. A valid native stack is present in the report
// 5. Javascript heap section is present
// 6. resource usage section is present
// 7. libuv section is present
// 8. environment variable section is present
// 9. locate the env variable USER and PASSWORD are present
// 10. run: rtk redact --output foo.json <generated report>
// 11. run: diff <generated report> foo.json
// 12. verify that the PASSWORD value is redated in foo.json

// dummy sleep so that the program does not exit premature
setTimeout(()=>{}, 1000)

// Inject a signal.
process.kill(process.pid, 'SIGUSR2')
