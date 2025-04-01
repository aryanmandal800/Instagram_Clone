import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  TextField,
  IconButton,
  Paper
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

// Sample data for messages
const messages = [
  {
    id: 1,
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    lastMessage: 'Hey, how are you?',
    time: '2h',
    unread: true
  },
  {
    id: 2,
    username: 'jane_smith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    lastMessage: 'See you tomorrow!',
    time: '5h',
    unread: false
  },
  {
    id: 3,
    username: 'mike_wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
    lastMessage: 'Great photo!',
    time: '1d',
    unread: true
  }
];

function Messages() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <InstagramIcon sx={{ color: '#262626', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Messages
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 8, mb: 7 }}>
        <Box sx={{ display: 'flex', height: 'calc(100vh - 120px)' }}>
          {/* Chat List */}
          <Paper sx={{ width: '40%', mr: 2, overflow: 'auto' }}>
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                placeholder="Search messages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />
            </Box>
            <List>
              {messages.map((message, index) => (
                <React.Fragment key={message.id}>
                  <ListItem 
                    button 
                    selected={selectedChat === message.id}
                    onClick={() => setSelectedChat(message.id)}
                  >
                    <ListItemAvatar>
                      <Avatar src={message.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1">
                            {message.username}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {message.time}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {message.lastMessage}
                          </Typography>
                          {message.unread && (
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: '#0095f6',
                                ml: 1
                              }}
                            />
                          )}
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < messages.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>

          {/* Chat Window */}
          <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {selectedChat ? (
              <>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                  <Typography variant="h6">
                    {messages.find(m => m.id === selectedChat)?.username}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
                  {/* Chat messages would go here */}
                </Box>
                <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      fullWidth
                      placeholder="Message..."
                      size="small"
                    />
                    <IconButton color="primary">
                      <SendIcon />
                    </IconButton>
                  </Box>
                </Box>
              </>
            ) : (
              <Box 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'text.secondary'
                }}
              >
                Select a conversation to start messaging
              </Box>
            )}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Messages; 