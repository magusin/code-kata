function trafficLights(road, n) {
    const initialRoad = road;
    let lightPosition = [];
    let result = [];
    let cars = [];
    // get position light
    for (i = 0; i < initialRoad.length; i++) {
        if (initialRoad[i] === 'R' || initialRoad[i] === 'G' || initialRoad[i] === 'O') {
            lightPosition.push({
                light: initialRoad[i],
                index: i,
                count: 0
            })
        } else if (initialRoad[i] === 'C') {
            cars.push({
                index: i
            })
        }
    }
    cars = cars.reverse()
    let lastTraffic = initialRoad;
    let newRoad = '';
    // loop traffic
    for (i = 0; i < n + 1; i++) {
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
        for (car of cars) {
            if (car.index === -1 || car.index === newRoad.length - 1) {
                newRoad = newRoad
            } else {
                if (newRoad[car.index + 1] != 'O' && newRoad[car.index + 1] != 'R' && newRoad[car.index + 1] != 'C') {
                    if (newRoad[car.index + 1] === 'G' && newRoad[car.index + 2] === 'C') {
                        newRoad = newRoad.substring(0, car.index) + 'C' + newRoad.substring(car.index + 1, newRoad.length)
                    } else {
                        newRoad = newRoad.substring(0, car.index + 1) + 'C' + newRoad.substring(car.index + 2, newRoad.length)
                        car.index = car.index + 1
                    }
                } else {
                    newRoad = newRoad.substring(0, car.index) + 'C' + newRoad.substring(car.index + 1, newRoad.length)
                }
            }
        }
        lastTraffic = newRoad;
    }
    return result;
}

console.log(trafficLights('CCC.G...R...', 16)) 
/* [
    "CCC.G...R...", // 0 initial state as passed
    ".CCCG...R...", // 1
    "..CCC...R...", // 2 show 1st car, not the green light
    "..CCGC..R...", // 3 2nd car cannot enter intersection because 1st car blocks the exit
    "...CC.C.R...", // 4 show 2nd car, not the green light
    "...COC.CG...", // 5 3rd car stops for the orange light
    "...CR.C.C...", // 6
    "...CR..CGC..", // 7
    "...CR...C.C.", // 8
    "...CR...GC.C", // 9
    "...CR...O.C.", // 10
    "....C...R..C", // 11 3rd car can proceed
    "....GC..R...", // 12
    "....G.C.R...", // 13
    "....G..CR...", // 14
    "....G..CR...", // 15
    "....O...C..."  // 16
  ]; */