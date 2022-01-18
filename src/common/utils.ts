export const log = console.log.bind(console)

const pi = Math.PI

export function cos(angle: number): number {
    const c = angle * (pi / 180)
    return Math.cos(c)
}

export function sin(angle: number): number {
    const c = angle * (pi / 180)
    return Math.sin(c)

}
