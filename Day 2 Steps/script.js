const progress = document.getElementById('progress')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
const circleAll = document.querySelectorAll('.circle')

var currentNode = 1

next.addEventListener('click' , () => {
    currentNode++;
    if(currentNode > circleAll.length){
        currentNode = circleAll.length;
    }
    progressbar();
})

previous.addEventListener('click' , () => {
    currentNode--;
    if(currentNode < 1){
        currentNode = 1;
    }
    progressbar();
})

function progressbar(){
    circleAll.forEach((circle,index)=>{
        if(currentNode > index){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    var currentCircle = document.querySelectorAll('.active')
    progress.style.width= (currentCircle.length - 1)/(circleAll.length-1)*100 + '%';

    if(currentNode === 1){
        previous.disabled = true;
    }
    else if(currentNode === circleAll.length){
      next.disabled = true;
    }
    else{
        previous.disabled = false;
        next.disabled = false;
    }
}


