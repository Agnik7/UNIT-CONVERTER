

function func() {
    let n = document.getElementById("userNum").value;
    let converted = n;
    let choice = document.getElementById("dropdown").value; 
    if(choice === "1")
    {
        converted = n*100;

    }
        
    else if(choice === "2")
    {
        converted = n/100;
    }
        
    else if(choice === "3")
    {
        converted = n/30.48;
    }
        
    else if(choice === "4")
    {
        converted = n*30.48;
    }
        
    else if(choice === "5")
    {
        converted = n*12;
    }
        
    else if(choice === "6")
    {
        converted = n/12;
    }
        
    else if(choice === "7")  
    {
        converted = n*1000;
    }
    else if(choice === "9")
    {
        converted = n*1000;
    }
        
    else if(choice === "17")
    {
        converted = n*1000;
    }
    else if(choice === "8" )
    {
        converted = n/1000;
    }
    else if( choice === "10")
    {
        converted = n/1000;
    }
    else if(choice === "18")
    {
        converted = n/1000;
    }
        
    else if(choice === "11")
    {
        converted = n/1.609;
    }
        
    else if(choice === "12")
    {
        converted = n*1.609;
    }
        
    else if(choice === "13")
    {
        converted = n*5/18;
    }
        
    else if(choice === "14")
    {
        converted = n*18/5;
    }
        
    else if(choice === "15")
    {
        converted = n/4047;
    }
        
    else if(choice === "16")
    {
        converted = n*4047;
    }
        
    document.getElementById("convertedNum").value = converted+"";
}
function clearFields() {
    document.getElementById("dropdown").value = "0";
    document.getElementById("userNum").value = "";
    document.getElementById("convertedNum").value = "";
    document.getElementById("1").style.textDecoration = "none";
    document.getElementById("2").style.textDecoration = "none";
    document.getElementById("1").innerText = "";
    document.getElementById("2").innerText = "";
}
function displayUnit() {
    let choice = document.getElementById("dropdown").value; 
    if(choice === "1")
    {
        document.getElementById("1").innerText = "m";
        document.getElementById("2").innerText = "cm";

    }
        
    else if(choice === "2")
    {
        document.getElementById("1").innerText = "cm";
        document.getElementById("2").innerText = "m";
    }
        
    else if(choice === "3")
    {
        document.getElementById("1").innerText = "cm";
        document.getElementById("2").innerText = "ft";
    }
        
    else if(choice === "4")
    {
        document.getElementById("1").innerText = "ft";
        document.getElementById("2").innerText = "cm";
    }
        
    else if(choice === "5")
    {
        document.getElementById("1").innerText = "ft";
        document.getElementById("2").innerText = "inch";
    }
        
    else if(choice === "6")
    {
        document.getElementById("1").innerText = "inch";
        document.getElementById("2").innerText = "ft";
    }
        
    else if(choice === "7")  
    {
        document.getElementById("1").innerText = "km";
        document.getElementById("2").innerText = "m";
    }
    else if(choice === "9")
    {
        document.getElementById("1").innerText = "m";
        document.getElementById("2").innerText = "mm";
    }
        
    else if(choice === "17")
    {
        document.getElementById("1").innerText = "cb. m";
        document.getElementById("2").innerText = "litre";
    }
    else if(choice === "8" )
    {
        document.getElementById("1").innerText = "m";
        document.getElementById("2").innerText = "km";
    }
    else if( choice === "10")
    {
        document.getElementById("1").innerText = "mm";
        document.getElementById("2").innerText = "m";
    }
    else if(choice === "18")
    {
        document.getElementById("1").innerText = "litre";
        document.getElementById("2").innerText = "cb. m";
    }
        
    else if(choice === "11")
    {
        document.getElementById("1").innerText = "km";
        document.getElementById("2").innerText = "mile";
    }
        
    else if(choice === "12")
    {
        document.getElementById("1").innerText = "mile";
        document.getElementById("2").innerText = "km";
    }
        
    else if(choice === "13")
    {
        document.getElementById("1").innerText = "kmph";
        document.getElementById("2").innerText = "mps";
    }
        
    else if(choice === "14")
    {
        document.getElementById("1").innerText = "mps";
        document.getElementById("2").innerText = "kmph";
    }
        
    else if(choice === "15")
    {
        document.getElementById("1").innerText = "sq.m";
        document.getElementById("2").innerText = "acre";
    }
        
    else if(choice === "16")
    {
        document.getElementById("1").innerText = "acre";
        document.getElementById("2").innerText = "sq.m";
    }
    else
    {
        document.getElementById("1").innerText = "";
        document.getElementById("2").innerText = "";
    }
}