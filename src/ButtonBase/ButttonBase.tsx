import React, { FC, ElementType, ReactNode } from 'react'
import { base } from './style'
import { cx } from '@emotion/css'

interface IButtonBase {
    /**
     * Корневой узел. Это HTML элемент или компонент.
    */
    component?: ElementType
    /**
     * Это контент между открывающим и закрывающим тегом компонента.
    */
    children?: ReactNode
    /**
     * Чтобы указать CSS классы, используйте этот атрибут.
    */
    className?: string
    /**
     * Текст ссылки.
    */
    href?: string
    /**
     * Атрибут tabindex определяет последовательность перехода между ссылками при нажатии на кнопку Tab.
    */
    tabIndex?: number
}

const ButtonBase: FC<IButtonBase> = (props) => {
    const {
        component: Component = 'button',
        children,
        className,
        href,
        tabIndex,
        ...otherProps
    } = props
    return (
        <Component
            className={cx(base, className)}
            {...otherProps}
        >
            {children}
        </Component>
    )
}

export default ButtonBase