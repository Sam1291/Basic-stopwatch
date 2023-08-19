var min=0;
var sec=0;
var count=0;

var timer=false; // this shows if timer is on or off

function start()
{
    timer=true;
    stopwatch();
}
function stop()
{
    timer=false;
}
function reset()
{
    timer=false;
    stopwatch();
    min=0;
    sec=0;
    count=0;
    document.getElementById("msec").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
}
function resume()
{
    timer=true;
    stopwatch();
    

}

function stopwatch()
{
    if(timer==true)
    {   count++;
         if(count==100)
        {
            sec++;
            count=0;
        }
        if(sec==60)
        {
            min++;
            sec=0;
        }
        // converting and giving value to strung
        var minstr=min;
        var secstr=sec;
        var countstr=count;

        if(min<10)
        {
            minstr="0"+minstr;
        }

        if(sec<10)
        {
            secstr="0"+secstr;
        }

        if(countstr<10)
        {
            countstr="0"+countstr;
        }
        
        document.getElementById("msec").innerHTML=countstr;
        document.getElementById("sec").innerHTML=secstr;
        document.getElementById("min").innerHTML=minstr;
        setTimeout("stopwatch()",10); // for keeping the timer running until someone pushes stop

    }
}