import { spaceUnit } from './tokens'

const withSpaceUnit = (value: number) => value * spaceUnit

export const m = (value: number) => ({
    margin: withSpaceUnit(value),
})
export const mx = (value: number) => ({
    marginLeft: withSpaceUnit(value),
    marginRight: withSpaceUnit(value),
})

export const my = (value: number) => ({
    marginTop: withSpaceUnit(value),
    marginBottom: withSpaceUnit(value),
})

export const p = (value: number) => ({
    padding: withSpaceUnit(value),
})
export const px = (value: number) => ({
    paddingLeft: withSpaceUnit(value),
    paddingRight: withSpaceUnit(value),
})

export const py = (value: number) => ({
    paddingTop: withSpaceUnit(value),
    paddingBottom: withSpaceUnit(value),
})

export const gap = (value: number) => ({
    gap: withSpaceUnit(value),
})

export const size = (value: number) => ({
    width: value,
    height: value,
})