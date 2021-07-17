setInterval(() => {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    let htransform = 30 * hour + minute / 2;
    let mtransform = 6 * minute;
    let stransform = 6 * second;

    second_hand.style.transform = `rotate(${stransform}deg)`;
    minute_hand.style.transform = `rotate(${mtransform}deg)`;
    hour_hand.style.transform = `rotate(${htransform}deg)`;
}, 1000);