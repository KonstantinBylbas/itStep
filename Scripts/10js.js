const btn = document.getElementById('btn');
const txt_area = document.querySelector('.txt_area');

btn.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', handleResize);
});

window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', handleResize);
});

function handleResize(event) {
    txt_area.style.width = event.pageX - 68 + 'px';
    txt_area.style.height = event.pageY - 60 + 'px';
}