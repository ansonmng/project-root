import React, { FunctionComponent } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export interface ButtonProps {
    label?: string;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    [x: string]: any;
    css?: FlattenSimpleInterpolation;
}

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    ${props => (props.disabled && !props.$loading) && css`
        background-color: grey;
    `}

    ${props => props.css}
`;

const Button: FunctionComponent<ButtonProps> = ({
    onClick,
    label,
    loading = false,
    disabled = false,
    ...props
}: ButtonProps) => {
    const renderBody = () => {
        if (loading) return <p>Loading...</p>;

        return label;
    };

    return (
        <StyledButton
            type='button'
            onClick={onClick}
            disabled={disabled || loading}
            $loading={loading}
            {...props}
        >
            {renderBody()}
            {props.children}
        </StyledButton>
    );
};

export default Button;
