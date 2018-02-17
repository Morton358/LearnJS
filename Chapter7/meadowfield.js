const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    'Marketplace-Farm',
    'Marketplace-Post Office',
    'Marketplace-Shop',
    'Marketplace-Town Hall',
    'Shop-Town Hall'
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split('-'))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels
                .map(p => {
                    if (p.place != this.place) return p;
                    return { place: destination, address: p.address };
                })
                .filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

// let first = new VillageState('Post Office', [
//     { place: 'Post Office', address: "Alice's House" }
// ]);
// let next = first.move("Alice's House");
//
// console.log(next.place);
// // → Alice's House
// console.log(next.parcels);
// // → []
// console.log(first.place);
// // → Post Office

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState('Post Office', parcels);
};

// runRobot(VillageState.random(), randomRobot);
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns

const mailRoute = [
    "Alice's House",
    'Cabin',
    "Alice's House",
    "Bob's House",
    'Town Hall',
    "Daria's House",
    "Ernie's House",
    "Grete's House",
    'Shop',
    "Grete's House",
    'Farm',
    'Marketplace',
    'Post Office'
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}

// runRobot(VillageState.random(), routeRobot, []);

function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ place, parcels }, route) {
    console.log(place);
    console.log(parcels);
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    console.log(route);
    return { direction: route[0], memory: route.slice(1) };
}

// runRobot(VillageState.random(), goalOrientedRobot, []);

function countSteps(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            return turn;
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    const turnsOfRobot1 = [];
    const turnsOfRobot2 = [];
    for (let i = 0; i < 100; i++) {
        const state = VillageState.random();
        turnsOfRobot1.push(countSteps(state, robot1, memory1));
        turnsOfRobot2.push(countSteps(state, robot2, memory2));
    }
    const average = arr =>
        arr.reduce((acc, current) => acc + current, 0) / arr.length;
    const result = [average(turnsOfRobot1), average(turnsOfRobot2)];
    return result;
}

// function getAllPaths(graph, from, to) {
//     let bestPath = [];
//     const route = [];
//     if (graph[from].includes(to)) {
//         route.push(to);
//         return route;
//     } else {
//         graph[from].map((node, index, arr) => {
//             if (route[-1] === arr[index - 1]) {
//                 route.pop();
//                 route.push(node);
//                 route.concat(getAllPaths(graph, node, to));
//             }
//         });
//     }
// }

function defineRoute(place, parcels, route) {
    parcels.map(parcel => {
        if (parcel.place != place) {
            route.push(findRoute(roadGraph, place, parcel.place));
        } else {
            route.push(findRoute(roadGraph, place, parcel.address));
        }
    });
    const newRoute = shortestsWays(route)[0];
    return newRoute;
}

function shortestsWays(arr) {
    const lengths = arr.map(el => el.length);
    const shortestWay = lengths.reduce((acc, cur) => Math.min(acc, cur));
    return arr.filter(el => el.length === shortestWay);
}

function myRobot({ place, parcels }, route) {
    console.log(place);
    console.log(parcels);

    if (route.length == 0) {
        route = defineRoute(place, parcels, route);
        return { direction: route[0], memory: route.slice(1) };
    } else {
        const tempRoute = [...route];
        route = [];
        route.push(tempRoute);
        route = defineRoute(place, parcels, route);
        return { direction: route[0], memory: route.slice(1) };
    }
}

function lazyRobot({ place, parcels }, route) {
    if (route.length == 0) {
        // Describe a route for every parcel
        let routes = parcels.map(parcel => {
            if (parcel.place != place) {
                return {
                    route: findRoute(roadGraph, place, parcel.place),
                    pickUp: true
                };
            } else {
                return {
                    route: findRoute(roadGraph, place, parcel.address),
                    pickUp: false
                };
            }
        });

        // This determines the precedence a route gets when choosing.
        // Route length counts negatively, routes that pick up a package
        // get a small bonus.
        function score({ route, pickUp }) {
            return (pickUp ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
    }

    return { direction: route[0], memory: route.slice(1) };
}

//
// runRobot(VillageState.random(), myRobot, []);

const [avgRobot1, avgRobot2] = compareRobots(myRobot, [], lazyRobot, []);
console.log(`
    Avarage of turns of Robot 1 is ${avgRobot1}
    Avarage of turns of Robot 2 is ${avgRobot2}
    `);
