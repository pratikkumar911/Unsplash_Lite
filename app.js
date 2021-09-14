const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load',theme);

input.addEventListener('keydown',function(e){
    if(event.key==="Enter")
    loadImg();
})

function loadImg(){
    removeImg();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=9&client_id=heWLGf0TQZksaR3sqmRkN8Pr6bebwnS3Cuh3b5d2SDU';
    fetch(url).then(res => {
        console.log(res);
        if(res.ok)
            return res.json();
        else
            alert(res.status);
    })
    .then(data =>{
        const imageNodes = [];
        for(let i=0;i<data.results.length;i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage='url(' + data.results[i].urls.raw + "&w=1366&h=768" +')';
            imageNodes[i].addEventListener('dblclick',function(){
                window.open(data.results[i].links.download,'_blank');
            })
            grid.appendChild(imageNodes[i]);
        }
    })
}

function removeImg(){
    grid.innerHTML='' ;
}

function theme(){
    const date = new Date();
    const hour = date.getHours();
    if(hour>=7 && hour<=19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'rgb(44, 43, 43)';
        document.body.style.color = 'white';
    }
}