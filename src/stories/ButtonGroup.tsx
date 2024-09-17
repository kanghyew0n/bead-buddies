import React from 'react';
import styled from '@emotion/styled';

const ButtonGroupWrapper = styled.div`
display: flex;
gap: 20px;
`;

const ButtonGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup;
