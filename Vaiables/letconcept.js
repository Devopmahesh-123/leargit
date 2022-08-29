// Program of let variable for function block scope.
/* -------------------------------First concept---------------------------- */
/*let data = "Hello";
function blockfunction()
  {   
        var data = "It is a function";
        let text = "smartdata";
        console.log(data);
        console.log(text);
  }
  console.log(data);
  //console.log(text); it throw error: text variable is not defined. 
  blockfunction() */
/* ---------------------------------second concept---------------------------- */

/*function blockfunction() {
  let data = "Hello";
  if (true) {
    // var data = "It is a function"; It throw error: 'data' is already been decleared.
    let text = "smartdata";
    console.log(data);
    console.log(text);
  }
}
  blockfunction()
  // console.log(data); It not give any output because 'data' is locally decleared.
  */
/* --------------------------------Third concept---------------------------- */
/*function blockfunction() {
  let data = "Hello";
  if (true) {
    data = "It is a function";
    let text = "smartdata";
    console.log(data);
    console.log(text);
  }
}
blockfunction()
*/
/* --------------------------------Fourth concept---------------------------- */
function blockfunction() {
  let data = "Hello";
  if (true) {
    data = "It is a function";
    let text = "smartdata";
    console.log(data);
    console.log(text);
  }
}
function blockfunction1() {
  let data = "Hii!";
  if (true) {
    data = "sDirect";
    let text = "smartdata Enterprises";
    console.log(data);
    console.log(text);
  }
}
blockfunction()
blockfunction1()
/* ------------------------Const concept------------------------------------ */
function blockfunction3() {
  const data = "Hello";
  if (true) {
    // data = "It is a function"; It throw error: Assignment to constant variable.
    let text = "smartdata";
    console.log(data);
    console.log(text);
  }
}
blockfunction3()