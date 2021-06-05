
var dibujo1 = {
        1:"░░░░░░░░░░░▄▄▀▀▀▀▀▀▀▀▄▄",
        2:"░░░░░░░░▄▀▀░░░░░░░░░░░░▀▄▄",
        3:"░░░░░░▄▀░░░░░░░░░░░░░░░░░░▀▄",
        4:"░░░░░▌░░░░░░░░░░░░░▀▄░░░░░░░▀▀▄",
        5:"░░░░▌░░░░░░░░░░░░░░░░▀▌░░░░░░░░▌",
        6:"░░░▐░░░░░░░░░░░░▒░░░░░▌░░░░░░░░▐",
        7:"░░░▌▐░░░░▐░░░░▐▒▒░░░░░▌░░░░░░░░░▌",
        8:"░░▐░▌░░░░▌░░▐░▌▒▒▒░░░▐░░░░░▒░▌▐░▐",
        9:"░░▐░▌▒░░░▌▄▄▀▀▌▌▒▒░▒░▐▀▌▀▌▄▒░▐▒▌░▌",
        10:"░░░▌▌░▒░░▐▀▄▌▌▐▐▒▒▒▒▐▐▐▒▐▒▌▌░▐▒▌▄▐",
        11:"░▄▀▄▐▒▒▒░▌▌▄▀▄▐░▌▌▒▐░▌▄▀▄░▐▒░▐▒▌░▀▄",
        12:"▀▄▀▒▒▌▒▒▄▀░▌█▐░░▐▐▀░░░▌█▐░▀▄▐▒▌▌░░░▀",
        13:"░▀▀▄▄▐▒▀▄▀░▀▄▀░░░░░░░░▀▄▀▄▀▒▌░▐",
        14:"░░░░▀▐▀▄▒▀▄░░░░░░░░▐░░░░░░▀▌▐",
        15:"░░░░░░▌▒▌▐▒▀░░░░░░░░░░░░░░▐▒▐",
        16:"░░░░░░▐░▐▒▌░░░░▄▄▀▀▀▀▄░░░░▌▒▐",
        17:"░░░░░░░▌▐▒▐▄░░░▐▒▒▒▒▒▌░░▄▀▒░▐",
        18:"░░░░░░▐░░▌▐▐▀▄░░▀▄▄▄▀░▄▀▐▒░░▐",
        19:"░░░░░░▌▌░▌▐░▌▒▀▄▄░░░░▄▌▐░▌▒░▐",
        20:"░░░░░▐▒▐░▐▐░▌▒▒▒▒▀▀▄▀▌▐░░▌▒░▌",
        21:"░░░░░▌▒▒▌▐▒▌▒▒▒▒▒▒▒▒▐▀▄▌░▐▒▒",
        }
        
        var dibujo2 = {
            1:"░░░░░░░░░░░▄▄▀▀▀▀▀▀▀▀▄▄",
            2:"░░░░░░░░▄▀▀░░░░░░░░░░░░▀▄▄",
            3:"░░░░░░▄▀░░░░░░░░░░░░░░░░░░▀▄",
            4:"░░░░░▌░░░░░░░░░░░░░▀▄░░░░░░░▀▀▄",
            5:"░░░░▌░░░░░░░░░░░░░░░░▀▌░░░░░░░░▌",
            6:"░░░▐░░░░░░░░░░░░▒░░░░░▌░░░░░░░░▐",
            7:"░░░▌▐░░░░▐░░░░▐▒▒░░░░░▌░░░░░░░░░▌",
            8:"░░▐░▌░░░░▌░░▐░▌▒▒▒░░░▐░░░░░▒░▌▐░▐",
            9:"░░▐░▌▒░░░▌▄▄▀▀▌▌▒▒░▒░▐▀▌▀▌▄▒░▐▒▌░▌",
            10:"░░░▌▌░▒░░▐▀▄▌▌▐▐▒▒▒▒▐▐▐▒▐▒▌▌░▐▒▌▄▐",
            11:"░▄▀▄▐▒▒▒░▌▌▄▀▄▐░▌▌▒▐░▌▄▀▄░▐▒░▐▒▌░▀▄",
            12:"▀▄▀▒▒▌▒▒▄▀░▌█▐░░▐▐▀░░░▌█▐░▀▄▐▒▌▌░░░▀",
            13:"░▀▀▄▄▐▒▀▄▀░▀▄▀░░░░░░░░▀▄▀▄▀▒▌░▐",
            14:"░░░░▀▐▀▄▒▀▄░░░░░░░░▐░░░░░░▀▌▐",
            15:"░░░░░░▌▒▌▐▒▀░░░░░░░░░░░░░░▐▒▐",
            16:"░░░░░░▐░▐▒▌░░░░▄▄▀▀▀▀▄░░░░▌▒▐",
            17:"░░░░░░░▌▐▒▐▄░░░░░░░░░░░░░▄▀▒░▐",
            18:"░░░░░░▐░░▌▐▐▀▄░░░░░░░░▄▀▐▒░░▐",
            19:"░░░░░░▌▌░▌▐░▌▒▀▄▄░░░░▄▌▐░▌▒░▐",
            20:"░░░░░▐▒▐░▐▐░▌▒▒▒▒▀▀▄▀▌▐░░▌▒░▌",
            21:"░░░░░▌▒▒▌▐▒▌▒▒▒▒▒▒▒▒▐▀▄▌░▐▒▒",
        }
        
         linea=0
         dibuj=1
         dibujito()
          function dibujito(){
        
             linea
             setInterval(function(){ 
                
                linea=linea + 1
        
             if(linea <=21 &&dibuj==1){
                  console.log(dibujo1[linea])
                }
        
               if(linea==21&&dibuj==1){
                  linea=0
                  dibuj=0
                 }
        
        
             if(linea<=21&&dibuj==0){
              console.log(dibujo2[linea])
              }
        
                if(linea==21){
                   linea=0
                  dibuj=1
        
                }
        
                }, 200);
        
        
        }
        