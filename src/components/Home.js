import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent,
  IconButton,
  Box,
  Paper,
  Avatar,
  TextField,
  BottomNavigation,
  BottomNavigationAction,
  Divider
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import ExploreIcon from '@mui/icons-material/Explore';

// Sample data for stories
const stories = [
  {
    id: 1,
    username: 'your_story',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isAddStory: true
  },
  {
    id: 2,
    username: 'john_doe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    username: 'jane_smith',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    username: 'mike_wilson',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  }
];

// Sample data for posts
const posts = [
  {
    id: 1,
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop',
    likes: 1234,
    caption: 'Beautiful day! #instagram #clone'
  },
  {
    id: 2,
    username: 'jane_smith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&h=600&fit=crop',
    likes: 567,
    caption: 'Living my best life 🌟'
  },
  {
    id: 3,
    username: 'mike_wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    likes: 890,
    caption: 'Adventure awaits! 🏔️'
  }
];

function Home() {
  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <InstagramIcon sx={{ color: '#262626', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instagram Clone
          </Typography>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 8, mb: 7 }}>
        {/* Stories Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 2, 
            mb: 2, 
            display: 'flex', 
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {stories.map((story) => (
            <Box key={story.id} sx={{ textAlign: 'center', mr: 2 }}>
              <Avatar
                src={story.image}
                sx={{
                  width: 60,
                  height: 60,
                  border: '2px solid #e1306c',
                  p: 0.5
                }}
              />
              <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                {story.username}
              </Typography>
            </Box>
          ))}
        </Paper>

        {/* Posts Section */}
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      src={post.avatar}
                      alt={post.username}
                    />
                  }
                  title={post.username}
                />
                <CardMedia
                  component="img"
                  height="600"
                  image={post.image}
                  alt="Post image"
                />
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton>
                      <SendIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton>
                      <BookmarkBorderIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {post.likes} likes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{post.username}</strong> {post.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bottom Navigation */}
      <Paper 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0,
          zIndex: 1000
        }} 
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Reels" icon={<MovieIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircleOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Home; 