This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 版本控制設定

設置指南

1. 初始化項目

如果尚未初始化 React + Next.js + TypeScript 項目，可以使用以下命令：

npx create-next-app@latest my-app --typescript
cd my-app

2. 安裝 Standard Version 及相關工具

運行以下命令來安裝所需的開發依賴：

npm install --save-dev standard-version husky commitizen @commitlint/{config-conventional,cli}

這些工具的作用如下：

	•	Standard Version：用於自動化版本控制。
	•	Husky：設置 Git hooks，自動運行版本更新腳本。
	•	Commitizen：規範化提交訊息。
	•	Commitlint：檢查提交訊息是否符合規範。

3. 配置 Standard Version

在 package.json 中添加以下腳本：

"scripts": {
  "release": "standard-version"
}

這將添加一個新的 release 腳本來自動更新版本號和生成變更記錄。

4. 設置 Commitizen

在 package.json 中配置 Commitizen：

"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}

這樣，在使用 npx git-cz 時，會引導開發者輸入規範化的提交訊息。

5. 設置 Husky

初始化 Husky 並添加 Git hooks：

npx husky install
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
npx husky add .husky/pre-commit "npm run release && git add ."

這樣，每次提交時，會檢查提交訊息，並在提交前運行 release 腳本來更新版本號。

6. 配置 Commitlint

在項目根目錄中創建 commitlint.config.js 文件，配置提交訊息規範：

// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional']
};

這將使 Commitlint 驗證提交訊息是否符合語義化規範。

7. 提交代碼並更新版本

1. 撰寫代碼

完成新增功能和 Bug 修復的代碼修改。

2. 分開提交

	•	提交新增功能：

npx git-cz

類型選擇 feat，提交訊息例如：

feat: 新增用戶資料編輯功能


	•	提交 Bug 修復：

npx git-cz

類型選擇 fix，提交訊息例如：

fix: 修復用戶資料保存時的錯誤



3. 運行 Standard Version 來更新版本號

完成所有提交後，運行：

npm run release

4. 推送變更和版本標籤

手動將代碼和標籤推送到遠端倉庫：

git push --follow-tags origin main

提交類型說明

1. feat: A new feature

	•	用於標識 新增功能，會觸發 MINOR 版本升級。
	•	例如：feat: 新增用戶資料編輯功能

2. fix: A bug fix

	•	用於標識 Bug 修復，會觸發 PATCH 版本升級。
	•	例如：fix: 修復登錄頁面閃退問題

3. docs: Documentation only changes

	•	用於標識 僅修改文檔，不會觸發版本升級。
	•	例如：docs: 更新安裝步驟

4. style: Changes that do not affect the meaning of the code

	•	用於標識 代碼風格變更，不涉及業務邏輯的修改，不會觸發版本升級。
	•	例如：style: 修正代碼縮排

5. refactor: A code change that neither fixes a bug nor adds a feature

	•	用於標識 重構代碼，可能會觸發 PATCH 升級。
	•	例如：refactor: 重構用戶認證模塊

6. perf: A code change that improves performance

	•	用於標識 性能優化，可能會觸發 PATCH 升級。
	•	例如：perf: 優化查詢結果的緩存

注意事項

	•	分開提交：每個提交應該只包含一種類型的變更，以便 Standard Version 正確判斷版本號的升級類型。
	•	先提交新增，再提交修復：這樣可以確保版本號按照 MINOR 再 PATCH 的順序升級。
	•	運行一次 npm run release：Standard Version 會根據所有提交的類型一次性更新版本號和生成變更記錄。

這些選項的意義

這些選項能夠讓版本控制工具（如 Standard Version）根據提交的類型自動升級版本號，保持項目版本的一致性和可追踪性，有助於生成有意義的變更記錄（CHANGELOG），讓開發者快速了解每個版本的變更內容。

這樣的 README.md 文件可以幫助開發者快速了解如何在項目中使用 Standard Version 來進行語義化版本控制。