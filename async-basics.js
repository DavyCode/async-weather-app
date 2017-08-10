console.log("starting the app");

setTimeout( () => {
     console.log("hey look i finally came..looks like something happened while i was away")
}, 2000)

setTimeout( () => {
     console.log("hey look i think im asyncronious")
}, 0)


console.log("app closing")


//Async with callBack
 var getUser = ( id, callBack) => {
      var user = {
            id : id,
            name : "Godzilla"
      };
      setTimeout(() => {
          callBack(user);  
      }, 3000);
     
 }

getUser(39, (userObject) => {
      console.log(userObject)
}) 


// var getUser = function( id, callBack){
//     var user = {
//           id : id,
//           name : "Godzilla"
//     };
//     callBack(user);
// }

// getUser(39, function(userObject){
//       console.log(userObject)
// }) 
