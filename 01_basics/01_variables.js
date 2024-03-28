const accountId = 1234;
let accountEmail = "er.sahilvij910@gmail.com";
var accountPassword="12345";
accountCity = "Pune";

//accountId=2;  //will not execute assignment  to constant variable
accountEmail="sam@gmail.com";
accountPassword="65432";
accountCity="karnal";


/*   
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);