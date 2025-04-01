import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Paper
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Sample data for reels
const reels = [
  {
    id: 1,
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    likes: '1.2M',
    comments: '10K',
    description: 'Amazing sunset 🌅 #reels #instagram'
  },
  {
    id: 2,
    username: 'jane_smith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    likes: '2.5M',
    comments: '15K',
    description: 'Spring vibes 🌸 #reels #instagram'
  }
];

function Reels() {
  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <InstagramIcon sx={{ color: '#262626', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reels
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
        {reels.map((reel) => (
          <Paper
            key={reel.id}
            sx={{
              height: '100vh',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              overflow: 'hidden'
            }}
          >
            <video
              src={reel.videoUrl}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              loop
              muted
              autoPlay
            />
            
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar src={reel.avatar} sx={{ mr: 1 }} />
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  {reel.username}
                </Typography>
                <IconButton sx={{ color: 'white' }}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                {reel.description}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FavoriteBorderIcon sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{reel.likes}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ChatBubbleOutlineIcon sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{reel.comments}</Typography>
                </Box>
                <IconButton sx={{ color: 'white' }}>
                  <ShareIcon />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </div>
  );
}

export default Reels; 