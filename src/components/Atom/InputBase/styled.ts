import { styled } from '@/foundations'

export const StyledButton = styled('button', {
    border: 'none',
    px: 2,
    py: 0.5,
    fontSize: '$sm',
    fontWeight: '$medium',
    borderRadius: '$1',
    transition: 'all 0.1s ease-in',
    borderWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
    cursor: 'pointer',
    ':disabled': {
        cursor: 'wait',
    },
    variants: {
        variant: {
            contained: {
                color: '$white',
            },
            ghost: {
                background: 'transparent',
                '&:hover': {
                    backgroundColor: '$gray200',
                },
            },
            outlined: {
                background: 'transparent',
            },
        },
        color: {
            default: {
                backgroundColor: '$gray200',
                color: '$black',
                '&:hover': {
                    backgroundColor: '$gray300',
                },
            },
            primary: {
                backgroundColor: '$primary500',
                color: '$white',
                '&:hover': {
                    backgroundColor: '$primary700',
                },
            },
        },
    },
    compoundVariants: [
        {
            variant: 'contained',
            color: 'default',
            css: {
                backgroundColor: '$gray200',
            },
        },
        {
            variant: 'contained',
            color: 'primary',
            css: {
                color: '$white',
                backgroundColor: '$primary500',
            },
        },
        {
            variant: 'text',
            color: 'default',
            css: {
                backgroundColor: 'transparent',
            },
        },
        {
            variant: 'text',
            color: 'primary',
            css: {
                color: '$primary500',
                backgroundColor: 'transparent',
            },
        },
        {
            variant: 'outlined',
            color: 'default',
            css: {
                color: '$gray600',
                backgroundColor: 'transparent',
                borderColor: '$gray400',
            },
        },
        {
            variant: 'outlined',
            color: 'primary',
            css: {
                color: '$primary500',
                backgroundColor: 'transparent',
                borderColor: '$primary500',
                '&:hover': {
                    color: '$white',
                },
            },
        },
    ],
})