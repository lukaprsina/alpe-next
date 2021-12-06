import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import NextJsImage from 'next/image'
import React from 'react'

type SlikaProps = {
    podnapis: string,
    width: string,
    height: string,
    src: string,
}

const Slika = ({ src, podnapis, width, height }: SlikaProps) => {
    return (<Box>
        <NextJsImage
            src={src}
            alt={podnapis}
            width={width}
            height={height}
            layout="fixed"
        />
        <br />
        <Typography variant="caption">{podnapis}</Typography>
    </Box >
    )
}

export default Slika