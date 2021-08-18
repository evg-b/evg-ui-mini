import { css } from '@emotion/css'

export default {
    base: css`
         border-radius: 4px;  
     `,
    label: css`
        display: inline-flex;
        align-items: center;
        font-family: 'Roboto, sans-serif';
        letter-spacing: .09em;
        line-height: 1.7;
        font-weight: 500;
    `,
    text: css({

    }),
    outlined: css({
        border: '1px solid black',
    }),
    contained: css({

    }),
    small: css({
        height: '28px',
        minWidth: '56px',
        fontSize: '.815rem',
        padding: '0 10px',
    }),
    medium: css({
        height: '36px',
        minWidth: '64px',
        fontSize: '.875rem',
        padding: '0 16px',
    }),
    large: css({
        height: '42px',
        minWidth: '72px',
        fontSize: '1.2rem',
        padding: '0 24px',
    }),
    extra: css({
        height: '48px',
        fontSize: '1.6rem',
        padding: '0 24px',
        width: '100%',
    }),
    round: css({
        borderRadius: '999px',
    }),
}
