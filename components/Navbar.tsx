'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Home as HomeIcon, Favorite, Settings } from '@mui/icons-material';

interface NavbarProps {
  favoritesCount: number;
  currentPage: 'home' | 'category' | 'favorites' | 'settings';
  onNavigate: (page: 'home' | 'favorites' | 'settings') => void;
}

const navItems: Array<{ id: 'home' | 'favorites' | 'settings'; label: string; icon: React.ReactNode }> = [
  { id: 'home', label: 'Home', icon: <HomeIcon fontSize="small" /> },
  { id: 'favorites', label: 'Favorites', icon: <Favorite fontSize="small" /> },
  { id: 'settings', label: 'Settings', icon: <Settings fontSize="small" /> },
];

const Navbar: React.FC<NavbarProps> = ({ favoritesCount, currentPage, onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(8, 10, 26, 0.72)',
        backdropFilter: 'blur(22px)',
        borderBottom: '1px solid rgba(148, 163, 255, 0.16)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2, minHeight: { xs: 64, sm: 72 } }}>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          onClick={() => onNavigate('home')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            textAlign: 'left',
          }}
          aria-label="Go to home page"
        >
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #b2c7ff 0%, #f5f3ff 45%, #a0b5ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Daily Motivation ✨
          </Typography>
        </motion.button>

        <Box component="nav" role="navigation" aria-label="Primary">
          <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center' }}>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const countBadge = item.id === 'favorites' && favoritesCount > 0;

              return (
                <Button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  startIcon={item.icon}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={
                    item.id === 'favorites' && countBadge
                      ? `${item.label} ${favoritesCount}`
                      : item.label
                  }
                  sx={{
                    borderRadius: 999,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 2.4,
                    py: 1,
                    fontSize: { xs: '0.8rem', sm: '0.95rem' },
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.4,
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.88), rgba(168, 85, 247, 0.92))'
                      : 'rgba(148, 163, 255, 0.14)',
                    color: isActive ? '#fff' : 'rgba(229, 231, 255, 0.88)',
                    border: isActive ? '1px solid rgba(148, 181, 255, 0.55)' : '1px solid rgba(148, 163, 255, 0.18)',
                    boxShadow: isActive ? '0 12px 28px rgba(99, 102, 241, 0.35)' : '0 8px 18px rgba(15, 23, 42, 0.25)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(129, 140, 248, 0.95), rgba(196, 113, 237, 0.95))'
                        : 'rgba(148, 163, 255, 0.24)',
                    },
                    '&:focus-visible': {
                      outline: 'none',
                      boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.45)',
                    },
                  }}
                >
                  <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {item.label}
                    {countBadge && (
                      <Box
                        component="span"
                        sx={{
                          ml: 0.5,
                          minWidth: 20,
                          px: 0.6,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          borderRadius: 999,
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        {favoritesCount}
                      </Box>
                    )}
                  </Box>
                </Button>
              );
            })}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

