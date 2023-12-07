
# About
Based on classic sieve of eratosthenes, with only simplest operations needed (0/1). <br>
O(sqrt(n)* (log log n) / log n) memory and O(n) complexity
## C version 
Result depends on hard memory or ssd only! <br>
Up to 2^62 calculations in a normal time (about a minute)
## JS version
Fast calculations up to 2^62, limited by JS engine memory.<br>
Warning: `Rhino` engine does NOT support `BigInt`
## Lisp version
Available for learning, but not a good job, slow, limited by stack memory. <br>
Allocate memory in the heap is possible using strings e.g
```Lisp
(make-string len #\null)
```
Fork and build better version, if you wish!

