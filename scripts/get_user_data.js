document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "dd.mm.yyyy"
    });
  });

let arr = {

    "email": getCookie("email")

}

function requestFunc(array){

    let out = "";
    for (let key in array){

        out += `${key}=${array[key]}&`;

    }

    return out

}

function responseFunc(result){

    result = JSON.parse(result);
    document.querySelector("#name").value = result.name;
    document.querySelector("#pass").value = result.password;
    document.querySelector("#birthday").value = result.birthday;
    let sex = document.querySelectorAll(".sex");
    for (let i = 0; i < sex.length; i++){

        if (result.sex == sex[i].value){

            sex[i].checked = true;

        }

    }
    M.updateTextFields();
    
}

ajax("scripts/get_user_data.php", requestFunc(arr), responseFunc);

document.querySelector("#btn-update").onclick = function(event){

    event.preventDefault();

    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;
    let birthday = document.querySelector("#birthday").value;
    let sex = document.querySelectorAll(".sex");
    for (let i = 0; i < sex.length; i++){

        if (sex[i].checked){

            sex = sex[i].value;

        }

    }

    console.log(sex);

    let arr = {

        "email": getCookie("email"),
        "name": name,
        "pass": pass,
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

            //alert("Данные успешно обновлены");
            M.toast({html: 'Данные успешно обновлены!'});

        } else {

            M.toast({html: 'Ошибка!'});

        }

    }

    ajax("scripts/update_user_data.php", requestArr(arr), responseFunc);

}

