#include <stdio.h>
#include <stdlib.h>
  
// 1 125 899 906 842 597
// 18 014 398 509 481 951
// 72 057 594 037 927 931
   
int ipow(unsigned long long int p, int q) {
    unsigned long long int m = p;
    for(int i = 1; i < q; i++) { p = p*m; }
    return p;
   };
   
unsigned long long int clapflag(int n) {
    unsigned long long int len = ipow(2, n);
    unsigned long long int p = len*len - len;
    int *p1 = calloc(len, sizeof(int));
    int *p2 = calloc(len, sizeof(int));
    if(p1 == NULL || p2 == NULL) { printf("Memmory allocation failed!\n"); return len; }
    
    for(int i = 1; i < len; i++) { p1[i] = 1; p2[i] = 1; }
    
    for(int i = 2; i < len; i++) {
        if(p1[i]) {
            for(int e = 2*i; e < len; e += i) {
                p1[e] = 0; continue;
                }
            for(int e = i - (p % i); e < len; e += i) {
                /* Notice, that 'e' never is zero! So the first slot does not change! */
                p2[e] = 0; continue;
                }
            }; continue;
        }
    
    for(unsigned long long int i = len-1; i > 0; i--) {
        if(p2[i]) { free(p1); free(p2); return i+p; }
        }
      printf("Nothing found? Was everithing right?\n");
      return len;
    }
   
   int main() {
    /*  FILE *res = fopen("Largeprime.txt", "w+");
      if(res != NULL) { fprintf(res, clapflag(4)); } else { printf("File couldn't be opened!"); return 0; }
    */
      printf("%llu\n", clapflag(30));
      return 1;
     }
   
   

