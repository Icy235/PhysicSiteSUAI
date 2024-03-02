
// Получаю данные из текстбоксов
document.addEventListener("DOMContentLoaded", function () {
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
      
      const R1val = +(R1.value);
      const R2val = +(R2.value);

      const xR = +(x.value) + R1val
      const yR = +(y.value) + R2val

      const E1val = +(E1.value);
      const E2val = +(E2.value);

      const o1 = Number(counter1.value);
      const o2 = Number(counter2.value);

      const E1o1 = o1 * E1val
      const E2o2 = o2 * E2val

      // Вычисление формулы

       // Паралелим
       
   
      // R эквивалентное (складываем)

      // 1 ветка
      let Rek1 = ( +(x.value)).toFixed(2)

      // 2 ветка
      let Rek2 = ( +(y.value)).toFixed(2)

     
      // I

       // 1 ветка
       let I11 = (+(E1o1) / (+(Rek1) + +(R1val))).toFixed(2)
       

       // 2 ветка
       let I22 = (+(E2o2) / (+(Rek2) + +(R2val))).toFixed(2)

    

      // U_ab

      // 1 ветка
       let Uab1 = (+(I11) ).toFixed(2)
      // 2 ветка
       let Uab2 = (+(I22) ).toFixed(2)
    

        // I
        let I21 = (+(Uab1) / +(yR)).toFixed(2)
     

        let I12 = (+(Uab2) / +(xR)).toFixed(2)
    

 
     
        //Проверка
        let res1 = (+(I11) + +(I21) ).toFixed(2)
        let res2 = (+(I12) + +(I22) ).toFixed(2)
      



      // Вывод результата в консоль
      console.log("Первая ветка: ", xR);
      console.log("Вторая ветка: ", yR);

      console.log("E1: ", E1val);
      console.log("E2: ", E2val);

      console.log("R1: ", R1val);
      console.log("R2: ",R2val);

      console.log("Cтрелка 1 источника: ", o1);
      console.log("Cтрелка 2 источника: ", o2);

      console.log("Результат 1: ", res1);
      console.log("Результат 2 ", res2);

   
    
      
      console.log("---------------------------------------------------");
      
      // Вывод результата в текст
       //out1(1) - Первый источник (не дает скобки поставить)

    document.querySelector('.out21').innerHTML = Rek1;   // R эквевалентное 1 источника
    document.querySelector('.out31').innerHTML = I11;    // Расчитваемый истинный ток
    document.querySelector('.out41').innerHTML = Uab1;   // Uab 1 источника
    document.querySelector('.out51').innerHTML = I21;    // Расчитваемый истинный ток



    document.querySelector('.out22').innerHTML = Rek2;  // R эквевалентное 2 источника
    document.querySelector('.out32').innerHTML = I22;   // Расчитваемый истинный ток
    document.querySelector('.out42').innerHTML = Uab2;  // Uab 1 источника
    document.querySelector('.out52').innerHTML = I12;   // Расчитваемый истинный ток


    document.querySelector('.out1').innerHTML = res1; // Результат 1
    document.querySelector('.out2').innerHTML = res2; // Результат 2

    

  
    });


  });
  
  
  
  
  
  