function trafficLights(road, n) {
    const initialRoad = road;
    let lightPosition = [];
    let result = [];
    // get position light
    for (i = 0; i < initialRoad.length; i++) {
        if (initialRoad[i] === 'R' || initialRoad[i] === 'G' || initialRoad[i] === 'O') {
            lightPosition.push({
                light: initialRoad[i],
                index: i,
                count: 0
            })
        }
    }
    let lastTraffic = initialRoad;
    let newRoad = '';
    // loop traffic
    for (i = 0; i < n + 1; i++) {
        const car = lastTraffic.indexOf('C');
        console.log(car)
        result.push(lastTraffic)
        newRoad = '.'.repeat(initialRoad.length);
        for (item of lightPosition) {
            item.count++
            if (item.light === 'O') {
                item.light = 'R'
                item.count = 0
            } else if (item.light === 'G' && item.count % 5 === 0) {
                item.light = 'O'
                item.count = 0
            } else if (item.light === 'R' && item.count % 5 === 0) {
                item.light = 'G'
                item.count = 0
            }
            newRoad = newRoad.substring(0, item.index) + item.light + newRoad.substring(item.index + 1, newRoad.length)
        }
        if (car === -1 || car === newRoad.length - 1) {
            newRoad = newRoad
        } else {
            if (newRoad[car + 1] != 'O' && newRoad[car + 1] != 'R') {
                newRoad = newRoad.substring(0, car + 1) + 'C' + newRoad.substring(car + 2, newRoad.length)
            } else {
                newRoad = newRoad.substring(0, car) + 'C' + newRoad.substring(car + 1, newRoad.length)
            }
        }
        lastTraffic = newRoad;
    }


    return result;
}