var res = document.getElementById("resBtn1");
var mess = document.getElementById("messageBox");
var examp = document.getElementById("exampleInputEmail1");
var pass = document.getElementById("exampleInputPassword1");
res.onclick = function(){
    //1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","login.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="1"){
                location.href="index.html";
            }else{
                alert( "亲，用户名或者密码不对");
                mess.style.color  = "red";
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${examp.value}&userpass=${pass.value}`;
    xhr.send(sendstr);
}	
