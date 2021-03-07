var order= prompt("what do you want burger or shawrma?");

while (order != 'burger' && order != 'shawrma')
{
    order = prompt("what do you want burger or shawrma?");
}

var sandwich=' ';

if (order=='burger')
{
    sandwich='<img src="burger.png">';
}
else 
{
sandwich='<img src="shawrma.png">';
}

var numofsandwich= prompt("how many sandwiches do you want?");

var number=' ';
for(var i=0;i<numofsandwich;i++)

{
    number=number+sandwich;
}
console.log(number)
document.write(number);