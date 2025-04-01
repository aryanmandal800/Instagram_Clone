import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
      <BottomNavigation 
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction 
          label="Home" 
          value="/"
          icon={<HomeIcon />} 
        />
        <BottomNavigationAction 
          label="Search" 
          value="/search"
          icon={<SearchIcon />} 
        />
        <BottomNavigationAction 
          label="Explore" 
          value="/explore"
          icon={<ExploreIcon />} 
        />
        <BottomNavigationAction 
          label="Reels" 
          value="/reels"
          icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
          label="Messages" 
          value="/messages"
          icon={<ChatBubbleOutlineIcon />} 
        />
        <BottomNavigationAction 
          label="Profile" 
          value="/profile"
          icon={<AccountCircleOutlinedIcon />} 
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav; 