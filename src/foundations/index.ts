import { createStitches } from '@stitches/react'

import {
    breakpoints,
    colors,
    fontSizes,
    fontWeights,
    fonts,
    radii,
    space,
    transitions,
} from './tokens'
import * as utils from './utils'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors,
        space,
        fontSizes,
        fonts,
        fontWeights,
        radii,
        transitions,
    },
    media: breakpoints,
    utils,
})