// PURPOSE: simulate a JavaScript heap OOM
// RUN: node --report-on-fatalerror --max-old-space-size=50 fatalerror.js
// CHECK:
// 1. An OOM has occurred
// 2. A report is generated on OOM
// 3. Report event is recorded as "Allocation failed - JavaScript heap out of memory"
// 4. Report trigger is recorded as "FatalError"
// 5. No valid JavaScript stack is present in the report
// 6. A valid native stack is present in the report
// 7. 'javascriptHeap' section shows little or no available memory at least in the old_space

const l = []
while (true) {
  const r = new Type()
  l.push(r)
}

function Type() {
  this.name = 'foo'
  this.id = 128
  this.account = 9845432470
}
