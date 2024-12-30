import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no saved theme, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update data-theme attribute
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Update CSS variables
    if (isDark) {
      document.documentElement.style.setProperty('--background-primary', '#0f1624');
      document.documentElement.style.setProperty('--background-secondary', '#1a1f2e');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.8)');
      document.documentElement.style.setProperty('--glass', 'rgba(15, 22, 36, 0.95)');
    } else {
      document.documentElement.style.setProperty('--background-primary', '#ffffff');
      document.documentElement.style.setProperty('--background-secondary', '#f8f9fa');
      document.documentElement.style.setProperty('--text-primary', '#2c3e50');
      document.documentElement.style.setProperty('--text-secondary', '#666666');
      document.documentElement.style.setProperty('--glass', 'rgba(255, 255, 255, 0.8)');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      console.log('Toggling theme:', !prev ? 'dark' : 'light');
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 