
var gridArrayBattleShip1 = new Array(10)
var SINGLE_SHIP_VALUE
var DOUBLE_SHIP_VALUE
var TRIPLE_SHIP_VALUE
var FOUR_SHIP_VALUE
var FIVE_SHIP_VALUE
var PLAYER_POINTS = 0
class BattleshipComputer {

    constructor(SINGLE_SHIP_VALUE, DOUBLE_SHIP_VALUE, TRIPLE_SHIP_VALUE, FOUR_SHIP_VALUE, FIVE_SHIP_VALUE){

        this.SINGLE_SHIP_VALUE = SINGLE_SHIP_VALUE;
        console.log(this.SINGLE_SHIP_VALUE);
        this.DOUBLE_SHIP_VALUE = DOUBLE_SHIP_VALUE;
        this.TRIPLE_SHIP_VALUE = TRIPLE_SHIP_VALUE;
        this.FOUR_SHIP_VALUE = FOUR_SHIP_VALUE;
        this.FIVE_SHIP_VALUE = FIVE_SHIP_VALUE;
    }
   
    arrayInit() {
        for (i = 0; i < 10; i++) {
            gridArrayBattleShip1[i] = new Array(10)
        }
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                gridArrayBattleShip1[i][j] = null;
            }
        }
    }
    addSingleShip() {
        var randomPositionX = Math.floor(Math.random() * 10);
        var randomPositionY = Math.floor(Math.random() * 10);
        if ([randomPositionX][randomPositionY] == null) {
            console.log(this.SINGLE_SHIP_VALUE);
            gridArrayBattleShip1[randomPositionX][randomPositionY] = this.SINGLE_SHIP_VALUE;
        }
        else {
            this.addSingleShip();
        }
    }

    addHorizontalDoubleShip() {
        var randomPositionX = Math.floor(Math.random() * 10);
        var randomPositionY = Math.floor(Math.random() * 9);
        var check = 0
        for (i = randomPositionY; i < randomPositionY + 2; i++) {
            if (gridArrayBattleShip1[randomPositionX][i] == null) {
                check = check + 1
            }
        }
        if (check == 2) {
            for (i = randomPositionY; i < randomPositionY + 2; i++) {
                gridArrayBattleShip1[randomPositionX][i] = this.DOUBLE_SHIP_VALUE;
                console.log(DOUBLE_SHIP_VALUE);
            }
        }
        else {
            this.addHorizontalDoubleShip()
        }
    }
    addVerticalDoubleShip() {
        var randomPositionX = Math.floor(Math.random() * 9);
        var randomPositionY = Math.floor(Math.random() * 10);
        var check = 0
        for (i = randomPositionX; i < randomPositionX + 2; i++) {
            if (gridArrayBattleShip1[i][randomPositionY] == null) {
                check = check + 1
            }
        }
        if (check == 2) {
            for (i = randomPositionX; i < randomPositionX + 2; i++) {
                gridArrayBattleShip1[i][randomPositionY] = this.DOUBLE_SHIP_VALUE;
            }
        }
        else {
            this.addVerticalDoubleShip()
        }
    }
    addHorizontalTripleShip() {
        var randomPositionX = Math.floor(Math.random() * 10);
        var randomPositionY = Math.floor(Math.random() * 8);
        var check = 0
        for (i = randomPositionY; i < randomPositionY + 3; i++) {
            if (gridArrayBattleShip1[randomPositionX][i] == null) {
                check = check + 1
            }
        }
        if (check == 3) {
            for (i = randomPositionY; i < randomPositionY + 3; i++) {
                gridArrayBattleShip1[randomPositionX][i] = this.TRIPLE_SHIP_VALUE;
            }
        }
        else {
            this.addHorizontalTripleShip()
        }
    }
    addVerticalTripleShip() {
        var randomPositionX = Math.floor(Math.random() * 8);
        var randomPositionY = Math.floor(Math.random() * 10);
        var check = 0
        for (i = randomPositionX; i < randomPositionX + 3; i++) {
            if (gridArrayBattleShip1[i][randomPositionY] == null) {
                check = check + 1
            }
        }
        if (check == 3) {
            for (i = randomPositionX; i < randomPositionX + 3; i++) {
                gridArrayBattleShip1[i][randomPositionY] = this.TRIPLE_SHIP_VALUE;
            }
        }
        else {
            this.addVerticalTripleShip()
        }
    }
    addHorizontalFourShip() {
        var randomPositionX = Math.floor(Math.random() * 10);
        var randomPositionY = Math.floor(Math.random() * 7);
        var check = 0
        for (i = randomPositionY; i < randomPositionY + 4; i++) {
            if (gridArrayBattleShip1[randomPositionX][i] == null) {
                check = check + 1
            }
        }
        if (check == 4) {
            for (i = randomPositionY; i < randomPositionY + 4; i++) {
                gridArrayBattleShip1[randomPositionX][i] = this.FOUR_SHIP_VALUE;
            }
        }
        else {
            this.addHorizontalFourShip()
        }
    }
    addVerticalFourShip() {
        var randomPositionX = Math.floor(Math.random() * 7);
        var randomPositionY = Math.floor(Math.random() * 10);
        var check = 0
        for (i = randomPositionX; i < randomPositionX + 4; i++) {
            if (gridArrayBattleShip1[i][randomPositionY] == null) {
                check = check + 1
            }
        }
        if (check == 4) {
            for (i = randomPositionX; i < randomPositionX + 4; i++) {
                gridArrayBattleShip1[i][randomPositionY] = this.FOUR_SHIP_VALUE;
            }
        }
        else {
            this.addVerticalFourShip()
        }
    }
    addHorizontalFiveShip() {
        var randomPositionX = Math.floor(Math.random() * 10);
        var randomPositionY = Math.floor(Math.random() * 6);
        var check = 0
        for (i = randomPositionY; i < randomPositionY + 5; i++) {
            if (gridArrayBattleShip1[randomPositionX][i] == null) {
                check = check + 1
            }
        }
        if (check == 5) {
            for (i = randomPositionY; i < randomPositionY + 5; i++) {
                gridArrayBattleShip1[randomPositionX][i] = this.FIVE_SHIP_VALUE;
            }
        }
        else {
            this.addHorizontalFiveShip()
        }
    }

    addVerticalFiveShip() {
        var randomPositionX = Math.floor(Math.random() * 6);
        var randomPositionY = Math.floor(Math.random() * 10);
        var check = 0
        for (i = randomPositionX; i < randomPositionX + 5; i++) {
            if (gridArrayBattleShip1[i][randomPositionY] == null) {
                check = check + 1
            }
        }
        if (check == 5) {
            for (i = randomPositionX; i < randomPositionX + 5; i++) {
                gridArrayBattleShip1[i][randomPositionY] = this.FIVE_SHIP_VALUE;
            }
        }
        else {
            this.addVerticalFiveShip()
        }
    }

  

    playerPoints(){
        PLAYER_POINTS+=1
        if(PLAYER_POINTS==30)
        {
         alert("PLAYER WIN");
            location.reload();
        }
        return PLAYER_POINTS
    }

    
}
