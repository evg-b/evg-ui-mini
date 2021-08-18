import React, { FC, ElementType, ReactNode } from 'react'
import classes from './style'
import { cx } from '@emotion/css'
import ButtonBase from '../ButtonBase/ButttonBase'

interface IButton {
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
     * Варианты кнопки.
    */
    variant?: 'text' | 'outlined' | 'contained'
    /**
     * Размер компонента.
    */
    size?: 'small' | 'medium' | 'large' | 'extra'
    /**
     * Круглые края кнопки.
    */
    round?: boolean
}

const Button: FC<IButton> = (props) => {
    const {
        component: Component = 'button',
        children,
        className,
        variant = 'text',
        size = 'medium',
        round = false,
        ...otherProps
    } = props
    return (
        <ButtonBase
            className={cx(
                classes.base,
                classes.label,
                classes[variant],
                classes[size],
                { [classes.round]: round }

            )}
            {...otherProps}
        >
            {children}
        </ButtonBase>
    )
}

export default Button