document.addEventListener("DOMContentLoaded", function () {
  // при вводе R значение выводится на схему
  document.querySelector("#R1").addEventListener('input', () => {
    document.querySelector('#R1_shema_val()').innerHTML = document.querySelector("#R1").val();
  })
  document.querySelector("#R2").addEventListener('input', () => {
    document.querySelector('#R2_shema_val()').innerHTML = document.querySelector("#R2").val();
  })
  document.querySelector("#R3").addEventListener('input', () => {
    document.querySelector('#R3_shema_val()').innerHTML = document.querySelector("#R3").val();
  })

  // при вводе E значение выводится на схему
  document.querySelector("#E1").addEventListener('input', () => {
    document.querySelector('#E1_shema_val()').innerHTML = document.querySelector("#E1").val();
  })
  document.querySelector("#E2").addEventListener('input', () => {
    document.querySelector('#E2_shema_val()').innerHTML = document.querySelector("#E2").val();
  })
  document.querySelector("#E3").addEventListener('input', () => {
    document.querySelector('#E3_shema_val()').innerHTML = document.querySelector("#E3").val();
  })


  document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();

    // const R1val = +(document.querySelector("#E1").value);
    // const R2val = +(R2.value);
    // const R3val = +(R3.value);
    // const xR = +(x.value) + R1val
    // const yR = +(y.value) + R2val
    // const zR = +(z.value) + R3val
    // const E1val = +(E1.value);
    // const E2val = +(E2.value);
    // const E3val = +(E3.value);
    // const o1 = Number(counter1.value);
    // const o2 = Number(counter2.value);
    // const o3 = Number(counter3.value);
    // const E1o1 = o1 * E1val
    // const E2o2 = o2 * E2val
    // const E3o3 = o3 * E3val

    const E1_val = $("#E1").val()*$("#counter1").val()
    const E2_val = $("#E2").val()*$("#counter2").val()
    const E3_val = $("#E3").val()*$("#counter3").val()

    R1 = +$("#R1").val()
    R2 = +$("#R2").val()
    R3 = +$("#R3").val()
    r1 = +$("#r1").val()
    r2 = +$("#r2").val()
    r3 = +$("#r3").val()

    // Паралелим

    console.log('R1, R3, R1+R3', R1, R3, R1+R3)
    let Rpar1 = +(R2*R3/(R2+R3)).toFixed(2);
    let Rpar2 = +(R1*R3/(R1+R3)).toFixed(2);
    let Rpar3 = +(R2*R1/(R2+R1)).toFixed(2);
    console.log('Rpar1, Rpar2, Rpar3', Rpar1, Rpar2, Rpar3)

    // R эквивалентное = Rпар + R главной ветви (без r)

    let Rek1 = +(Rpar1+R1).toFixed(2)
    let Rek2 = +(Rpar2+R2).toFixed(2)
    let Rek3 = +(Rpar3+R3).toFixed(2)
    console.log('Rek1, Rek2, Rek3', Rek1, Rek2, Rek3)

    // I

    let I11 = +(E1_val/(Rek1 + r1)).toFixed(2)
    let I22 = +(E2_val/(Rek2 + r2)).toFixed(2)
    let I33 = +(E3_val/(Rek3 + r3)).toFixed(2)
    console.log('I11, I22, I33', I11, I22, I33)

    // U_ab

    // // 1 ветка
    // let Uab1 = (+(I11) * +(Rpar1)).toFixed(2)
    // // 2 ветка
    // let Uab2 = (+(I22) * +(Rpar2)).toFixed(2)
    // // 3 ветка
    // let Uab3 = (+(I33) * +(Rpar3)).toFixed(2)

    // // I
    // let I21 = (+(Uab1) / +(yR)).toFixed(2)
    // let I31 = (+(Uab1) / +(zR)).toFixed(2)

    // let I12 = (+(Uab2) / +(xR)).toFixed(2)
    // let I32 = (+(Uab2) / +(zR)).toFixed(2)

    // let I13 = (+(Uab3) / +(xR)).toFixed(2)
    // let I23 = (+(Uab3) / +(yR)).toFixed(2)

    // //Проверка
    // let res1 = (+(I11) + +(I21) + +(I31)).toFixed(2)
    // let res2 = (+(I12) + +(I22) + +(I32)).toFixed(2)
    // let res3 = (+(I13) + +(I23) + +(I33)).toFixed(2)



    // // Вывод результата в консоль
    // console.log("Первая ветка: ", xR);
    // console.log("Вторая ветка: ", yR);
    // console.log("Третья ветка: ", zR);
    // console.log("E1: ", E1val);
    // console.log("E2: ", E2val);
    // console.log("E3: ", E3val);
    // console.log("R1: ", R1val);
    // console.log("R2: ", R2val);
    // console.log("R3: ", R3val);
    // console.log("Cтрелка 1 источника: ", o1);
    // console.log("Cтрелка 2 источника: ", o2);
    // console.log("Cтрелка 3 источника: ", o3);
    // console.log("Результат 1: ", res1);
    // console.log("Результат 2 ", res2);
    // console.log("Проверка 3", res3);



    console.log("---------------------------------------------------;")



  });
});