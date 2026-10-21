# Magento → Shopify：網站搬家

保住商品、交易、搜尋與量測；搬站要有對照表、演練與回復條件。

## 這是什麼

搬站是把既有網站的商品、內容、客戶關係和搜尋入口移到新系統，並讓使用者能繼續完成原本的事。

適用情境：從 Magento 換到 Shopify，或更換平台與網址結構時。

## 為什麼重要

- 舊 URL、搜尋流量與交易資料都是資產；遺漏會造成流量、營收及營運中斷。
- 先演練、再增量同步與切換，能把風險留在可回復的階段。

## 舊的搜尋入口如何接續

 | 概念 | 說明 |
 | --- | --- |
 | 舊商品網址 | 搜尋結果或既有連結 |
 | 301 轉址 | 在實際路由層處理 |
 | 對應新商品頁 | 內容相關、可正常開啟 |

有對應頁才導向；沒有合適替代內容時，依情況保留 404／410，不一律送到首頁。

## 掌握重點

- **先知道有哪些資產**：先盤點 URL、流量頁、商品／變體、客戶、訂單、媒體、折扣與系統整合。
- **舊入口要通往正確新頁**：舊 URL 永久導向最相關新頁；無對應回 404／410。Headless 在實際接收域名的路由層驗證，不能只匯入 Shopify。
- **帳號和歷史資料要個別驗證**：客戶登入與密碼不能假定可直接搬；歷史訂單、禮卡和通知副作用需逐項驗證。

## 舉個例子

- 情境：舊搜尋結果仍指向某個商品網址，新站卻找不到那一頁。
- 重點：建立舊網址到新網址的對照與轉址，才能接住既有流量。

## 從這一步開始

先列出要搬的資料，以及最有流量或營收價值的舊網址。

## 開始前準備

- 舊站與目標店網址、可用匯出資料、流量及網址清單
- 要搬與不搬的資料、SKU 與 ID 對照、系統寫入責任
- 切換時間、增量資料、決策人與回復條件

## 依序完成

1. 輸出資料映射、URL／301 清單、功能落差與整合盤點。
2. 在測試環境 dry run，核對 SKU、幣別、數量、關聯與媒體；隔離通知和追蹤副作用。
3. 準備資料凍結／增量同步、DNS、GSC、事件去重及切換計畫。
4. 依既有授權執行；記錄最後同步、切換驗證與回復界線，切換後持續監測。

## 完成時檢查

- 高價值舊 URL 一跳到正確且可索引的新頁；無 loop／chain。
- 商品與訂單樣本對帳、購物主流程、GA4／廣告事件及 consent 驗證有證據。
- 新訂單出現後的回復包含資料對帳，不能只把 DNS 切回去。

## 容易忽略的事

- 同時重做定位、URL 與平台，卻沒有基準。
- 只搬商品，忘了 GSC、追蹤、客服及帳號啟用。

## 需要決定的事

確認要搬的資料、可接受的停機窗口，以及什麼情況要回復舊系統。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- Erik 的知識庫需求與 XTERRA 電商擴充（2026-10-21）：AI-native 短文件、Tenten 服務範圍、XTERRA 美國站 Magento → Shopify、電商上線標準與給 Sherry 的 Shopify／Klaviyo 知識；不代表已取得 20 年私人筆記。
- [Google Search Central：網站遷移](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)（2026-10-21）：URL 盤點、永久 redirect、canonical、切換、GSC 及至少一年的 redirect 保留建議。
- [Shopify：搬遷到 Shopify](https://help.shopify.com/en/manual/migrating-to-shopify)（2026-10-21）：資料搬遷、匯入順序、商品驗證、配送、稅務、支付與測試訂單；API 能力和方案需當次驗證。
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify)（2026-10-21）：商品、市場、整合與量測的 Shopify 交付脈絡；不證明個別商店設定。
- [XTERRA 專案：程式與串接文件快照](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba)（2026-10-21）：Astro／Sanity／Shopify 邊界、自訂表單及 Klaviyo adapter／Draft 腳本、Judge.me 和開發環境上線限制；不證明 live 設定、寄信或正式上線。
- [Shopify：URL redirect 的生效限制](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)（2026-10-21）：原生 redirect 的適用路由與限制；自訂前台需檢查實際處理舊 URL 的路由層。

## 相關知識

- headless-commerce
- ecommerce-launch
- technical-seo
- measurement
