import {GraphType, PenStatus} from './enum';


export interface PenInfo {
    x: number;
    y: number;
    type: GraphType;
    status: PenStatus,
    color: string,
}

export interface SvgBaseProps {
    stroke?: string;
    fill?: string;
    strokeWidth?: string;
}

export interface SvgLineProps extends SvgBaseProps {
    x1: number,
    x2: number,
    y1: number,
    y2: number,
}
export interface SvgTriangleProps extends SvgBaseProps {
    points: number[]
    // x1: number,
    // x2: number,
    // y1: number,
    // y2: number,
    // x3: number,
    // y3: number,
}


export interface ModelData {
    component: string,
    props: SvgBaseProps
}
