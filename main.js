const display = document.getElementById('display')


function appendNumber(input){
  display.value = display.value + input;




}
      function calculate(){
        const result = new Function(`return ${display.value}`)();
        display.value = result;
      }


   