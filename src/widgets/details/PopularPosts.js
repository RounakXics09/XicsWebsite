import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Grid2 } from '@mui/material';

const posts = [1,2,3]

function PopularPosts() {
    return (
        <Box sx={{ py: 4 }}>
            <Grid2 className='side-menus-div'>
                <Grid2 className="side-headings">Popular Posts</Grid2>
                <List sx={{ width: '100%' }}>
                    {posts.map((value, i) => {
                        return (
                            <ListItem alignItems="flex-start" sx={{
                                borderBottom: i !== posts.length - 1 ? '1px solid #DFDFFB' : 'none',
                                borderTop: i === 0 ? '1px solid #DFDFFB' : 'none'
                            }}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.secondary', display: 'inline' }}
                                            >
                                                15 Feb, 2025
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary', display: 'inline' }}
                                            >
                                                How much dose it cost to
                                                start and run a website?
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Grid2>
        </Box>

    );
}

export default PopularPosts