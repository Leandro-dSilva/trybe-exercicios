import Root from './Root';
import Piece from './Piece';
import Pawn from './Pawn';
import isInList from './isInList';

export default class Board {
  pieces: Piece[] = [];

  constructor() {
    this.addPiece(new Pawn(['C', '2'], this));
    this.addPiece(new Root(['F', '1'], this));
  }

  private addPiece(piece: Piece) {
    if (isInList(piece.position, this.occupiedHouses)) return;
    this.pieces.push(piece);
  }
  get occupiedHouses() {
    return this.pieces.map((piece) => piece.position);
  }
}
