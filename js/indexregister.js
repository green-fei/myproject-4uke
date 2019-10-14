var res = document.getElementById("resBtn1");
var mess = document.getElementById("messageBox");
var examp = document.getElementById("exampleInputEmail1");
var pass = document.getElementById("exampleInputPassword1");
res.onclick = function(){
let xhr = new XMLHttpRequest();
xhr.open("post","indexregister.php",true);
xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status==200){
        if(xhr.responseText=="-1"){
            mess.style.color ="red";
            alert( "用户名被人使用");
        }else if(xhr.responseText=="0"){
            mess.style.color ="red";
            mess.style.fontSize = "30px";
            mess.innerHTML ="注册失败";
        }else if(xhr.responseText=="1"){
            mess.style.color ="greenyellow";
            mess.style.fontSize = "30px";
            mess.innerHTML ="注册成功，请<a href='login.html'>登录</a>";
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${examp.value}&userpass=${pass.value}`;
    xhr.send(sendstr);
}
// function check(){
//     //非空判断：
//     if($("#username").value=="" || $("#userpass").value=="" || $("#checkpass").value==""){
//         alert("亲，请把带星号的都输入了");
//         return false;//阻止浏览器的默认行为
//     }
//     //判断用户名是否符合规则

//     //判断密码和重复密码是否一致。

    
// }