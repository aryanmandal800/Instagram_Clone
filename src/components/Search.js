import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

// Sample data for suggested users
const suggestedUsers = [
  {
    id: 1,
    username: 'emma_watson',
    name: 'Emma Watson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
    isVerified: true
  },
  {
    id: 2,
    username: 'chris_evans',
    name: 'Chris Evans',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    isVerified: true
  },
  {
    id: 3,
    username: 'sophie_turner',
    name: 'Sophie Turner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    isVerified: true
  }
];

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <InstagramIcon sx={{ color: '#262626', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instagram Clone
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 8, mb: 7 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
            }}
          />
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Suggested
        </Typography>

        <List>
          {suggestedUsers.map((user, index) => (
            <React.Fragment key={user.id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {user.username}
                      {user.isVerified && (
                        <Typography
                          component="span"
                          sx={{
                            ml: 0.5,
                            color: '#0095f6',
                            fontSize: '0.8rem'
                          }}
                        >
                          ✓
                        </Typography>
                      )}
                    </Box>
                  }
                  secondary={user.name}
                />
              </ListItem>
              {index < suggestedUsers.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default Search; 