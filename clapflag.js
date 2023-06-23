 
// 1 152 921 504 606 846 883 is max JavaScript allowed, already mentioned in gcc hashtable

// 18 446 744 073 709 551 557 also mentioned in gcc
// https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/src/shared/hashtable-aux.cc

function clapflag(n) {
    var len = Math.pow(2, n)
    var p = BigInt(len*len - len)
    var p1 = new Uint8ClampedArray(len).fill(1, 1)
    var p2 = new Uint8ClampedArray(len).fill(1, 1)
    
    for(var i = 2; i < len; i++) {
        if(p1[i]) {
            for(var e = 2*i; e < len; e += i) {
                p1[e] = 0; continue  
                }
            for(var e = i - Number(p % BigInt(i)); e < len; e += i) {
                 /* Notice, that 'e' never is zero! So the first slot does not change! */
                p2[e] = 0; continue
                }
            }; continue
        }
    for(var i = len-1; i > 0; i--) {
        if(p2[i]) { p1 = p2 = undefined; return BigInt(i)+p }
        }
    
    }
   
   

