function GetClock(){
    tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
    tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    tline = new String("Date:&nbsp;&nbsp;");

    day = new Date();
    nday = day.getDay();
    nmonth = day.getMonth();
    ndate = day.getDate();
    nyear = day.getYear();
    nhour = day.getHours();
    nmin = day.getMinutes();
    nsec = day.getSeconds();

    if(nyear < 1000) nyear = nyear + 1900;

    if(nhour == 0){ap = " AM"; nhour = 12;}
    else if(nhour <= 11){ap = " AM";}
    else if(nhour == 12){ap = " PM";}
    else if(nhour >= 13){ap = " PM"; nhour -= 12;}

    if(nmin <= 9){nmin = "0" + nmin;}
    if(nsec <= 9){nsec = "0" + nsec;}

    document.getElementById('GetClock').innerHTML = ""+tline+" "+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
    setTimeout("GetClock()", 1000);
}
window.onload = GetClock;