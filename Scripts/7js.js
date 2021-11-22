class Circle{
    #radius;

    constructor(radius = 3){
        this.#radius = radius;
    }

    set setRadius(newRadius){
        this.#radius = newRadius;
    }

    get getRadius(){
        return 'Radius = ' + this.#radius;
    }

    get getDiametr(){
        return 'Diametr = ' + (2 * 3,14 * this.#radius);
    }

    s(){
        console.log('Square = ' + (3.14 * this.#radius * this.#radius));
    }

    length(){
        console.log('Length = ' + (2 * 3.14 * this.#radius));
    }
}

const circle_1 = new Circle();
circle_1.setRadius = +prompt('Enter radius of circle', '5');

console.log(circle_1.getRadius);
console.log(circle_1.getDiametr);
circle_1.s();
circle_1.length();


/*****************************************************************/

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

console.log(prepElem);
document.body.append(prepElem);