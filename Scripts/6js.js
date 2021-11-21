let timer = setInterval(() => {

    const string = prompt('Tag | style_name: value | url(for tag img) another text \n\nОтмена = Exit', 'div | background-color: #252525 | color: #eee | bla bla bla');
    if(!string) 
    {
        clearInterval(timer);
        return;
    }

    const elems = string.split([' | ']);

    const tag = elems[0];

    let style = '';
    for(i = 1; i < elems.length - 1; i++)
        style += elems[i] + '; ';

    let url = '';
    let text = '';
    elems[0] == 'img' ? url = elems[elems.length - 1] : text = elems[elems.length - 1];

    document.write(`<${tag} src="${url}" style = '${style}'> ${text} </${tag}>`);
}, 1000);