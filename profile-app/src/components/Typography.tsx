import React from "react";
import styled from "styled-components";

// Language: typescript
// Path: src\components\Typography.tsx
export const textStyles = styled.div`
    font-family: Inter, sans-serif;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    `;

export const Display1 = styled(textStyles)`
    font-size: 34px;
    line-height: 1.5;
`;
 
export const Display2 = styled(textStyles)`
    font-size: 30px;
    line-height: 1.5;
`;

export const Display3 = styled(textStyles)`
    font-size: 24px;
    line-height: 1.2;
`;

export const Display4 = styled(textStyles)`
    font-size: 20px;
    line-height: 1.2;
`;