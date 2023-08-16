
function updateClock() {

    const date = new Date();
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const hrOption = {
        hour: "2-digit",
        hour12:false,
    };
    const minOption = {
        minute: "2-digit"
    };
    const secOption = {
        second: "2-digit"
    };

    //https://www.w3schools.com/jsref/jsref_tolocalestring.asp

    document.getElementById("date").innerHTML = date.toLocaleString('en-IN', dateOptions);

    document.getElementById("hrs").innerHTML = date.toLocaleString('en-IN', hrOption);

    document.getElementById("min").innerHTML = date.toLocaleString('en-IN', minOption);

    document.getElementById("sec").innerHTML = date.toLocaleString('en-IN', secOption);
}

updateClock();
setInterval(updateClock, 1000);