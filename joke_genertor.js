const btn=document.querySelector('.btn');
const jokEle=document.querySelector('.joke');

function generateJoke(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            const joke=JSON.parse(this.responseText).value;
             jokEle.innerHTML=joke;
    }else{
        jokEle.innerHTML='Something went wrong';
    }
 
}
     xhr.send();
}







btn.addEventListener('click',generateJoke);
document.addEventListener('DOMContentLoaded',generateJoke);