// Start //

$('.inputs').change(function()
{

    var firstBox = $(".inputs")[0]
    var secondBox = $(".inputs")[1]
    var thirdBox = $(".inputs")[2]

    var firstBoxValid = firstBox.value.toLowerCase() == "eleven";
    var secondBoxValid = secondBox.value.toLowerCase() == "twelve";
    var thirdBoxValid = thirdBox.value.toLowerCase() == "twenty";

    if(firstBoxValid) {
        firstBox.style.backgroundColor = 'green';
    } else if(firstBox.value == "")
    {
        firstBox.style.backgroundColor = 'white';
    } else {
        firstBox.style.backgroundColor = "red";
    }

    if(secondBoxValid) {
        secondBox.style.backgroundColor = 'green';
    } else if(secondBox.value == "")
    {
        secondBox.style.backgroundColor = 'white';
    } else {
        secondBox.style.backgroundColor = "red";
    }

    if(thirdBoxValid) {
        thirdBox.style.backgroundColor = 'green';
    } else if(thirdBox.value == "")
    {
        thirdBox.style.backgroundColor = 'white';
    } else {
        thirdBox.style.backgroundColor = "red";
    }

    if (firstBoxValid && secondBoxValid && thirdBoxValid)
        window.location.href = "Congratulations.html"
});

// Code for timer //

var minutes = 8;
var totalSecondsRemaining = minutes * 60;

function countDown()
{
    if(totalSecondsRemaining - 1 == 0) {
        clearInterval(interval);
        document.getElementById("Failed").innerText = "You have ran out of time. Shame... You may complete the challenge without a timer or consequence...";
        clearTimeout()
        return;
    }

    totalSecondsRemaining -= 1;

    if(totalSecondsRemaining < 60) {
        document.getElementById('timer').style.color = 'red';
    }
    document.getElementById('timer').innerHTML = fmtMSS(totalSecondsRemaining);
}

interval = setInterval(countDown, 1000);

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}