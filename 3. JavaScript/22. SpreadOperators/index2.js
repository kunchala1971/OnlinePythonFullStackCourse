function sum(a,b,...rest)
{
    let total=a+b;
    for (let i=0;i<rest.length;i++)
    {
        total+=rest[i];
    }

    return(total);

}


console.log(sum(45,56,67));
console.log(sum(45,56,67,77));
console.log(sum(45,56,67,99,10));
console.log(sum(45,56,67,88,99));


