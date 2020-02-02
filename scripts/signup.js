document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {

        "format": "dd.mm.yyyy"

    });
  });

document.querySelector("#signup-btn").onclick = function(event){

    event.preventDefault();
    let name = document.querySelector("#signup-name").value;
    let password = document.querySelector("#signup-pass").value;
    let email = document.querySelector("#signup-email").value;
    let birthday = document.querySelector("#signup-birthday").value;
    let sex = document.querySelectorAll(".sex");
    for (let i = 0; i < sex.length; i++){

        if (sex[i].checked){

            sex = sex[i].value;

        }

    }

    let arr = {

        "name": name,
        "pass": password,
        "email": email,
        "birthday": birthday,
        "sex": sex

    }

    function requestArr(array){

        let out = "";
        for (let key in array){

            out += `${key}=${array[key]}&`;

        }
        return out;

    }

    function responseFunc(result){

        if (result == 1){

            M.toast({html: "Вы успешно зарегистрировались"});

        } else if (result == 2){


            M.toast({html: "Заполните все поля"});

        } else {

            M.toast({html: "Ошибка! Повторите попытку позже"});

        }

    }

    ajax("scripts/signup.php", requestArr(arr), responseFunc);

}