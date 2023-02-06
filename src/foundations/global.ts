import { globalCss, theme } from '@/foundations'

const globalStyles = globalCss({
    '*,*::before,*::after': {
        boxSizing: 'border-box',
    },
    '*': { margin: 0 },
    'html,body': { height: '100%' },
    body: {
        margin: 0,
        fontSize: '87.5%' /** 14px */,
        fontFamily: theme.fonts.primary,
        fontWeight: 400,
        lineHeight: 1.75,
        '-webkit-font-smoothing': 'antialiased',
    },
    'img,picture,video,canvas,svg': {
        display: 'block',
        maxWidth: '100%',
    },
    'input,button,textarea,select': { font: 'inherit' },
    'p,h1,h2,h3,h4,h5,h6': {
        'overflow-wrap': 'break-word',
    },
    '#root': {
        isolation: 'isolate',
    },
})

export default globalStyles