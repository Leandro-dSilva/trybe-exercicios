// Exercício 06
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let title = "How Chess Pieces Move";

let kingMove = "Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.";

let queenMove = "Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.";

let rookMove = "Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.";

let bishopMove = "Bishops move diagonally any number of squares. They are unable to jump over pieces.";

let knightMove = "Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.";

let pawnMove = "Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.";


function chessMove(piece) {
  piece = piece. toLowerCase()
  
    if (piece === "king") {
      return kingMove;
    }
    else if (piece === "queen") {
      return queenMove;
    }
    else if (piece === "rook") {
      return rookMove;
    }
    else if (piece === "bishop") {
      return bishopMove;
    }
    else if (piece === "knight") {
      return knightMove;
    }
    else if (piece === "pawn") {
      return pawnMove;
    } else {
      return "This piece is invalid for the game of chess."
    }
}  

let move = chessMove("KING"); //Enter the name of the chess piece here.

console.log(title + ":");
console.log();
console.log(move);



// Text font: https://www.ichess.net/blog/chess-pieces-moves/
