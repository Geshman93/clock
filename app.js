const clock = () => {
    let hour = document.querySelector('#h');
    let minutes = document.querySelector('#m');
    let second = document.querySelector('#s');
    let me = document.querySelector('#M');
    let dd = new Date();
    let h = dd.getHours();
    let m = dd.getMinutes();
    let s = dd.getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;

    if (h<12) {
        me.innerHTML = 'AM';
    } else {
        me.innerHTML = 'PM';
    }
    if (h>12) { 
        h - 12;
    }
    if (h===0) {
         h + 12;
    }

};

setInterval(clock ,500);

// geshman1343