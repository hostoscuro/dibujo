
//hello = () => {
//   return "Hello World!";
// }

inventario=false
recoger="si"
moverte=false
lugar="zona00"
len=0
aleat=0


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


        var espada1 = {
            atk:100,
            dure:4,

        }

        var espada2 = {
         atk:100,
         dure:1,
     }
     
     var zona00={
      
   }

         var zona1={
            1:"nose",

         }

         var zona2={
            1:"nose",
            2:"nose",
            3:"nose",
         }

         var zona3={
            1:"nose",
            2:"nose",
         }

         var zona4={
            1:"nose",
            2:"nose",
            3:"nose",
            4:"nose",
         }

         var zona5={
            1:"nose",
            2:"nose",
            3:"nose",
            4:"nose",
            5:"nose",
         }


         const caminar=(lugar)=>{
            
                

         }
        
          const recojeritem=()=>{
            
            if(recoger=="si"){
                inventario=true
            }

          }
           
          const radarzona =() =>{
               


          }

          const espada=()=>{


         }


         linea=0
         dibuj=1
         conteo=0
         intro=false
        // intro1=0
         //dibujito()  
         //console.log("code") 

         const dibujando =()=>{
            linea=linea + 1
            //conteo= conteo +1
            //console.log(conteo)
            //console.log(intro)
            if(conteo==4){
               intro=true
               clearInterval(imprimir)
              // console.log(conteo)
              // console.log(intro)
               introducion()
              }
    
         if(linea <=21 &&dibuj==1){
              console.log(dibujo1[linea])
            }
    
           if(linea==21&&dibuj==1){
              linea=0
              dibuj=0
              conteo=conteo+1
             }
    
    
         if(linea<=21&&dibuj==0){
          console.log(dibujo2[linea])
          }
    
            if(linea==21){
              linea=0
              dibuj=1
              conteo=conteo+1
            
            }

         }
         
         function dibujito(){
                  
            imprimir=setInterval(dibujando,10)
            
                    
       }
         
               dibujito()
                
           const aleatorio=()=>{

             aleat = Math.floor(Math.random() * (5 - 2) ) + 1;
            console.log(aleat)
           }

          const cardinal=()=>{
              
             len = Object.keys([lugar]).length
               console.log("en este lugar hay " + len + " item")
              // console.log(len)
               //console.log("items") 
               
               if(len=>0){
                  console.log("deseas recojer?")
                  var contestacion2 = prompt('ehh? dime:?', 'no');
               }
               if(contestacion2=="si"){
                  console.log("asdasdr?")

               }
               if(contestacion2=="no"){
                  console.log("haber que hay por aca")
                  aleatorio()
                  lugar="zona"+[aleat]
                  console.log(lugar)
                  cardinal()
               }

          }

         const introducion =()=> {
                  
                if(intro==true){
                  console.log("de pronto ves una cueva tenebrosa deseas moverte a la cueva? si ho no?")
                  
                  console.log(len)
                  var contestacion = prompt('ehh? dime:?', 'Tengo miedo');

                  if(contestacion=="si"){
                     lugar=="zona1"
                     cardinal()
                  }else if(contestacion=="no"){

                  }else if(contestacion=="tengo miedo"){

                  }else{
                     console.log("no te entiendo") 
                  }

                  if(lugar=="zona00"){

                  }else if(lugar=="zona1"){

                  }else if(lugar=="zona2"){

                  }

                  if(moverte==true){
                      
                     radarzona()

                  }


                 
                }else{
                 // clearInterval(imprimir)
                  console.log("entro2")
                }   
                          
         }
          
        

         

          
        