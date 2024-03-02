
// Получаю данные из текстбоксов
document.addEventListener("DOMContentLoaded", function () {
    // при вводе R значение выводится на схему
    document.querySelector("#R1").addEventListener('input', () => {
      document.querySelector('#R1_shema_value').innerHTML = document.querySelector("#R1").value;
    })
    document.querySelector("#R2").addEventListener('input', () => {
      document.querySelector('#R2_shema_value').innerHTML = document.querySelector("#R2").value;
    })

    // при вводе E значение выводится на схему
    document.querySelector("#E1").addEventListener('input', () => {
      document.querySelector('#E1_shema_value').innerHTML = document.querySelector("#E1").value;
    })
    document.querySelector("#E2").addEventListener('input', () => {
      document.querySelector('#E2_shema_value').innerHTML = document.querySelector("#E2").value;
    })

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
  
  
      var myElement = document.getElementById('myElement');
      myElement.addEventListener('click', function () {
        console.log('Element was clicked!');
      });
   
      
    });
  
    
    document.querySelector('form').addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector('form');
      // Расчет
      
      const R1val = +(R1.value)
      const R2val = +(R2.value)

      const E1val = +(E1.value)
      const E2val = +(E2.value)

      const x1 = +(x.value) + R1val
      const y2 = +(y.value) + R2val

      const g1 = +((1 / x1).toFixed(3));
      const g2 = +((1 / y2).toFixed(3));

      const o1 = Number(counter1.value);
      const o2 = Number(counter2.value);

      const E1o1 = o1 * E1val
      const E2o2 = o2 * E2val

  
      // Вычисление формулы
      // U_ab
      let result = +(((E1o1 * g1 + E2o2 * g2 )/(g1 + g2 )).toFixed(2));
      // g
      let I1 = +(((E1o1 - result) * g1).toFixed(2));
      let I2 = +(((E2o2 - result) * g2).toFixed(2));
  
      // Вывод результата в консоль
      console.log("Первая ветка: ", x.value);
      console.log("Вторая ветка: ", form.elements.input2.value);
      console.log("E1: ", E1val);
      console.log("E2: ", E2val);
      console.log("R1: ", R1val);
      console.log("R2: ",R2val);
      console.log("Cтрелка 1 источника: ", o1);
      console.log("Cтрелка 2 источника: ", o2);
      console.log("x1: ", x1);
      console.log("y2: ", y2);
      console.log("g1: ", g1);
      console.log("g2: ", g2);
      console.log("Результат вычисления формулы Uab:", result);
      console.log("Результат вычисления формулы I1:", I1);
      console.log("Результат вычисления формулы I2:", I2);
  
    
      
      console.log("---------------------------------------------------");
      
      // Вывод результата в текст
     
      document.querySelector('.out1').innerHTML = g1;
      document.querySelector('.out2').innerHTML = g2;
       document.querySelector('.out3').innerHTML = result;
      document.querySelector('.out4').innerHTML = I1;
      document.querySelector('.out5').innerHTML = I2;
  
    });
  
  });