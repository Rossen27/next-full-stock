'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme(); // 獲取系統主題

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 獲取當前主題，若用戶未手動設置，則使用系統主題
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // 切換主題的函數
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button
      isIconOnly
      aria-label='Toggle Theme'
      onClick={toggleTheme}
      variant='light'
      radius="full"
    >
      {currentTheme === 'dark' ? (
        <MdOutlineLightMode className='text-yellow-500 w-5 h-5' />
      ) : (
        <MdOutlineNightlight className='text-blue-500 w-5 h-5' />
      )}
    </Button>
  );
}
