function maketoast(callback:()=>void){
 console.log('making toast...')
 setTimeout(()=>{
    console.log('toast is ready')
    callback()
 },6000)       
}

function boilEgg(callback:()=>void){
    console.log('making boiling egg...')
    setTimeout(()=>{
       console.log('Boil egg is ready')
       callback()
    },2000)       
   }

   function makeCoffee(callback:()=>void){
    console.log('making Coffee...')
    setTimeout(()=>{
       console.log('Coffee is ready')
       callback()
    },10000)       
   }

   function notify2(){
    console.log('your breakfast is ready')
   }

   maketoast(()=>{
    boilEgg(()=>{
        makeCoffee(()=>{
            notify2()
        })
    })
   })