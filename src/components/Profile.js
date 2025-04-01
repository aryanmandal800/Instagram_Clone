import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  Grid,
  Paper,
  Button,
  Tabs,
  Tab,
  IconButton,
  Divider
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

// Sample data for profile
const profile = {
  username: 'john_doe',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  bio: 'Digital creator | Travel enthusiast | Coffee lover ☕',
  posts: 42,
  followers: 1234,
  following: 567,
  isOwnProfile: true
};

// Sample data for posts
const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=300&fit=crop'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  }
];

function Profile() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <InstagramIcon sx={{ color: '#262626', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {profile.username}
          </Typography>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 8, mb: 7 }}>
        {/* Profile Header */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
              <Avatar
                src={profile.avatar}
                sx={{ width: 150, height: 150, mx: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" component="h1" sx={{ display: 'inline' }}>
                  {profile.username}
                </Typography>
                {profile.isOwnProfile ? (
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    Follow
                  </Button>
                )}
              </Box>
              <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
                <Typography>
                  <strong>{profile.posts}</strong> posts
                </Typography>
                <Typography>
                  <strong>{profile.followers}</strong> followers
                </Typography>
                <Typography>
                  <strong>{profile.following}</strong> following
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.bio}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Posts Grid */}
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{ mb: 2 }}
          >
            <Tab
              icon={<GridOnIcon />}
              label="POSTS"
            />
            <Tab
              icon={<BookmarkBorderIcon />}
              label="SAVED"
            />
            <Tab
              icon={<AccountBoxOutlinedIcon />}
              label="TAGGED"
            />
          </Tabs>

          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={1}>
            {posts.map((post) => (
              <Grid item xs={4} key={post.id}>
                <Paper
                  sx={{
                    paddingTop: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.9
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
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Profile; 