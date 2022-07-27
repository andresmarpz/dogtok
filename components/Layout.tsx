import React from 'react';
import { styled } from '../stitches.config';

const StyledContainer = styled('div', {
    maxWidth: '950px',
    margin: 'auto'
});

const Layout = ({ children }: React.PropsWithChildren) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Layout;
