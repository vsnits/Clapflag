
 (begin
   (define n 25)
   (define len (expt 2 n))
   (define p (- (* len len) len ))
   (define p1 (make-vector len #t))
   (define p2 (make-vector len #t))
   (define (deeploop s e m func)
       (define (inner i)
           (if (< i e)
                  (and (func i) (inner (+ i m)))
                  i
             )
         )
        (inner s)
    )
   (define (cmp1 i)
       (vector-set! p1 i #f)
     )
    (define (cmp2 i)
       (vector-set! p2 i #f)
     )
   (define (makebitmap i)
       (deeploop (* 2 i) len i cmp1)
       (deeploop (- i (remainder p i)) len i cmp2) 
       ;; Reminder never takes zero! Notice, the first slot of p2 always filled!
     )
   (define (loopmove i)
       (if (vector-ref p1 i)
          (makebitmap i)
          i
        )
     )
   (define (show i)
      (if (vector-ref p2 i)
         (and (display (+ i p)) (set! notfound #f))
         #f
        )
     )
   (deeploop 2 len 1 loopmove)
   
   ;; Reading results!
   (define notfound #t)
   (define (invloop s m func)
       (define (inner i)
           (show i)
           (if (and (> i 0) notfound)
                  (inner (- i m))
                  i
             )
         )
        (inner s)
    )
   (invloop (- len 1) 1 show)
   (display "\n")
 )
   
   

