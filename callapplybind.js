//Program of call(),apply()and bind() when function is inside the object means local function.
/* let userdetail =
{
    name:"Mahesh kumar Yadav",
    age:22,
    email:"mahesh20570210@gmail.com",
    degination:"fullstack developer",
    fulldetail:function(city,country)
    {
        console.log(`${this.name+" "}${this.age+" "}${this.email+" "}${this.degination+" " + city +" "+country}`);

    }
}
userdetail.fulldetail("Kalaiya","Nepal");
let userdetail1 =
{
    name:"Bikash kumar Yadav",
    age:22,
    email:"bikash20590210@gmail.com",
    degination:"frontend developer",
}
userdetail.fulldetail.call(userdetail1,"Kalaiya","Nepal");
let userdetail2 =
{
    name:"Binod kumar Yadav",
    age:57,
    email:"binod20590210@gmail.com",
    degination:"frontend developer",
}
userdetail.fulldetail.call(userdetail2,"Kalaiya","Nepal");
let userdetail3 =
{
    name:"Umesh kumar Yadav",
    age:37,
    email:"umesh20590210@gmail.com",
    degination:"frontend developer",
}    
  userdetail.fulldetail.call(userdetail3,"Kalaiya","Nepal"); */

// userdetail.fulldetail.(call(userdetail1).call(userdetail2).call(userdetail3));

// Program call(),apply()and bind() when function is globally.
 /* let userdetail =
{
    name:"Mahesh kumar Yadav",
    age:22,
    email:"mahesh20570210@gmail.com",
    degination:"fullstack developer",
}
fulldetail=function(city,country)
    {
        console.log(`${this.name+" "}${this.age+" "}${this.email+" "}${this.degination+" "+city+" "+country}`);

    }
fulldetail.call(userdetail,"Kalaiya","Nepal");
let userdetail1 =
{
    name:"Bikash kumar Yadav",
    age:22,
    email:"bikash20590210@gmail.com",
    degination:"frontend developer",
}
fulldetail.call(userdetail1,"Kalaiya","Nepal");
let userdetail2 =
{
    name:"Binod kumar Yadav",
    age:57,
    email:"binod20590210@gmail.com",
    degination:"frontend developer",
}
fulldetail.call(userdetail2,"Kalaiya","Nepal");
let userdetail3 =
{
    name:"Umesh kumar Yadav",
    age:37,
    email:"umesh20590210@gmail.com",
    degination:"frontend developer",
}    
  fulldetail.call(userdetail3,"Kalaiya","Nepal");
 */
//Program apply() when function is inside the objects.
 /* let userdetail =
{
    name:"Mahesh kumar Yadav",
    age:22,
    email:"mahesh20570210@gmail.com",
    degination:"fullstack developer",
}
fulldetail=function(city,country,pincode)
    {
        console.log(`${this.name+" "}${this.age+" "}${this.email+" "}${this.degination+" "+city+" "+country+" "+pincode}`);

    }
fulldetail.apply(userdetail,["Kalaiya","Nepal",44400]);
let userdetail1 =
{
    name:"Bikash kumar Yadav",
    age:22,
    email:"bikash20590210@gmail.com",
    degination:"frontend developer",
}
fulldetail.apply(userdetail1,["Kalaiya","Nepal",44400]);
let userdetail2 =
{
    name:"Binod kumar Yadav",
    age:57,
    email:"binod20590210@gmail.com",
    degination:"frontend developer",
}
fulldetail.apply(userdetail2,["Kalaiya","Nepal",44400]);
let userdetail3 =
{
    name:"Umesh kumar Yadav",
    age:37,
    email:"umesh20590210@gmail.com",
    degination:"frontend developer",
}    
  //fulldetail.apply(userdetail3,["Kalaiya","Nepal",44400]);
  fulldetail.apply(userdetail3,["Kalaiya","Nepal",44400]); 
 */
// Program bind() when function is globally.
let userdetail =
{
    name:"Mahesh kumar Yadav",
    age:22,
    email:"mahesh20570210@gmail.com",
    degination:"fullstack developer",
}
fulldetail=function(city,country,pincode)
    {
        console.log(`${this.name+" "}${this.age+" "}${this.email+" "}${this.degination+" "+city+" "+country+" "+pincode}`);
        //let data=`${this.name+" "}${this.age+" "}${this.email+" "}${this.degination+" "+city+" "+country+" "+pincode}`;
        //console.log(data3());
    }
 let data= fulldetail.bind(userdetail);
let userdetail1 =
{
    name:"Bikash kumar Yadav",
    age:22,
    email:"bikash20590210@gmail.com",
    degination:"frontend developer",
}
 data1 = fulldetail.bind(userdetail1,["Kalaiya","Nepal",44400]);
let userdetail2 =
{
    name:"Binod kumar Yadav",
    age:57,
    email:"binod20590210@gmail.com",
    degination:"frontend developer",
}
data2 = fulldetail.bind(userdetail2,["Kalaiya","Nepal",44400]);
let userdetail3 =
{
    name:"Umesh kumar Yadav",
    age:37,
    email:"umesh20590210@gmail.com",
    degination:"frontend developer",
}    
  //fulldetail.call(userdetail3,["Kalaiya","Nepal",44400]);
  let data3 = fulldetail.bind(userdetail3,["Kalaiya","Nepal",44400]); 
  data();
  data1();
  data2();
  data3();

  

