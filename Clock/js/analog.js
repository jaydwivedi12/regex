
setInterval(() => {
    let d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    let hrrotation = (30 * h) + (0.5 * m);
    let minrotation = 6 * m;
    let secrotation = 6 * s;

    hrs.style.transform = `rotate(${hrrotation}deg)`;
    min.style.transform = `rotate(${minrotation}deg)`;
    sec.style.transform = `rotate(${secrotation}deg)`;

}, 1000)