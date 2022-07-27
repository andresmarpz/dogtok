import Image from 'next/image';
import React, { useState } from 'react';
import { styled } from '../stitches.config';

const StyledImage = styled(Image, {
    transition: '300ms ease-in-out',
    transitionProperty: 'filter transform opacity',
    variants: {
        blur: {
            false: {
                transform: 'scale(1)',
                filter: 'blur(0px) grayscale(0%)'
            },
            true: {
                backgroundImage:
                    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc2AkAAfEBPNFKY+gAAAAASUVORK5CYII=)',
                transform: 'scale(1.1)',
                filter: 'blur(40px) grayscale(100%)'
            }
        }
    },
    defaultVariants: {
        blur: true
    }
});

const BlurImage = ({ ...props }: React.ComponentProps<typeof Image>) => {
    const [loading, setLoading] = useState(true);

    return (
        <StyledImage
            {...props}
            blur={loading}
            onLoadingComplete={() => setLoading(false)}></StyledImage>
    );
};

export default BlurImage;
