let tabSelector = [document.querySelector('.tab1'), document.querySelector('.tab2'), document.querySelector('.tab3')];
let images = ['url("images/61U27QLJ1RL.jpg")', 'url("images/91LiY5uqiEL.jpg")', 'url("images/81qXFTIaQyL.jpg")'];
let divSelector = document.querySelector('.bgimg');


for (let i = 0; i < tabSelector.length; i++) {

    tabSelector[i].addEventListener('mouseover', () => {

        divSelector.style.backgroundImage = images[i];
        divSelector.style.backgroundPosition = 'center';
        divSelector.style.backgroundSize = 'cover';
        divSelector.style.filter = 'blur(20px)';
        divSelector.style.transitionDelay = '7ms';
    });

    tabSelector[i].addEventListener('mouseout', () => {

        divSelector.style.backgroundImage = 'linear-gradient(white,white)';

        divSelector.style.filter = 'blur(0px)';
    });
}


let fheadSelector = document.querySelector('.fhead');
let fpSeclector = document.querySelector('.fp');

fheadSelector.addEventListener('mouseover', () => {

    fpSeclector.classList.remove('hidden');


})
fheadSelector.addEventListener('mouseout', () => {

    fpSeclector.classList.add('hidden');

});


let aSelector = document.getElementsByTagName('a');
let omitNums = [0, 2, 7];

for (let j = 0; j < aSelector.length; j++) {

    if (!omitNums.includes(j)) {
        aSelector[j].setAttribute('target', '_blank');
    }

}

console.log(aSelector)