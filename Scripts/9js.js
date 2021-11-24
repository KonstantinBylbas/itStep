document.addEventListener('DOMContentLoaded', () => {



    document.querySelector('#name').addEventListener('input', function() {
        this.value = this.value.replace(/[0-9]/g, '');
    });
    
    
    /*************************************************************************************/
    
    
    let openBtn = document.getElementById('openBtn');
    let closeBtn = document.getElementById('closeBtn');
    let modal = document.querySelector('.modal');
    
    openBtn.addEventListener('click', show_hide);
    closeBtn.addEventListener('click', show_hide);
    
    function show_hide(){
        modal.classList.toggle('show');
    }
    
    
    /*************************************************************************************/
    
    
    let field = document.getElementById('field');
    let ball = document.getElementById('ball');
    
    field.addEventListener('click', (event) => {
        if(event.offsetX <= field.clientWidth /2)
            ball.style.left = event.offsetX < 25 ? '0px' : event.offsetX - 25 + 'px';   
        else
            ball.style.left = event.offsetX > field.offsetWidth - 25 ? field.offsetWidth - 50 + 'px' : event.offsetX - 25 + 'px';

        if(event.offsetY <= field.clientHeight /2)
            ball.style.top = event.offsetY < 25 ? '0px' : event.offsetY - 25 + 'px';
        else 
            ball.style.top = event.offsetY > field.offsetHeight - 25 ? field.offsetHeight - 50 + 'px' : event.offsetY - 25 + 'px';
    });


    /*************************************************************************************/


    let nextBtn = document.getElementById('nextBtn');
    let trafficLights = document.getElementById('trafficLights');
    let currColor = '';
    let i = 0;

    nextBtn.addEventListener('click', () => {
        nextBtn.innerText = 'NEXT';
        
        currColor ? currColor.classList.add('grey') : '';
        currColor = trafficLights.children[i++];
        currColor.classList.remove('grey');

        i == trafficLights.children.length ? i = 0 : '';
    })
});