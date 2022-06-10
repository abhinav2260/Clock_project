
function begin(){
    var hour=document.getElementsByClassName("time_hour_text")[0];
    var minute=document.getElementsByClassName("time_minute_text")[0];
    var second=document.getElementsByClassName("time_second_text")[0];
    var am=document.getElementsByClassName("am_pm_text")[0];

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    // console.log("called");

    if(a==0||a==12)
    {
        hour.textContent=12;
        minute.textContent=b;
        second.textContent=c;
        if(a==0)  
            am.textContent="AM";
        else
        am.textContent="PM";    
    }
    else if(a>0&&a<12)
    {
    hour.textContent=a;
    minute.textContent=b;
    second.textContent=c;
    am.textContent="AM";
    }
    else{
        hour.textContent=a-12;
    minute.textContent=b;
    second.textContent=c;
    am.textContent="PM";
    }
}

function partytime()
{
    document.querySelector("button").classList.add("setalarm2");
    document.querySelector("button").classList.remove("setalarm1");
    document.querySelector("button").textContent="Party time!";

}

function setalarm()
{
    document.querySelector("button").classList.add("setalarm1");
    document.querySelector("button").classList.remove("setalarm2");
    document.querySelector("button").textContent="Set Alarm";

}


function perform()
{
    console.log("perform called");
    var wakeup = document.getElementById("optionset1").value;
    var lunch = document.getElementById("optionset2").value;
    var nap = document.getElementById("optionset3").value;
    var night = document.getElementById("optionset4").value;

    var pic=document.getElementById("pic");

   var hour=new Date().getHours();

   if(wakeup==hour)
    {
        pic.setAttribute("src","Component 30 – 1.png");
        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="morning_text";

        msgaccess.textContent="GRAB SOME HEALTHY BREAKFAST!!!";

        document.getElementsByClassName("msg")[0].textContent="GOOD MORNING!! WAKE UP !!";



    }
    else if(lunch==hour)
    {
        pic.setAttribute("src","Group 5183.png");

        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="lunch_text";

        msgaccess.textContent="LET'S HAVE SOME LUNCH !!";

        document.getElementsByClassName("msg")[0].textContent="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if(nap==hour)
    {
        pic.setAttribute("src","lunch_image.png");

        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="evening_text";

        msgaccess.textContent="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementsByClassName("msg")[0].textContent="GOOD EVENING !!";
    }
    else if(night==hour)
    {
        pic.setAttribute("src","Group 5194.png");

        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="night_text";

        msgaccess.textContent="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementsByClassName("msg")[0].textContent="GOOD NIGHT !!";

        
    }


}

function clock(){
    var hour=document.getElementsByClassName("time_hour_text")[0];
    var minute=document.getElementsByClassName("time_minute_text")[0];
    var second=document.getElementsByClassName("time_second_text")[0];
    var am=document.getElementsByClassName("am_pm_text")[0];

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    var temp=a;

   if(temp>12)
    temp=temp-12;

    // console.log(hour.textContent+" "+temp);
    if(hour.textContent!=temp)
        perform();


    if(a==0||a==12)
    {
        hour.textContent=12;
        minute.textContent=b;
        second.textContent=c;
        if(a==0)  
            am.textContent="AM";
        else
        am.textContent="PM";    
    }
    else if(a>0&&a<12)
    {
    hour.textContent=a;
    minute.textContent=b;
    second.textContent=c;
    am.textContent="AM";
    }
    else{
        hour.textContent=a-12;
    minute.textContent=b;
    second.textContent=c;
    am.textContent="PM";
    }

    // console.log(a+" "+b);

}

setInterval(clock,1000);

function settime(){
    var wakeup = document.getElementById("optionset1").value;
    var lunch = document.getElementById("optionset2").value;
    var nap = document.getElementById("optionset3").value;
    var night = document.getElementById("optionset4").value;

    var pic=document.getElementById("pic");

    var hour=new Date().getHours();
    // var am=document.getElementsByClassName("am_pm_text")[0].textContent;

    if(wakeup==hour)
    {
        pic.setAttribute("src","Component 30 – 1.png");
        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="morning_text";

        msgaccess.textContent="GRAB SOME HEALTHY BREAKFAST!!!";

        document.getElementsByClassName("msg")[0].textContent="GOOD MORNING!! WAKE UP !!";



    }
    else if(lunch==hour)
    {
        pic.setAttribute("src","Group 5183.png");

        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="lunch_text";

        msgaccess.textContent="LET'S HAVE SOME LUNCH !!";

        document.getElementsByClassName("msg")[0].textContent="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if(nap==hour)
    {
        pic.setAttribute("src","lunch_image.png");

        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="evening_text";

        msgaccess.textContent="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementsByClassName("msg")[0].textContent="GOOD EVENING !!";
    }
    else if(night==hour)
    {
        pic.setAttribute("src","Group 5194.png");

        msgaccess=document.getElementById("msgaccess");
        msgaccess.className="night_text";

        msgaccess.textContent="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementsByClassName("msg")[0].textContent="GOOD NIGHT !!";

        
    }

    var schedule=document.getElementsByClassName("schedule")[0];

    if(!(wakeup=="Default"&&lunch=="Default"&&nap=="Default"&&night=="Default"))
    {
        
        schedule.style.visibility="visible";

        var option1=document.getElementById("optionset1");
        var option2=document.getElementById("optionset2");
        var option3=document.getElementById("optionset3");
        var option4=document.getElementById("optionset4");


        var value1=option1.options[option1.selectedIndex].text;
        var value2=option2.options[option2.selectedIndex].text;
        var value3= option3.options[ option3.selectedIndex].text;
        var value4= option4.options[ option4.selectedIndex].text;

        document.getElementById("Wake_Up_Time").textContent="Wake Up Time : " + value1;
        document.getElementById("Lunnch_Time").textContent="Lunch Time : " + value2;
        document.getElementById("Nap_Time").textContent="Nap Time : " + value3;
        document.getElementById("Night_Time").textContent="Night Time : " + value4;
        
        // console.log(value1+" "+value2+" "+value3+" "+value4);



    }
    else
    {  
        schedule.style.visibility="hidden";
    }


    
    
    
}
