//Getting Clicked me
document.getElementById("output").addEventListener("click", () => {
    // automatic update
    var update = setInterval(100, time());
    function time() {
        //Get Time
        var date = new Date();
        //Get Hours
        var hours = date.getHours();
        //Get Minutes
        var minutes = date.getMinutes();
        //Get Seconds
        var seconds = date.getSeconds();
        //Check if time is over 10
        if(seconds < 10) {
            seconds = "0" + seconds;
        };
        if(minutes < 10) {
            minutes = "0" + minutes;
        };
        if(hours < 10) {
            hours = "0" + hours;
        };
        //Output
        //Getting the Element from HTML
        var output = document.getElementById("output");
        //Write the output
        output.innerHTML = hours + ":" + minutes + ":" + seconds;
    };
});