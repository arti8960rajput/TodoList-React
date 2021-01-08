import React from 'react';
import styled from 'styled-components';

const CheckboxContainer =styled.div`
    display: inline-block;
    vertical-align:middle;
    `
    const Icon = styled.svg`
    fill:none;
    stroke:white;
    stroke-width:2px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:15px; 
    `
    const Checkbox=({className, checked, ...props}) => (
        <CheckboxContainer className={className}>
            <styledCheckbox checked={checked}{...props}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                </Icon>
            </styledCheckbox>
        </CheckboxContainer>
    )

    export default Checkbox