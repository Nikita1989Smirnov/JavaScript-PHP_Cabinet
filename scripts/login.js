document.querySelector("#login-btn").onclick = function(event){

    event.preventDefault();
    let email = document.querySelector("#login-email").value;
    let pass = document.querySelector("#login-pass").value;

    let arr = {

        "email": email,
        "pass": pass

    }

    function requestFunc(array){

        let out = "";
        for (let key in array){

            out += `${key}=${array[key]}&`;

        }
        return out;

    }

    function responseFunc(result){

        if (result == 0){

            M.toast({html: "Такой пользователь не найден"});

        } else if (result == 2){

            M.toast({html: "ЗАполните все поля"});

        } else {

            M.toast({html: "Вы успешно зарегистрировались"});
            setTimeout(function(){

                location.href = "cabinet.php";

            }, 4500);
            result = JSON.parse(result);
            //console.log(result);
            let d = new Date();
            d.setTime(d.getTime() + (20*60*1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;

        }

    }

    ajax("scripts/login.php", requestFunc(arr), responseFunc)

}