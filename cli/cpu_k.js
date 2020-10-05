// PURPOSE: examine the CPU consumed by the program in the kernel space
// RUN: node cpu_k.js
// CHECK:
// 1. A report is generated
// 2. 'resourceUsage' section is present in the report
// 3. A key named cpuConsumptionPercent is present in the section
// 4. Its value is close to 100.
// 5. A key named userCpuSeconds is present in the section
// 6. Its value is close to 0 (total run time in seconds in the user space)
// 7. A key named kernelCpuSeconds is present in the section
// 8. Its value is close to 10 (total time spent in seconds in the kernel space)


// Read node.exe a thousand times in a tight loop
const f = require('fs')
for (var i = 0; i < 1000; i++)
  f.readFileSync(process.execPath)

// and take a report
process.report.writeReport()
