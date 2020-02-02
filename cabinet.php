<?php

    if (!isset($_COOKIE["email"]) OR $_COOKIE["email"] == ""){

        header("location: index.html");

    }


?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/superman-256.png" type="image/png">
    <title>Document</title>
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css"  media="screen,projection"/>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

    <div class="container">
        <div class="row" >
            <div class="col s12">
                <h1 class="center">Ваши личный кабинет</h1>      
            </div>               
        </div>   
        <div class="row right-align">
            <div class="col s12">
                <button class="waves-effect waves-light btn" id="logout"><i class="material-icons right">cloud</i>Log Out</button>    
                <hr>
            </div> 
        </div>
        <div class="row">
            <div class="col s12">
                <h2 class="center">Изменить данные в личном кабинете</h2>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <form>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">account_circle</i>
                            <input type="text" id="name" class="validate">
                            <label for="name">Name</label>
                        </div>
                    </div>
                
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">account_circle</i>
                            <input type="text" id="pass" class="validate">
                            <label for="pass">Password</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">insert_invitation</i>
                            <input type="text" id="birthday" class="datepicker">
                            <label for="birthday">Birthday</label>
                        </div>
                    </div>

                    <p>
                        <label>
                            <input name="sex" type="radio" value="male" class="sex">
                            <span>Male</span>
                        </label>
                    </p>
                        <p>
                        <label>
                            <input name="sex" type="radio" value="female" class="sex">
                            <span>Female</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="sex" type="radio" value="other" class="sex">
                            <span>Other</span>
                        </label>
                    </p>
                    <div class="row">
                        <div class="col s12">    
                            <button class="waves-effect waves-light btn" id="btn-update"><i class="material-icons right">cloud</i>Update data</button>
                        </div> 
                    </div>
                    
                </form>
            </div>
        </div>
    </div>



    
   

    <script src="scripts/ajax.js"></script>
    <script src="scripts/logout.js"></script>
    <script src="scripts/get_user_data.js"></script>
    <script type="text/javascript" src="materialize/js/materialize.min.js"></script>
</body>
</html>