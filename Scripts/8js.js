class HtmlElement{
    elems = [];

    constructor(tag, text){
        this.tag = document.createElement(tag);
        this.tag.innerText = text;
    }

    appendElem(elem){
        this.elems.push(elem);
    }

    prependElem(elem){
        this.elems.unshift(elem);
    }

    getHtml(){
        this.elems.forEach((element) => {
            if(element instanceof HtmlElement)
                this.tag.append(element.tag);
            else
                this.tag.append(element);
        });

        return this.tag;

    }

}

const container = new HtmlElement('div', '');
const title = new HtmlElement('h2', 'TITLE');
const img = new HtmlElement('img', '');
const p = new HtmlElement('p', 'lorem lorem lorem');
const box = new HtmlElement('div', '');

box.appendElem(img);
box.prependElem(title);
box.appendElem(p);

container.appendElem(box.getHtml());
const prepElem = container.getHtml();

document.body.append(prepElem);


/*****************************************************************/


class HtmlClass {
    elems = [];

    constructor(cls) {
        this.cls = cls;
    }

    addClass(elem) {
        this.elems.push(elem);
    }

    getClass() {
        let str = '';

        this.elems.forEach((element) => {
            str += element + ';';
        });

        document.getElementsByTagName('style')[0].innerText += `.${this.cls}{${str}}`;

        return this.cls;
    }

}

const classContainer = new HtmlClass('container');
const classText = new HtmlClass('text');
classContainer.addClass('background-color: #252525');
classContainer.addClass('color: #eee');
classText.addClass('color: red');
classText.addClass('font-size: 30px');


document.body.classList.add(classContainer.getClass());


/*****************************************************************/


prepElem.classList.add(classText.getClass());