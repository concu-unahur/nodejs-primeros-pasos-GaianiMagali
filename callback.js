function siguiente(x, next) {
  next(x + 1)
}

siguiente(2, resultado => { 
  console.log('Siguiente de 8 =>', resultado)
})

//--------------------------------
function doble(x,next){
  next(x*2)
  };
  
  doble(8, resultado =>{
  console.log('El doble de 8 =>', resultado);
  });
  
  //--------------------------------
  function calcular(resultado){
  doble(resultado, res => console.log(`Siguiente del doble => ${res}`))
  }
  
  // siguiente(2, resultado => {
  // console.log('Siguiente de 2 =>', resultado)
  // })
  // doble(2, resultado => console.log('El doble de 2 =>', resultado));
  
  // doble(5,resultado => {
  // siguiente(resultado , res => console.log('El doble del siguiente',res))
  // })
  
  siguiente(2, calcular )
  
  //--------------------------------
  function cuadruple(resultado){
  doble(resultado,res => console.log(`El cuadruple de 8 es => ${res}`));
  }
  doble(8, cuadruple)