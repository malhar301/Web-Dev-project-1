'use strict';

function search(){
    let prompt = (document.querySelector('.search').value);
    console.log(prompt);
    if(prompt != ''){
        prompt = prompt.replaceAll(" ", "+");
    let url = `https://hianime.to/search?keyword=${prompt}`;
    window.location.href = url;
    }
}

document.querySelector('.search').addEventListener('keydown',function(e){
    if(e.key ==='Enter'){
        search();
    }
})