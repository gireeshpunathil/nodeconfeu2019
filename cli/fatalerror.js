// PURPOSE: simulate a Javscript heap OOM
// RUN: node --experimental-report --report-on-fatalerror --max-old-space-size=20 fatalerror.js
// CHECK:
// 1. An OOM has occured
// 2. A report is generated on OOM
// 3. Report event is recorded as "Allocation failed - JavaScript heap out of memory"
// 4. Report trigger is recorded as "FatalError"
// 5. No valid Javastack is present in the report
// 6. A valid native stack is present in the report
// 7. Javascript heap memory section shows little or no available memory at least in the old_space

const l = [];
while (true) {
  const r = new Type();
  l.push(r)
}

function Type() {
  this.name = 'foo';
  this.id = 128;
  this.account = 9845432470;
}
