import React, { ChangeEvent, FunctionComponent } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface InputProps {
    placeholder?: string;
    value: string;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    onEnterPressed?(): void;
    label?: string;
    disabled?: boolean;
    id?: string;
    type?: string;
    css?: FlattenSimpleInterpolation;
}

const StyledInput = styled.input<InputProps>`
    font-size: 16px;

    width: 70%;

    justify-content: center;
    align-items: center;

    margin-top: 0px;
    padding: 2px 20px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 50px #603E5E1A;
    border-radius: 12px;
    height: 60px;

    border-width: 0px;
    ${props => props.css}
`;

const StyledLabel = styled.label`
    font-size: 80px;
`;

const Input: FunctionComponent<InputProps> = ({
    placeholder,
    value,
    onChange,
    onEnterPressed,
    label,
    id,
    type = 'text',
    disabled = false,
    ...props
}: InputProps) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (onEnterPressed && e.key === 'Enter') {
            e.preventDefault();
            onEnterPressed();
        }
    };

    const renderLabel = () => {
        if (!label) return false;

        return (
            <div style={{ marginBottom: 5 }}>
                <StyledLabel>
                    {label}
                </StyledLabel>
            </div>
        );
    };

    return (
        <>
            {renderLabel()}
            <StyledInput
                type={type}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                id={id}
                {...props}
            />
        </>
    );
};

export default Input;
