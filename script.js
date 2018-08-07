window.onload = function () {

    document.querySelector('.bars').addEventListener('click', function () {
        let menu = document.querySelector('.menu');
    menu.style.left = "0";
    menu.style.boxShadow = "10px 0px 55px 1px rgba(0,0,0,0.75)"
});
    
    document.querySelector('.close').addEventListener('click', function () {
    let menu = document.querySelector('.menu');
    menu.style.left = "-300px";
    menu.style.boxShadow = "none";
});
    
//    let duties = document.querySelector('li p');
//      document.querySelector('h6').addEventListener('click', function () {
//          if (duties.style.height === "0"){
//    duties.style.height = "auto";
//          } else {
//              duties.style.height = "0"
//          }
//});
//    
//    document.querySelector('.bw').addEventListener('click', function () {
//        let body = document.querySelector('body');
//      
//    body.style.color = "#EEE";
//    body.style.background = "#0C0C0C";
//    
//});
//    
//      let containers = document.getElementsByName('container');
//    for (let i = 0; i < containers.length; i++){
//        containers[i].addEventListener("click", function(){
//            this.style.background = "#202020";
//        })
//    }
}
