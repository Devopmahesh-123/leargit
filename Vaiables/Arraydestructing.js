// Program for destructing the array.
// function structing() {
    // const arr = ["Mahesh", "Kumar", "Yadav"];
    // const [name, md, lst] = arr;
    // console.log(name);
    // console.log(md);
    // console.log(lst);
// }
// structing()

// Program for destructuring of array using arrow function
// myfn = (arr = [1,5,6,8,9],[x,,,,z] = arr)=> (console.log(x), console.log(z)) 
// myfn()
 
// Program of destructing using function.
     /*myfunc1 = () =>{       
         const arr = [1,5,6,8,9];
         const [x,,,,z] = arr;
         console.log(x);
         console.log(y);
         console.log(z);
    }
     myfn()*/
    

// Program for destructing the object.
// function structing1() {
    // const arr = {Empname:"Mahesh",Empid:"18smt"}
    // const {Empname,Empid} = arr;
    // console.log(Empname);
    // console.log(Empid);
// }
// structing1()

//Program for reduce operator.

// const numbers = [175, 50, 25];

// const sum = numbers.reduce((total, num) => {
    // return total + num;
//   });


// console.log(sum);






// Program for arrow function.
// const numbers = [175, 50, 25];

// const sum = numbers.reduce( ( total, num)=>{

//     return total + num;

// });

// myfunc = (total,num)=>
// {
    // return total +num;
// }
// const number = [175,50,25];
// let sum = number.reduce(myfunc);

// console.log(sum);

// Program of general function concept with parameter.
//    function employee(name1,id,email)
//    {
        //  var name1 = "Mahesh";
        //  var id = "22smtoo75"; 
    //    console.log(name1);
    //    console.log(id);
    //    console.log(email);
//    }
//    employee("Bikash","18abc","mahesh20570210@gmail.com")

// Program of arrow function without parameter.
// employee = ()=>
// {
    // let name1 = "Mahesh";
    // let id = "22smtoo75"; 
    // let email = "mahesh20570210@gmail.com";
    // console.log(name1);
    // console.log(id);
    // console.log(email);
// }  
// employee()

// Program of arrow function with parameter.
//   employee =(name1,id,email)=>
//   {
    //   var name1 = "Mahesh";
    //   var id = "22smtoo75"; 
         //console.log(name1);
    //   console.log(id);
    //   console.log(email);
//   }  
//   employee("Bikash","18abc","mahesh20570210@gmail.com")

// Program of arrow function with parameter.
        /*(name1,id,email)=>("Bikash","18abc","mahesh20570210@gmail.com")
        {
         var name1 = "Mahesh";
         var id = "22smtoo75"; 
         var email = "mahesh20570210@gmail.com";
         console.log(name1);
         console.log(id);
         console.log(email);
        } */
        
 // Program of reduce method using arrow function.
      /*const arr = [175,50,25];
      const sum = arr.reduce((accumulator,currentvalue)=>
      {
          return accumulator + currentvalue;
      })
     console.log(sum);*/
    
  // Program of reduce method using arrow function.
  /*const arr = [175,50,25];
  const sum = arr.reduce((accumulator,currentvalue)=>
  {
      return accumulator + currentvalue;
  },0)
 console.log(sum);*/ 

 // Program of reduce method using arrow function.
 const arr = [175,50,25];
 const sum = arr.reduce((accumulator,currentvalue)=>
   accumulator + currentvalue
 )
console.log(sum);   

// Program of spread method using arrow function.
    spreadpm = (arr = [1,2,3,4,5],arr1 = [6,7,8,9,10],comarr = [...arr,...arr1]) => 
    (console.log(comarr)) 
    spreadpm()

    // program of spread,rest,reduce method destructing using arrow function.
    function combfnc()
    {
        
    }

    

