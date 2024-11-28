var email = document.querySelector("#email");
var pass = document.querySelector("#pass");
var sname = document.querySelector("#name");
var semail = document.querySelector("#newemail");
var spass = document.querySelector("#newpass");
var sign = document.querySelector("#sign");
var empty = document.querySelector(".empty");
var wrong = document.querySelector(".wrong");
var good = document.querySelector(".good");

var data = [];
if (localStorage.getItem("data") == null) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("data"));
}
function add() {
  var email = {
    ename: sname.value,
    eemail: semail.value,
    epass: spass.value,
  };

  if (!sname.value || !semail.value || !spass.value) {
    empty.classList.remove("d-none");
    wrong.classList.add("d-none");
    good.classList.add("d-none");
    clear();
    return;
  }
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].eemail);
    if (data[i].eemail === semail.value) {
      wrong.classList.remove("d-none");
      empty.classList.add("d-none");
      good.classList.add("d-none");
      clear();
      return;
    } else {
      good.classList.remove("d-none");
      wrong.classList.add("d-none");
      empty.classList.add("d-none");
    }
  }
  data.push(email);
  localStorage.setItem("data", JSON.stringify(data));
  clear();
}
var ety = document.querySelector(".ety");
var wty = document.querySelector(".wty");




function login() {
  if (!email.value || !pass.value) {
    ety.classList.remove("d-none")
    wty.classList.add("d-none");
  }
  else{
  for (var i = 0; i < data.length; i++) {
    if (email.value != data[i].eemail && pass.value != data[i].epass) {
        wty.classList.remove("d-none");
        ety.classList.add("d-none");
    } else {
      if (email.value == data[i].eemail && pass.value == data[i].epass) {
        ety.classList.add("d-none");
        wty.classList.add("d-none");
        var cc = "";
        var cc = `Welcome ${data[i].ename}`;
        localStorage.setItem("cc", cc);
        window.location.href = "hello.html";
      }
    }
  }
  }
}
var dd=localStorage.getItem("cc");
document.getElementById("ee").innerHTML = dd;

function clear() {
  sname.value = null;
  semail.value = null;
  spass.value = null;
}
