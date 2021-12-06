import { List, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

type SeznamProps = {
    seznam: { title: string, children?: SeznamProps, pad?: number }[],
}

const Seznam = ({ seznam }: SeznamProps) => {
    seznam.map(item => {
        if (item && !item.pad) {
            item.pad = 0
        }
        if (item && item.children) {
            item.children.map(child => {
                child.pad = item.pad + 4
                console.log(child.pad)
            })
        }
    })

    return (<List>
        {seznam.map(item => {
            return (
                <>
                    <ListItemButton sx={{ pl: item.pad }}>
                        <ListItemText primary={item ? item.title : ""} />
                    </ListItemButton>
                    {item && item.children && <Seznam seznam={item.children} />}
                </>
            )
        })}
    </List >
    )
}

export default Seznam