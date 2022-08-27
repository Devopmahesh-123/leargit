const arr = [175,50,25];
const sum = arr.reduce(myfunc);
function myfunc(total,intial)
{
    return total+intial;
}
console.log(sum);
myfunc()