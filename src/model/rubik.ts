export type Prime<T extends string> = `${T}'` | `${Double<T>}'`

export type Double<T extends string> = `${T}2`

export type Orientation = 'U' | 'D' | 'R' | 'L' | 'F' | 'B'

export type SingleLayerTurn = Orientation

export type TwoLayerTurn = Lowercase<Orientation>

export type SliceLayerTurn = 'M' | 'E' | 'S'

export type FaceMove = Prime<SingleLayerTurn> | Double<SingleLayerTurn> | SingleLayerTurn

export type WideMove = Prime<TwoLayerTurn> | Double<TwoLayerTurn> | TwoLayerTurn

export type SliceMove = Prime<SliceLayerTurn> | Double<SliceLayerTurn> | SliceLayerTurn

export type Rotation = 'x' | 'y' | 'z'

export type RotationMove = Prime<Rotation> | Double<Rotation> | Rotation
