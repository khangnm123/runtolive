const dropDown = document.getElementsByClassName('item');
for (i = 0; i < dropDown.length; i++){
    dropDown[i].addEventListener('click', function () {
        this.classList.toggle("active");
    })
}
// thêm class
function Add() {
    const down = document.getElementById('login');
    down.classList.add('show');
}
//xóa class
function Close() {
     const close = document.getElementById('login');
    close.classList.remove('show');
}
function AddDown() {
    document.getElementById("menu").classList.toggle("show");
     document.getElementById("menu1").classList.toggle("rotate");
}