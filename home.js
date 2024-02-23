
 
 // Получаю данные из текстбоксов
 document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#x").addEventListener('input', () => {
      let data = +document.querySelector("#x").value;
      document.querySelector("#output1").innerHTML = data;
      document.querySelector("#x").value = 123;
    });
    document.querySelector("#y").addEventListener('input', () => {
        let data = +document.querySelector("#y").value;
        document.querySelector("#output2").innerHTML = data;
        document.querySelector("#y").value = 123;
    });
  
    document.querySelector("#z").addEventListener('input', () => {
        let data = +document.querySelector("#z").value;
        document.querySelector("#output3").innerHTML = data;
        document.querySelector("#z").value = 123;
    });
  
  var myElement = document.getElementById('myElement');
  myElement.addEventListener('click', function() {
      console.log('Element was clicked!');
  });
});
 
  // Вывод формы в консоль 
  document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
   // Расчет
   const x1 = x.value + R1.value
   const y2 = y.value + R2.value
   const z3 = z.value + R3.value
    const g1 = +((1/x1).toFixed(3));
    const g2 = +((1/y2).toFixed(3));
    const g3 = +((1/z3).toFixed(3));
    const o1 = Number(counter1.value);
    const o2 = Number(counter2.value);
    const o3 = Number(counter3.value);
   
    
// Вычисление формулы
   let result = +((o1 * E1.value * g1 + o2 * E2.value * g2 + o3 * E3.value * g3/ g1 + g2 + g3).toFixed(2));
   let I1 = +((E1.value - result * g1).toFixed(3));
   let I2 = +((E2.value - result * g2).toFixed(3));
   let I3 = +((E3.value - result * g3).toFixed(3));

   // Вывод результата в консоль
    console.log("Первая ветка: ", form.elements.input1.value);
    console.log("Вторая ветка: ",form.elements.input2.value);
    console.log("Третья ветка: ",form.elements.input3.value);
    console.log("E1: ",form.elements.input4.value);
    console.log("E2: ",form.elements.input5.value);
    console.log("E3: ",form.elements.input6.value);
    console.log("R1: ",form.elements.input7.value);
    console.log("R2: ",form.elements.input8.value);
    console.log("R3: ",form.elements.input9.value);
    console.log("Cтрелка 1 источника: ",form.elements.counter1.value);
    console.log("Cтрелка 2 источника: ",form.elements.counter2.value);
    console.log("Cтрелка 3 источника: ",form.elements.counter3.value);
    console.log("g1: ",g1);
    console.log("g2: ",g2);
    console.log("g3: ",g3);
     console.log("Результат вычисления формулы Uab:", result);
    console.log("Результат вычисления формулы I1:", I1);
    console.log("Результат вычисления формулы I2:", I2);
    console.log("Результат вычисления формулы I3:", I3);
    console.log("---------------------------------------------------");
    form.reset()
    
 document.querySelector('.out').innerHTML = ('I1 =', I1) ;
 document.querySelector('.out2').innerHTML = I2;
 document.querySelector('.out3').innerHTML = I3;
 document.querySelector('.out4').innerHTML = g1;
 document.querySelector('.out5').innerHTML = g2;
 document.querySelector('.out6').innerHTML = g3;
 document.querySelector('.out7').innerHTML = result;
  });

});




 
