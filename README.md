
# Clapflag
Based on classic sieve of eratosthenes, only with simplest operations needed. <br>
O(sqrt(n)* (log log n) / log n) memory and O(n) complexity
# C version 
Result depends on hard memory, but relatively slowly works. <br>
Forks are welcome!
# JS version
Fast calculations up to 10^19, limited by JS engine memory.<br>
Warning: `Rhino` does NOT support `BigInt`
# Lisp version
Available for learning, limited by stack memory and not so fast. <br>
Allocating memory in the heap is possible using strings e.g
```Lisp
(make-string len #\null)
```
Fork and build if you want to practice Lisp!

