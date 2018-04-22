let a,b, result;

a = 0;
b = 1;

for(let i=1; i <= 20; i++)
{
    result = a + b;
    a = b;
    b = result;
    
    console.log(result);
}