// PURPOSE: examine the CPU consumed by the program in the user space
// RUN: node cpu_u.js
// CHECK:
// 1. A report is generated
// 2. 'resourceUsage' section is present in the report
// 3. A key named cpuConsumptionPercent is present in the section
// 4. Its value is close to 100.
// 5. A key named userCpuSeconds is present in the section
// 6. Its value is close to 10 (total run time in seconds in the user space)
// 7. A key named kernelCpuSeconds is present in the section
// 8. Its value is close to 0 (total time spent in seconds in the kernel space)

// Tight loop for 10 seconds
const start = Date.now()
while (Date.now() - start < 10000);

// and take a report
process.report.writeReport()
