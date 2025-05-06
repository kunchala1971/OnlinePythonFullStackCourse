//Bracnhing Statements
let m=180,p=180,c=170,avg=0;
avg=(m+p+c)/3;
if(m>34 && p>34 && c>34)
{
    if(avg>34 && avg<50)
    {
        console.log("Pass (Oridinary)");
    }
    else if(avg>=50 && avg<60)
    {
        console.log("second Class");
    }
    else if (avg>=60 && avg<75)
    {
        console.log("First Class");
    }
    else if(avg>=75 && avg<=100)
    {
        console.log("Distinction");
    }
    else if(avg>100){
        console.log("Some going Wrong");
    }
}
else
{
    if(m<35) console.log("Maths Failed");
    if(p<35) console.log("Physics Failed");
    if(c<35) console.log("Chemistry Failed");
}
