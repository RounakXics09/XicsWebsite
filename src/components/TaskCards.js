import { Box } from '@mui/material'
import React, { useEffect } from 'react'

function TaskCards(props) {
    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <Box className='taskcard-container'>
            <div>
                <img src={require(`../assets/${props.data.imageId}.png`)} style={{width:'52px',height:'52px'}} alt="Logo1" />
            </div>
            <div className='task-card-heading'>
                {props.data.name}
            </div>
            <div className='task-card-description'>
                {props.data.description}
            </div>
        </Box>
    )
}

export default TaskCards