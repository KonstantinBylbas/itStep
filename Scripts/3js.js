let str = "";
const space = "&nbsp;";
const symb = "*";

for(let i = 0; i < 20; i++)
{
    for(let j = 0; j < 20; j++)
    {
        str += symb;
    }
    document.write(`<p>${str}</p>`);
    str = '';
}

document.write(`<br>`);

for(let i = 0; i < 20; i++)
{
    str += symb;
    document.write(`<p>${str}</p>`);
}
str = '';

for(let i = 0; i < 20; i++)
{
    for(let k = i; k < 20; k++)
        str += symb;
    document.write(`<p>${str}</p>`);

    str = '';
}

for(let i = 0; i < 20; i++)
{
    str += symb;
    document.write(`<p>${str}</p>`);
}
str = '';

document.write(`<br>`);

for(let i = 0; i < 10; i++)
{
    for(let n = 0; n < i; n++)
        str += space + space;
    for(let l = 10; l > 0; l--)
        str += symb;

    document.write(`<p>${str}</p>`);
    str = '';
}

document.write(`<br>`);

for(let i = 0; i < 10; i++)
{
    str += symb;
    document.write(`<p>${str}</p>`);
}
for(let i = 0; i < 10; i++)
{
    str = str.slice(0, -1);
    document.write(`<p>${str}</p>`);
}
str = '';

document.write(`<br>`);

for(let i = 0; i < 10; i++)
{
    for(let n = 0; n < i; n++)
    {
        str += space + space;
    }
    for(let k = 0; k < (19 - i - i); k++)
    {
        str += symb;
    }

    document.write(`<p>${str}</p>`);
    str = '';
}

document.write(`<br>`);

for(let i = 0; i < 10; i++)
{
    for(let n = 0; n < (9 - i); n++)
    {
        str += space + space;
    }
    for(let k = 0; k < (1 + i + i); k++)
    {
        str += symb;
    }

    document.write(`<p>${str}</p>`);
    str = '';
}