var matrix = [
    [3, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 5],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [4, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 2]
];

var grassArr = []
var side = 80;
var xotaker = [];
var gishatich = [];
var hresh = [];
var hreshaker = [];
function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y, 2))
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y, 3))
            }
            else if (matrix[y][x] == 4) {
                hresh.push(new Hresh(x, y, 4))
            }
            else if (matrix[y][x] == 5) {
                hreshaker.push(new Hreshaker(x, y, 5))
            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(98, 187, 76);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(222, 229, 229);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill(255, 251, 1);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(1, 255, 243);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(254, 1, 47);
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) {
                fill(254, 177, 1);
                rect(x * side, y * side, side, side);
            }


        }
    }

    for (var i in grassArr) {

        grassArr[i].bazmanal();
    }


    for (var i in xotaker) {
        xotaker[i].sharjvel();
        xotaker[i].utel();
        xotaker[i].bazmanal();

    }
    for (var i in gishatich) {
        gishatich[i].sharjvel();
        gishatich[i].utel();
        gishatich[i].bazmanal();

    }
    for (var i in hresh) {
        hresh[i].sharjvel();
        hresh[i].utel();
        hresh[i].bazmanal();

    }

    for (var i in hreshaker) {
        hreshaker[i].sharjvel();
        hreshaker[i].utel();
        hreshaker[i].bazmanal();

    }

}

