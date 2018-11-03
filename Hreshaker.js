class Hreshaker extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(5);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 1;

            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak, this.multiply);
        console.log(this.energy);
        if (norVandak && this.energy >= 5) {
            this.energy = 2;
            var norHreshaker = new Hreshaker(norVandak[0], norVandak[1]);
            hreshaker.push(norHreshaker);
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.multiply = 0;
        }
    }
}

