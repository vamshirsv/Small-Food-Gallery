function gallery()
{
    var allimg=document.images
    for(i=0;i<=allimg.length-1;i++)
    {
        allimg[i].src=`./foodsamp/${i}.jpg`
    }
    // console.log(srcval)
    
}
function popup(srcval){
    document.getElementById("pop").style.display="flex"
    document.getElementById("pop").style.backgroundImage=`url(${srcval})`
    document.getElementById("st").style.filter="blur(3px) brightness(30%)"
}
function close2(){
    document.getElementById("pop").style.display="none"
    document.getElementById("st").style.filter="none"
   }