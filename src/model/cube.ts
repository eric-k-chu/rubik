export type Position = {
  x: number
  y: number
  z: number
}

export type CenterPiece = {
  type: 'center'
  color: string
}

export type EdgePiece = {
  type: 'edge'
  colorX: string
  colorY: string
}

export type CornerPiece = {
  type: 'corner'
  colorX: string
  colorY: string
  colorZ: string
}

export type Piece = CenterPiece | EdgePiece | CornerPiece

export type Cube = Piece & {
  position: Position
}
