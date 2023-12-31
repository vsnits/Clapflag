
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// 288 230 376 151 711 717 at depth 29
// Recommended flag -O1

#define setbit(A, k) (A[k/32] |= (1 << (k %32)))
#define getbit(A, k) (A[k/32] & (1 << (k % 32)))

unsigned long long int clapflag(int n) {
    unsigned long long int len = exp2(n);
    unsigned long long int p = len*len - len;
    int *p1 = calloc(len, 1);
    int *p2 = calloc(len, 1);
    if(p1 == NULL || p2 == NULL) { 
        printf("Memmory allocation failed!\n"); return len; 
        }
    
    setbit(p1, 0); setbit(p2, 0); // Notice, this is important!
   
    for(unsigned long long int i = 2; i < len; i++) {
        if(!getbit(p1, i)) {
            for(unsigned long long int e = 2*i; e < len; e += i) {
                setbit(p1, e); continue;
                }
            for(unsigned long long int e = i - (p % i); e < len; e += i) {
                setbit(p2, e); continue;
                }
            }; continue;
        }
    
    for(unsigned long long int i = len-1; i > 0; i--) {
        if(!getbit(p2, i)) { free(p1); free(p2); return i+p; }
        }
    free(p1); free(p2); // Don't forget keep clean
    printf("Nothing found? Was everithing right?\n");
    return len;
    };

int main() {
    intf("%llu\n", clapflag(28));
    return 1;
    };

