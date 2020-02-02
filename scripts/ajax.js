function ajax(url, requestFunc, responseFunc){

    let xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            responseFunc(this.responseText);

        }

    }

    xhr.send(requestFunc);

}