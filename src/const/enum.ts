export enum GraphType {
    base = 'base',
    line = 'line',
    rect = 'rect',
    round = 'round',
    path = 'path',
    ellipse = 'ellipse',
    triangle = 'triangle',
    polygon = 'polygon',
    point = 'point',
}


export enum Drawing {
    init = 'init',
    start = 'start',
    moving = 'moving',
    end = 'end'
}


export enum PenStatus {
    down,
    up,
}
