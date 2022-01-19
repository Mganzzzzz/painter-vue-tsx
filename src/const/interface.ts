import {GraphType, PenStatus} from './enum';
import {DefineComponent} from "vue";

export interface Point {
    x: number;
    y: number;
}

export interface PenInfo {
    x: number;
    y: number;
    type: GraphType;
    status: PenStatus,
    color: string,
    point?: Point;
}

export interface SvgBaseProps {
    stroke?: string;
    fill?: string;
    strokeWidth?: string;
}

export interface SvgLineProps extends SvgBaseProps {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
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

