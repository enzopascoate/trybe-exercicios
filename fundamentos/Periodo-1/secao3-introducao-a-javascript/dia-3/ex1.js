const trybeBankCustomers=['Oliva', 'Nat', 'Gus'];

function addCustomers(trybebank, novoarray) 
{
    for (let index = 0; index < novoarray.length; index++) 
    {
        if (typeof novoarray[index]==`string`) 
        {
            trybebank.push(novoarray[index]);
        }
        else {    
            return `Todos os valores precisam ser strings!`
        }
    }
    return `Nova lista: ${trybebank}`
}
let array= [`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,`alo`,`ssda`,];
console.log(addCustomers(trybeBankCustomers,array));
