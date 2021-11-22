let letter = prompt("Write a letter to show name: (Upper Case)")

function checkname(letter){
    users.filter(function(user) {
 if(user.name.includes(letter)){
    console.log(`Hi ${user.name}!`)
 }
       })
}

checkname(letter)

let intervalId=setInterval(function() { 
    return checkname(letter)
    }, 2000)
    clearInterval(intervalId)