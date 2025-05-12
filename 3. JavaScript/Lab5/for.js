/*
syntax:
for(exp1;exp2;exp3)
{
}
Eexample:
for(i=1;i<=10;i++)
{
console.log(i)
}
*/
//Multiple table
let n=8;
for(let i=1;i<=10;i++)
{
    console.log(n+"x"+i+"="+n*i);
}
//Number Pattern
/*
1
12
123
1234
12345
*/
for(let i=1;i<=5;i++)
{
    let line="";
    for(let j=1;j<=i;j++)
    {
        line+=j+"";
    }
    console.log(line);
}