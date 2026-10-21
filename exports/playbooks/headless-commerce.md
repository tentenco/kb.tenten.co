# Headless 電商：串接與驗收邊界

自訂前台、Shopify 結帳與外部工具是三段系統，需逐段接通。

## 這是什麼

Headless 把商店前台與交易系統拆開：前台決定畫面與互動，Shopify 處理商品、購物車和結帳。兩邊需要明確串接。

適用情境：遇到 Astro 等客製前台，或 Shopify App 安裝後沒有出現在網站時。

## 為什麼重要

- 前台彈性增加，但 theme App、追蹤與 consent 不一定自動覆蓋自訂頁面。
- 知道資料與路由由誰處理，Agent 才不會把設定寫在不生效的地方。

## XTERRA 的系統分工

 | 概念 | 說明 |
 | --- | --- |
 | Astro 前台 | 顧客瀏覽、選購與互動 |
 | Sanity | 行銷頁的文字與圖片 |
 | Shopify | 商品、購物車、結帳與訂單 |

前台從不同來源取得資料。App、事件和表單需確認覆蓋哪一段；依 repo 快照整理。

## 掌握重點

- **先認清 XTERRA 的架構**：XTERRA snapshot：Astro 前台、Sanity 行銷內容、Shopify 商品／購物車及 hosted checkout；這不是一般 theme 店。
- **每段旅程分別驗證**：原生結帳／訂單整合、自訂瀏覽事件／表單與 Email 流程分別驗證，不能用一段成功代表全部。
- **轉址要設在真正接收網址的地方**：SEO／301 在實際接收舊 URL 的域名與路由層實作；只匯入 Shopify redirects 不保證 Astro 生效。
- **同意設定也要跨系統接通**：自訂 consent 選擇不保證已同步 Shopify／分析／行銷；需測跨域、撤回與拒絕路徑。
- **文件工具與帳號權限不同**：Shopify Dev MCP 提供文件／驗證，不等於商店讀寫權限；每個 API 的 scopes 與帳號需核對。

### 名詞小抄

- **前台 Storefront**：顧客看到並操作的網站畫面。
- **Hosted checkout**：由 Shopify 提供與管理的結帳頁面。
- **API／scope**：API 提供系統操作方式；scope 限定連線能讀寫什麼。

## 舉個例子

- 情境：Shopify 的追蹤已設定，但客製商品頁沒有送出瀏覽與加購事件。
- 重點：前台、結帳與外部工具要分段確認，不能假設自動接通。

## 從這一步開始

先畫出前台、內容管理、Shopify 與外部工具的分工。

## 開始前準備

- repo／commit、前台／結帳域名與部署環境
- 資料來源、整合／事件責任、App 支援及現有安全連線

## 依序完成

1. 畫資料／事件／域名與責任圖，查每個 App 的 headless API／webhook／限制。
2. 分段驗證商品更新、加購／折扣、結帳返回、訂單事件、表單到 CRM 和重試。
3. 在真實路由層抽測舊 URL／301；核對正式 canonical、索引開關與商品 Feed 網址。
4. 核對現況再改：XTERRA README 與 Klaviyo 專文有差異；以程式及帳號收據釐清，不重裝或啟用草稿。

## 完成時檢查

- 三段資料與事件可追溯且無重複；未知 hosted 設定列成明確缺口。
- 正式／測試域名、資料責任與故障處理可交接；不能用 Git 推送成功當顧客已上線。

## 容易忽略的事

- 把 theme 教學直接套到自訂前台。
- 拿靜態文件的串接描述當作 live flow 或正式訂單已驗證。

## 需要決定的事

確認系統分工與正式切換範圍，避免同一項功能由多邊重複處理。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- [XTERRA 專案：程式與串接文件快照](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba)（2026-10-21）：Astro／Sanity／Shopify 邊界、自訂表單及 Klaviyo adapter／Draft 腳本、Judge.me 和開發環境上線限制；不證明 live 設定、寄信或正式上線。
- [Shopify：Web Pixels API](https://shopify.dev/docs/api/web-pixels-api)（2026-10-21）：App／custom pixel sandbox、customer events 與隱私 API 邊界；不保證自訂 Astro 前台自動涵蓋。
- [Shopify：搜尋、篩選與 Headless](https://help.shopify.com/en/manual/online-store/storefront-search)（2026-10-21）：Search & Discovery 的搜尋／篩選／推薦用途及 custom storefront 透過 Storefront API 使用。
- [Shopify：URL redirect 的生效限制](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)（2026-10-21）：原生 redirect 的適用路由與限制；自訂前台需檢查實際處理舊 URL 的路由層。

## 相關知識

- ecommerce-launch
- migration
- measurement
- klaviyo
