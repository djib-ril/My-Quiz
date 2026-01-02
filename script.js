let loading = document.getElementById("loading");
let spinner = document.getElementById("spin");
const myfunction = () =>{
    loading.innerHTML = "Starting..."
    spinner.classList = "spinner";
    document.getElementById("start").style.display = "none";
    setTimeout(function(){
        window.location.href = "quiz.html";
    },3000)  
}