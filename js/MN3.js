document.addEventListener("DOMContentLoaded", function () {
  // при вводе R значение выводится на схему
  document.querySelector("#x").addEventListener('input', () => {
    document.querySelector('#R1_shema_value').innerHTML = document.querySelector("#x").value;
  })
  document.querySelector("#y").addEventListener('input', () => {
    document.querySelector('#R2_shema_value').innerHTML = document.querySelector("#y").value;
  })
  document.querySelector("#z").addEventListener('input', () => {
    document.querySelector('#R3_shema_value').innerHTML = document.querySelector("#z").value;
  })

  // при вводе E значение выводится на схему
  document.querySelector("#E1").addEventListener('input', () => {
    document.querySelector('#E1_shema_value').innerHTML = document.querySelector("#E1").value;
  })
  document.querySelector("#E2").addEventListener('input', () => {
    document.querySelector('#E2_shema_value').innerHTML = document.querySelector("#E2").value;
  })
  document.querySelector("#E3").addEventListener('input', () => {
    document.querySelector('#E3_shema_value').innerHTML = document.querySelector("#E3").value;
  })
})
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
  
      document.querySelector("#z").addEventListener('input', () => {
        let data = +document.querySelector("#z").value;
        document.querySelector("#output3").innerHTML = data;
        document.querySelector("#z").value = 123;
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
      const R3val = +(R3.value);
      const xR = +(x.value) + R1val
      const yR = +(y.value) + R2val
      const zR = +(z.value) + R3val
      const E1val = +(E1.value);
      const E2val = +(E2.value);
      const E3val = +(E3.value);
      const o1 = Number(counter1.value);
      const o2 = Number(counter2.value);
      const o3 = Number(counter3.value);
    
      // Вычисление формулы


// 1 ветка
    // R паралельное 
      let Rpar1 = (+(+(yR) * +(zR)) / ((+(yR) + +(zR)))).toFixed(2) ;
    // R эквивалентное (складываем)
      let Rek1 = (+(Rpar1) + +(x.value)).toFixed(2)
    // I
      let I11 = (+(E1val) / (+(Rek1) + +(R1val))).toFixed(2)
    // U_ab
      let Uab1 = (+(I11) * +(Rpar1)).toFixed(2)
   
// 2 ветка
      // R паралельное 
      let Rpar2 = (+(+(xR) * +(zR)) / ((+(xR) + +(zR)))).toFixed(2)  ;
      // R эквивалентное (складываем)
      let Rek2 = (+(Rpar2) + +(y.value)).toFixed(2);
      // I
      let I22 = (+(E2val) / (+(Rek2) + +(R2val))).toFixed(2)
      // U_ab
      let Uab2 = (+(I22) * +(Rpar2)).toFixed(2)
// 3 ветка
      // R паралельное 
      let Rpar3 = (+(+(xR) * +(yR)) / ((+(xR) + +(yR)))).toFixed(2)  ;
      // R эквивалентное (складываем)
      let Rek3 = (+(Rpar3) + +(z.value)).toFixed(2);
      // I   
       let I33 = (+(E3val) / (+(Rek3) + +(R3val))).toFixed(2)
      // U_ab
       let Uab3 = (+(I33) * +(Rpar3)).toFixed(2)

        // I
        let I21 = (+(Uab1) / +(yR)).toFixed(2)
        let I31 = (+(Uab1) / +(zR)).toFixed(2)

        let I12 = (+(Uab2) / +(xR)).toFixed(2)
        let I32 = (+(Uab2) / +(zR)).toFixed(2)

        let I13 = (+(Uab3) / +(xR)).toFixed(2)
        let I23 = (+(Uab3) / +(yR)).toFixed(2)
//I + знак направления

const I11val = I11 * o1

const I12val = I12 * o2
const I13val = I13 * o3


const I22val = I22 * o1

const I21val = I21 * o2
const I23val = I23 * o3


const I33val = I33 * o1

const I31val = I31 * o2
const I32val = I32 * o3


        //Проверка
        let res1 = I11val +  I12val + I13val
        let res2 = I21val +  I22val + I23val
        let res3 = I31val +  I32val + I33val



      // Вывод результата в консоль
      console.log("Первая ветка: ", xR);
      console.log("Вторая ветка: ", yR);
      console.log("Третья ветка: ", zR);
      console.log("E1: ", E1val);
      console.log("E2: ", E2val);
      console.log("E3: ", E3val);
      console.log("R1: ", R1val);
      console.log("R2: ",R2val);
      console.log("R3: ", R3val);
      console.log("Cтрелка 1 источника: ", o1);
      console.log("Cтрелка 2 источника: ", o2);
      console.log("Cтрелка 3 источника: ", o3);
      console.log("Результат 1: ", res1);
      console.log("Результат 2 ", res2);
      console.log("Реузльтат 3", res3);
      console.log("-------------------------------------");
      console.log("I11val: ", I11val);
      console.log("I12val: ", I12val);
      console.log("I13val: ", I13val);

      console.log("-------------------------------------");
      console.log("I21val: ", I21val);
      console.log("I22val: ", I22val);
      console.log("I23val: ", I23val);

      console.log("-------------------------------------");
      console.log("I31val: ", I31val);
      console.log("I32val: ", I32val);
      console.log("I33val: ", I33val);
    
   
    
      
      console.log("---------------------------------------------------");
      
      // Вывод результата в текст
       //out n(1) - Первый источник 
       //I n1 -  первая ветка
    document.querySelector('.out11').innerHTML = Rpar1;  // R паралельное 1 источника
    document.querySelector('.out21').innerHTML = Rek1;   // R эквевалентное 1 источника
    document.querySelector('.out31').innerHTML = I11;    // Расчитваемый истинный ток
    document.querySelector('.out41').innerHTML = Uab1;   // Uab 1 источника
    document.querySelector('.out51').innerHTML = I21;    // Расчитваемый истинный ток
    document.querySelector('.out61').innerHTML = I31;    // Расчитваемый истинный ток


    document.querySelector('.out12').innerHTML = Rpar2; // R паралельное 2 источника
    document.querySelector('.out22').innerHTML = Rek2;  // R эквевалентное 2 источника
    document.querySelector('.out32').innerHTML = I22;   // Расчитваемый истинный ток
    document.querySelector('.out42').innerHTML = Uab2;  // Uab 1 источника
    document.querySelector('.out52').innerHTML = I12;   // Расчитваемый истинный ток
    document.querySelector('.out62').innerHTML = I32;   // Расчитваемый истинный ток

    
    document.querySelector('.out13').innerHTML = Rpar3; // R паралельное 3 источника
    document.querySelector('.out23').innerHTML = Rek3;  // R эквевалентное 3 источника
    document.querySelector('.out33').innerHTML = I33;   // Расчитваемый истинный ток
    document.querySelector('.out43').innerHTML = Uab3;  // Uab 1 источника
    document.querySelector('.out53').innerHTML = I13;   // Расчитваемый истинный ток
    document.querySelector('.out63').innerHTML = I23;   // Расчитваемый истинный ток

    document.querySelector('.out1').innerHTML = res1; // Результат 1
    document.querySelector('.out2').innerHTML = res2; // Результат 2
    document.querySelector('.out3').innerHTML = res3; // Результат 3
    

  
    });

// Отче наш, иже еси на АйБиЭм ПиСи, код наш насущный дай нам!
// Помилуй нас от пэйпер джэма и фатал эрора!
// Дай нам MD-ков неубываемых и паролей на них.
// Искупи нам десницей Своей комплектующих для
// Апгрейда ненасытного, ибо душит нас Жаба великая
// и страдаем мы от недостатка ресурсов системных.

// Не допусти выполнения недопустимой операции и
// скрой сведения от очей наших.
// Не дай нам впасть во искушение новыми релизами,
// ибо лукав Нуралиев-искуситель сотоварищи.
// Удержи нас грешных от эф-диска и формата. Да
// минуют нас бэд-блоки и вирусы.
// Умерь гордыню нашу, ибо не зашарим и крохи малой
// ближнему своему.

// Избавь нас от Юзера глупого, ибо продвинут он стал и имя ему БУХ.
// Выправи программы наши кривые, ибо клинит башни
// нам от конфигураторов и отладчиков Открой нам
// знание, ибо истинно говоришь Ты нам, где тру и фолс.
// Откомментируй код наш многомегабайтный, ибо
// погрязли мы в MD-шниках своих

// Укроти ламеров, имя Твое всуе поминающих, ибо не ведают, что творят.
// Упаси нас от Галактик и Бэстов. Да приидет царствие одинэса.
// Не заставь нас нырять в мануалы бездонные и хэлпы
// путанные, ибо ересь в них, а дай нам уразуметь
// ридмя крошечные, ибо в них слово Господне.
// Инкапсулируй объекты наши, ибо полиморфны они и
// наследуют Царствие Твое.

// Выведи нас из цикла бесконечного, ибо на переход
// Твой безусловный уповаем.
// Укажи нам путь верный, ибо блуждаем мы средь
// интерфейсов и парадигм и несть им числа.
// Не пронеси мимо чашу сию неупиваемую, ибо пива
// жаждем мы и коннекта алкаем.
// Молим Тебя и ниц перед Тобой падаем со серверами нашими.
// Отныне и присно, энд лайфтайм, бэкап!

  });
  
  
  
  
  
  