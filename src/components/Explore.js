import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
  IconButton
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// Sample data for explore posts
const explorePosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop',
    likes: '1.2K',
    comments: '45'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=300&fit=crop',
    likes: '856',
    comments: '32'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    likes: '2.1K',
    comments: '89'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop',
    likes: '945',
    comments: '56'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=300&fit=crop',
    likes: '1.5K',
    comments: '67'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    likes: '789',
    comments: '34'
  }
];

function Explore() {
  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <InstagramIcon sx={{ color: '#262626', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Explore
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 8, mb: 7 }}>
        <Grid container spacing={1}>
          {explorePosts.map((post) => (
            <Grid item xs={4} key={post.id}>
              <Paper
                sx={{
                  paddingTop: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .overlay': {
                      opacity: 1
                    }
                  }
                }}
              >
                <Box
                  component="img"
                  src={post.image}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    opacity: 0,
                    transition: 'opacity 0.2s'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <FavoriteBorderIcon sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{post.likes}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <ChatBubbleOutlineIcon sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{post.comments}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Explore; 