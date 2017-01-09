console.log("hello world");


//object constructor function
  var gameEngine = {
    //empty array of 7 columns filled with nothing
    board: Array(7).fill(null),
    //first player is red
    player: "r",
    gameOver: false,

    //method to reset the game, clear gameboard
    resetGame: function(){
      this.board = Array(7).fill(null),
      this.player = "b";
      this.gameOver = "false";
    },

    //method to toggle between players
    togglePlayer: function(){
      //starting player is black
      if (this.player == "b") {
        //change that player to black
        this.player = "r";
        //else change that player to black
      } else {
        this.player = "b";
      }
    },

    //method to set legal moves
    isValidMove: function(columnNum){
      //if the game is over
      if(!this.gameOver){
        //if the columnNum is has room for anymore pieces to be dropped
        if(!this.board[columnNum] || this.board[columnNum].length < 6){
          //clear any moves not legal
          viewEngine.clearFlash();
          //returns true if piece can be dropped and game continues
          return true;
        }
        //message for invalid move made in viewEngine constructor
        viewEngine.flashMessage('aw man, no more space here, try another column');
        return false;
      }
      //returns false(gameover)if move not legal
      return false;
    },

    checkVictory: function(columnNum){
      //horizontal victory if sum of pieces is greater or equal to 4
      if(this.horizontalVictory(columnNum)) >= 4){
        return true;
      }
      //vertical victory winner if sum of pieces is greater or equal to 4
      if(this.verticalVictory(columnNum) >= 4){
        return true;
      }
      //if neither than false
      return false;
    },

    horizontalVictory: function(columnNum){
      var count = 0;
      var rowNum = this.board[columnNum].length - 1;
      for(var i=columnNum - 1; i >= 0; i--){
        if(this.board[i][rowNum] && this.board[i][rowNum] == this.player){
          count++;
        } else {
          break;
        }
      }
      return count;
    },



    verticalVictory: function(columnNum){
      var count = 0;
      var rowNum = this.board[columnNum].length - 1;
      for(var i=rowNum - 1; i >= 0; i--){
        if(this.board[columnNum][i] && this.board[columnNum][i] == this.player){
          count++;
        } else {
          break;
        }
      }
      return count++;
    },

    makeMove: function(columnNum){
      //if the legal move is in a column
      is(this.isValidMove(columnNum)){
        //
    
  };

  var viewEngine = {
    updateGameboard: function(){
      for(var i=0; i <gameEngine.board.length; i++){
        for(var j=0; j < 6; j++){
          if(gameEngine.board[i][j] == "r"){

          }
        }
      }
    }
  };

  var gameController = {

  }

  //
  // horizontalVictory: function(columnNum){
  //   for (var row = 0; row < columnNum.length; row++){
  //     for (var col = 0; col < column.length - 3; col++){
  //     if (column[col][row] === 'black'  && column[col+1][row] === 'black'  && column[col+2][row] === 'black'  && column[col+3][row] === 'black') {
  //       alert('black won');
  //       won = true;
  //     } else if (column[col][row] === 'red' && column[col][row+1] === 'red' &&    column[col][row+2] === 'red' && column[col][row+3] === 'red'){
  //       alert('red won');
  //       won = true;
  //     }
  //     }
  //   }
  // },
