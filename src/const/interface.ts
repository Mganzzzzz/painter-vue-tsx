import {GraphType, PenStatus} from './enum';

export interface MapOf<T> {
    [key: string]: T;
}


export interface Point {
    x: number;
    y: number;
}

export interface PenInfo {
    show: boolean;
    x: number;
    y: number;
    type: GraphType;
    status: PenStatus,
    color: string;
    point?: Point;
    strokeWith: string;
}

export interface SvgBaseProps {
    stroke?: string;
    fill?: string;
    'stroke-width'?: string;

    [key: string]: any,
}

export interface SvgLineProps extends SvgBaseProps {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

export interface SvgPathProps extends SvgBaseProps {
    points: string
}


export interface SvgTriangleProps extends SvgBaseProps {
    points: string
}

export interface SvgRectProps extends SvgBaseProps {
    x: number;
    y: number;
    height: number;
    width: number;
}

export interface SvgPointProps extends SvgBaseProps {
    x: number;
    y: number;
}


export interface ModelData {
    component: any,
    props: SvgBaseProps
}


export interface ModelCursorPenData {
    x: number,
    y: number,
}

