var getDob = document.querySelector(".dob");
var getnum = document.querySelector(".number");
var button = document.querySelector(".buttonn");
var isLucky = document.querySelector("#lucky");
var isNotLucky = document.querySelector("#unlucky");
var isLuck = document.querySelector(".luck");
var isNotLuck = document.querySelector(".unluck");
var btnprivacy = document.querySelector(".btnprivacy")


function clickhandler () {

    event.preventDefault();

    if (getDob.value === '' || getnum.value === '')
        {
            return;
        }

    let sum = 0;
    let arr = [];
    var bb = getDob.value;
    var abc = bb.toString().split('-');
    let dob ='';
    for(let i = 0; i<abc.length; i++)
        dob +=abc[i];
    console.log(dob);

    
    let dob2 = parseInt(dob);
    

    for(let j=0; j<8; j++)
    {
        arr[j] = dob2%10;
        
        dob2 = Math.floor(dob2/10);
        
        console.log(arr[j]);
        sum += arr[j];
    }

    if(sum%getnum.value==0)
        console.log(true);
    else
        console.log(false);

    
  
    if(sum%getnum.value==0)
    {
        isLucky.style.display = "block";
        isNotLucky.style.display = "none";
        isLuck.style.display = "block";
        isNotLuck.style.display = "none";
    }
    else
    {
        isLucky.style.display = "none";
        isNotLucky.style.display = "block";
        isLuck.style.display = "none";
        isNotLuck.style.display = "block"; 
    }
    
}


button.addEventListener("click" , clickhandler);
btnprivacy.addEventListener("click", () => {
    document.querySelector(".notice").style.display = "none";
    document.querySelector(".blur").style.filter = "blur()"
});
function myFuntion()
{
    isLucky.style.display = "none";
    isNotLucky.style.display = "none";
    isLuck.style.display = "none";
    isNotLuck.style.display = "none";
    body.style.display = "none";
    
}
window.onload = myFuntion;