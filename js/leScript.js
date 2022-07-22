        // EJERCICIO 1
        function cambiaBorde(){
            let anya = document.getElementById('anya1');

            if (anya.style.border === ""){
                anya.style.border = "dotted 3px red";
                anya.src = "assets/img/anya2.png";
            } else {
                anya.style.border = "";
                anya.src = "assets/img/anya1.png";
            }
        }

        // EJERCICIO 2

        function stickers(){
            let cant1 = document.getElementById('cant1'); cant1 = Number(cant1.value)
            let cant2 = document.getElementById('cant2'); cant2 = Number(cant2.value)
            let cant3 = document.getElementById('cant3'); cant3 = Number(cant3.value)
            const resultado = document.getElementById('resultado')
            
            if (cant1 !== 0 || cant2 !== 0 || cant3!== 0){
                let total = cant1 + cant2 + cant3;
                total <=10 ? resultado.innerHTML = 'Tienes ' + total + ' stickers' :  resultado.innerHTML = 'Te pasaste!!';
            }else if(cant1 === 0 || cant2 === 0 || cant3 === 0){
                resultado.style.color ='red';
                resultado.innerHTML = 'Selecciona al menos un sticker'
            }
        } 

        // EJERCICIO 3
        function password(){
            let s1 = document.getElementById('s1'); let s2 = document.getElementById('s2'); let s3 = document.getElementById('s3');
            let guess = document.getElementById('guess');
            let combi = s1.value + s2.value + s3.value;
            if (combi === '911'){
                guess.innerHTML = 'Password 1 correcto';
            }
            else if(combi === '714'){
                guess.innerHTML = 'Password 2 correcto';
            }else{
                guess.innerHTML = 'Password incorrecto';
            }
        }