var playlist = [
	{ id: 0, artist: 'Herbie Hancock', title: 'Thrust' },
	{ id: 1, artist: 'Lalo Schifrin', title: 'Shifting Gears' },
	{ id: 2, artist: 'Faze-O', title: 'Riding High' },
];

function move(from, to) {
	let arr = [...playlist];
	if (to < 0 || to > arr.length - 1) {
		return arr;
	}
	arr.splice(to, 0, arr.splice(from, 1));
	return arr;
}

function move_up(id) {
	const indexOfElem = playlist.indexOf(
		playlist.find(el => {
			return el.id === id;
		})
	);
	return move(indexOfElem, indexOfElem - 1);
}

function move_down(id) {
	const indexOfElem = playlist.indexOf(
		playlist.find(el => {
			return el.id === id;
		})
	);
	return move(indexOfElem, indexOfElem + 1);
}

console.log(move_up(2));
console.log(move_down(0));

