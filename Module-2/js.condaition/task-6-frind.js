/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's 
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myMark = 85; 
const friendMark = 65; 

if(myMark > 80){
    if(friendMark > 80){
        console.log("Go for a lunch");
    } else if(friendMark >= 60){
        console.log("Good luck next time");
    } else if(friendMark >= 40){
        console.log("Keep your friend's message unseen");
    } else {
        console.log("Block your friend");
    }
} else {
    console.log("Go to home and sleep and act sad");
}
