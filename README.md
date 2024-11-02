
# Next.js 完整專案

這是一個使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 快速生成的 [Next.js](https://nextjs.org) 項目，項目名稱為 **next-full-stock**。

## 項目簡介

該項目使用了 **React** 和 **Next.js**，並集成了多種工具和庫來支持開發和維護，如版本控制、自動化工具、界面庫等。

## 目錄

- [開始使用](#開始使用)
- [安裝指南](#安裝指南)
- [版本控制設定](#版本控制設定)
- [依賴套件說明](#依賴套件說明)
- [提交類型說明](#提交類型說明)
- [注意事項](#注意事項)

## 開始使用

首先，啟動開發伺服器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看結果。

您可以通過修改 `app/page.tsx` 來開始編輯頁面。修改後，頁面會自動更新。

## 安裝指南

1. 克隆項目倉庫：
   ```bash
   git clone https://github.com/username/next-full-stock.git
   cd next-full-stock
   ```
2. 安裝依賴：
   ```bash
   npm install
   ```
3. 運行開發伺服器：
   ```bash
   npm run dev
   ```

## 版本控制設定

本項目使用 **Standard Version** 進行語義化版本控制，並搭配 **Husky**、**Commitizen**、**Commitlint** 等工具來強化提交訊息和版本管理。

### 配置步驟

1. 安裝版本控制工具和依賴：
   ```bash
   npm install --save-dev standard-version husky commitizen @commitlint/{config-conventional,cli}
   ```
2. 在 `package.json` 中配置 Standard Version 和 Commitizen。
3. 初始化 Husky 並設置 Git hooks：
   ```bash
   npx husky install
   npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
   npx husky add .husky/pre-commit "npm run release && git add ."
   ```
4. 提交代碼並運行版本控制命令：
   ```bash
   npx git-cz  # 使用 Commitizen 進行規範化提交
   npm run release  # 使用 Standard Version 進行版本號升級和變更記錄生成
   git push --follow-tags origin master  # 推送變更和標籤
   ```

## 依賴套件說明

### 主要依賴

- **@nextui-org/react**：NextUI 是一個用於 React 的現代 UI 庫，支持設計優雅、功能豐富的界面元件。
- **dotenv**：一個用於加載環境變量的庫，通常用於在開發環境中存儲敏感信息（如 API 密鑰）。
- **framer-motion**：一個專注於動畫和過渡效果的庫，提供簡單而強大的動畫功能。
- **mongoose**：Node.js 的 MongoDB ODM（物件數據映射器），用於數據庫的模型構建和數據操作。
- **next**：Next.js 是一個基於 React 的全棧框架，用於構建服務端渲染和靜態網站生成的應用程序。
- **next-connect**：一個用於構建 Next.js API 路由的中間件框架，支持複雜的請求處理。
- **next-themes**：Next.js 的主題切換工具，支持在應用中輕鬆切換明暗模式。
- **react**：React 是一個用於構建用戶界面的 JavaScript 庫，是 Next.js 的基礎。
- **react-dom**：React 的 DOM 綁定，用於在瀏覽器中渲染 React 組件。
- **react-icons**：一個集成多種圖標庫的 React 專用圖標包。
- **react-star-ratings**：一個用於顯示星級評分的 React 組件。

### 開發依賴

- **@commitlint/cli** 和 **@commitlint/config-conventional**：用於檢查提交訊息是否符合規範的工具，與 Husky 搭配使用。
- **@types/node**、**@types/react** 和 **@types/react-dom**：提供 TypeScript 對 Node.js、React 和 React DOM 的類型支持。
- **commitizen**：一個用於幫助撰寫規範化提交訊息的工具。
- **husky**：用於設置 Git hooks 的工具，強制開發者在提交之前執行某些腳本（如檢查提交訊息）。
- **postcss**：一個用於轉換 CSS 的工具，通常用於編譯 Tailwind CSS 等工具。
- **standard-version**：用於根據提交訊息自動升級版本號和生成變更記錄的工具。
- **tailwindcss**：一個實用程式優先的 CSS 框架，用於快速構建現代界面。
- **typescript**：一個為 JavaScript 添加靜態類型的編程語言。

## 提交類型說明

- **feat**：新增功能，會觸發 **MINOR** 版本升級。
  - 例如：`feat: 新增用戶資料編輯功能`
- **fix**：Bug 修復，會觸發 **PATCH** 版本升級。
  - 例如：`fix: 修復登錄頁面閃退問題`
- **docs**：文檔變更，不會觸發版本升級。
  - 例如：`docs: 更新安裝步驟`
- **style**：代碼風格變更，不會觸發版本升級。
  - 例如：`style: 修正代碼縮排`
- **refactor**：代碼重構，可能會觸發 **PATCH** 升級。
  - 例如：`refactor: 重構用戶認證模塊`
- **perf**：性能優化，可能會觸發 **PATCH** 升級。
  - 例如：`perf: 優化查詢結果的緩存`

## 注意事項

- **分開提交**：每次提交應該只包含一種類型的變更，確保 Standard Version 能正確判斷版本號升級。
- **先提交新增功能，再提交修復**：確保版本號按照 **MINOR** 再 **PATCH** 的順序升級。
- **運行一次 `npm run release`**：會根據所有提交的類型更新版本號並生成變更記錄。