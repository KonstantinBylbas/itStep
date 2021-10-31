function loadPage() {
    document.getElementById('load').style.transition = "2s";
    document.getElementById('load').style.opacity = "1";
}

var status = 0;
function triangle(){
    button = document.getElementById('triangle');
    text = document.getElementById('listBlock');

    if(status == 0){
        text.style.marginTop = '0';
        text.style.opacity = '1';
        button.style.transform = 'rotate(210deg)';
        status = 1;
    }
    else
    {
        button.style.transform = 'rotate(0deg)';
        text.style.marginTop = '-20%';
        text.style.opacity = '0';
        status = 0;
    }
}