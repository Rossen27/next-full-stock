/**
 * GlobalProvider 是一個用來包裹其他子元件的高階元件（HOC），
 * 它可以提供一個全局的上下文環境，讓被包裹的子元件能夠共享某些全局的狀態或功能。
 * 這個元件本身不執行任何複雜的邏輯，只是簡單地渲染其包裹的子元件。
 *
 * @param {Object} props - 傳遞給元件的參數物件
 * @param {React.ReactNode} props.children - 需要被包裹的子元件，可以是一個或多個元件。
 *
 * @returns {JSX.Element} - 返回一個 JSX 元素，包含所有被包裹的子元件。
 *
 * @example
 * // 使用 GlobalProvider 包裹應用程式中的其他元件
 * <GlobalProvider>
 *   <App />
 * </GlobalProvider>
 */
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme="system">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  ); // 將子元件渲染並顯示在頁面上
}
