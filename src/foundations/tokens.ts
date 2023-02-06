import { blue, green, yellow, red } from '@radix-ui/colors'

// Colors
// -----------------
export const colors = {
    ...blue,
    ...green,
    ...yellow,
    ...red,

    black: '#333',
    white: '#fff',

    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',

    primary50: '#eceff1',
    primary100: '#CFD8DC',
    primary200: '#B0BEC5',
    primary300: '#90A4AE',
    primary400: '#78909C',
    primary500: '#607D8B',
    primary600: '#607D8B',
    primary700: '#455A64',
    primary800: '#37474F',
    primary900: '#263238',

    secondary50: '#eceff1',
    secondary100: '#CFD8DC',
    secondary200: '#B0BEC5',
    secondary300: '#90A4AE',
    secondary400: '#78909C',
    secondary500: '#607D8B',
    secondary600: '#607D8B',
    secondary700: '#455A64',
    secondary800: '#37474F',
    secondary900: '#263238',

    success50: '$green1',
    success100: '$green2',
    success200: '$green3',
    success300: '$green4',
    success400: '$green5',
    success500: '$green6',
    success600: '$green7',
    success700: '$green8',
    success800: '$green9',
    success900: '$green10',

    info50: '$blue1',
    info100: '$blue2',
    info200: '$blue3',
    info300: '$blue4',
    info400: '$blue5',
    info500: '$blue6',
    info600: '$blue7',
    info700: '$blue8',
    info800: '$blue9',
    info900: '$blue10',

    warning50: '$yellow1',
    warning100: '$yellow2',
    warning200: '$yellow3',
    warning300: '$yellow4',
    warning400: '$yellow5',
    warning500: '$yellow6',
    warning600: '$yellow7',
    warning700: '$yellow8',
    warning800: '$yellow9',
    warning900: '$yellow10',

    error50: '$red1',
    error100: '$red2',
    error200: '$red3',
    error300: '$red4',
    error400: '$red5',
    error500: '$red6',
    error600: '$red7',
    error700: '$red8',
    error800: '$red9',
    error900: '$red10',
}

// Spacing
// -----------------
export const spaceUnit = 8
export const space = {
    1: spaceUnit,
    2: spaceUnit * 2,
    3: spaceUnit * 3,
    4: spaceUnit * 4,
}

// Shape
// -----------------
export const radii = {
    1: '3px',
    2: '6px',
    3: '12px',
}

// Typography
// -----------------
export const fontSizes = {
    sm: '0.8rem',
    base: '1rem',
    md: '1.25rem',
    lg: '1.563rem',
    xl: '1.953rem',
    '2xl': '2.441rem',
    '3xl': '3.052rem',
}

export const fontWeights = {
    thin: 300,
    regular: 400,
    medium: 500,
    bold: 600,
}

export const fonts = {
    primary:
        '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
    mono: '"Ricty Diminished","Ricty","Myrica M","Migu 1M","Source Han Code JP","SFMono-Regular","Consolas","Liberation Mono","Menlo","Courier",monospace;',
}

// Animation
// -----------------
export const transitions = {}

// Layouts
// -----------------
export const breakpoints = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
}