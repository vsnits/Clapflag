  
  const clapflag = (halfsqrtn) => {
      
      "use strict"

      // largest possible:   4 611 686 018 427 387 847

      // netbook + palemoon: 1 125 899 906 842 597
      //  with previous alg:    70 368 744 177 643

      // This implimintation features fast byte-access time along with some math tricks
      // along with some low-level optimization tricks

      // Max Uint8ClapmpedArray length is 2^30 => halfsqrtn < 2^30

      const len = halfsqrtn|0 // >= 2 <= 2^30
      if (len < 2 || len >> 31) return 0; // some clever syntax :D

      const p1 = new Uint8ClampedArray(len).fill(1, 1)
      const p2 = new Uint8ClampedArray(len).fill(1) // ok since odds excluded
      
      // there are two parts, one for base and one for output
      // as follows from mathematical optimization
      // consider not trying to implement bit-access
      // instead of write flags to array
      // that's going to be slower anyway [I tried]
      
      var p, e // :D that vars lie down on stack

      for(var i=1|0; i<len; i+=1) {      // ! starting from 0 1 2 3 4 5 6 7 8 9
                                        //                  x   x ^ x   x   x ^ 
          if(p1[i]) {                  //                     0   1   2   3   4

              // odd posistions were completely excluded
              // position numerals changed however

              p=(i+i+1)|0 // not allocate, just assign (which I believe is better)

              // toogle down kth bytes 
              // keep in mind there are no odd numbers 

              for(e=i+p; e<len; e+=p) p1[e]=0; // (i+p) -> think about it

               // jump over the unnecessary positions by calculating %
               // u < x < u*u - u 
               // all the neccessary primes are lie inside u
               // futher more, we can say which numbers are prime in (u*u -u)

               // hardware optimization of the following two lines is tricky
               // it can get down your perfomance abolishing all the ideas

               // align calculated from the end. + ~= - but the idea looks cleaner
               // as from test, calculating from begining makes no difference in perfomance
  
               // var d = len % prime           // (1 3) 5 7 9 11 (13 15)
               // d = (2*d*d -i) % prime       //   x ^  +3  ^ +3     ^ 

               // allocating another var is ?probably slower than additional calculations
               // a = b in js seems to be actually resource consuming, I prefer avoiding it

               // align (d) = ( (4*len*len)/2 - 1 - i ) % prime
               //             ^ actual set length   ^ prime starting pos

               // loop starting position = (len - d -1)
               // so the result is (len - d)

               // hm.. the last position simply couldn't be a prime being a^2 -1
               for(e=len-(2*(len%p)*(len%p)-i)%p; ~e>>>31; e-=p) p2[e]=0; // can also be at zero

               // ~e>>>31 checks e >= 0 in terms of bits
               // toogle and return the first bit
               // actually not sure how it affects perfomance, but looks cool

              }
          }
      
      // output the biggest result prime
      // it can be obtained from flaged positions (1)

      for(var i = len-2; i >= 0; i--) { // last position is not prime! but first can be
           if(p2[i]) {

                // what is done here: relative number (position based) + quantity of positions skipped
                // need bigint thanks to magical JS numbers

                return BigInt(2*i+1) + 4n*BigInt(len)*BigInt(len)-2n*BigInt(len)

               } 
           }
      };


   
   

