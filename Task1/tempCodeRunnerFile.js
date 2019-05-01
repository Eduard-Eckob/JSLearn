let num = 49;
switch(num){
    case num > 0:
    case num <= 50:
        console.log("Less"); 
        break;        
    case num > 50:
        console.log("Greater");
        break;
    case 50:
        console.log("Equal");
        break;
    default:
        console.log("wtf");
        break;    
}