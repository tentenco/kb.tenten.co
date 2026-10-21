# Klaviyo：從電子報到自動化旅程

用訂閱與購物行為，安排歡迎信、棄單提醒和購後教學。

## 這是什麼

Klaviyo 是電商的 Email／SMS 自動化工具。它根據訂閱和購物行為，把合適的訊息送給合適的人。

適用情境：想做歡迎信、棄單提醒、購後教學，或讓電子報更有相關性時。

## 為什麼重要

- 不用每次手動群發；依訂閱、購物和售後狀態提供相關訊息。
- 好的停止條件能避免已購買仍收棄單信、已退訂仍被打擾。

## 一位訂閱者的訊息旅程

 | 概念 | 說明 |
 | --- | --- |
 | 同意訂閱 | 進入歡迎流程 |
 | 了解商品 | 收到相關內容 |
 | 完成購買 | 退出該次棄單提醒 |
 | 開始使用 | 接續購後教學 |

這是一個流程設計範例。每封行銷訊息都需符合訂閱狀態；退訂後停止行銷寄送。

## 掌握重點

- **先認識人、名單與流程**：Klaviyo 是 Email／SMS 與旅程平台；Profile 是人、List 是名單、Segment 是動態條件、Flow 是事件觸發流程、Campaign 是單次活動。
- **有 Email 不代表能寄行銷信**：有 Email／Profile 不等於同意行銷；Email 與 SMS 同意分開，訂單／服務通知另有用途。
- **從最有用的旅程開始**：先做 Welcome、Checkout 棄單、購後教學；再評估瀏覽提醒、回購／winback。大型耐用品優先教學、保養與配件。
- **事件發生不代表所有狀態相同**：原生 Checkout Started／Placed Order 與自訂表單事件分開；Placed Order 不保證已收款，付款／取消／退款狀態另查。
- **退訂必須在各系統生效**：不能假設退訂雙向同步：官方說明 Shopify 退訂不會自動退訂 Klaviyo，需明確處理來源與抑制。

### 名詞小抄

- **Profile／List**：Profile 是一個人的資料；List 是收納成員的名單。
- **Segment**：依條件自動變動的分群，例如最近購買的已訂閱顧客。
- **Flow／Campaign**：Flow 依條件自動觸發；Campaign 是指定時間的一次活動。

## 舉個例子

- 情境：顧客同意訂閱後收到歡迎信；後來完成購買，就改接購後教學。
- 重點：流程要隨顧客狀態改變，已購買的人應停止收到同一購物流程的棄單提醒。

## 從這一步開始

先選一條旅程，寫下觸發條件、要傳的訊息，以及何時停止。

## 開始前準備

- 既有寄送平台／Shopify 整合、名單來源、同意／退訂紀錄
- 寄件域名、品牌素材、流程目標與可收測試信的內部名單

## 依序完成

1. 盤點現有平台與 live／draft 流程，畫原生訂單和自訂表單資料流；先防重複串接／寄送。
2. 建立欄位與事件映射、寄件驗證、分群及觸發／等待／排除／停止規則；先做 Draft。
3. 測訂閱／未同意、購買後退出棄單、退訂抑制與重試去重；歷史匯入隔離 welcome 觸發。
4. 透過受支援 API／整合完成可做部分，交付測試收件證據、草稿與未支援能力；寄送依任務授權。

## 完成時檢查

- Profile／事件／訂閱狀態可分別驗證；內部測試信內容和連結正確。
- 買後停止提醒、退訂不再行銷；記錄兩端不同步的處置。
- 用點擊／有效訂單／退訂判讀；平台歸因營收不直接當增量營收。

## 容易忽略的事

- 啟用 Klaviyo 和 Shopify 兩套棄單流程。
- 匯入所有歷史客戶並視為可寄送，或以開信率作唯一成效。

## 需要決定的事

確認受眾用途、優惠、訊息內容與啟用時點；正式寄送依本次任務授權。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- [Klaviyo：Shopify 整合](https://help.klaviyo.com/hc/en-us/articles/115005080407)（2026-10-21）：Profile／訂單資料、訂閱選項、雙向同步和 onsite tracking 的基本邊界。
- [Klaviyo：Flow 入門](https://help.klaviyo.com/hc/en-us/articles/115002774932)（2026-10-21）：Flow 與觸發、Draft／Live、Welcome／棄單／購後／winback 的用途；本庫的具體排除與驗收為建議。
- [Klaviyo：Shopify 同步的事件資料](https://help.klaviyo.com/hc/en-us/articles/115005080447)（2026-10-21）：Checkout Started、Placed Order、取消／退款事件及與 Shopify 營收口徑的差異；Placed Order 不是收款保證。
- [Klaviyo：Shopify 訂閱同步的限制](https://help.klaviyo.com/hc/en-us/articles/115005080667)（2026-10-21）：訂閱與 Profile 分開；Shopify 退訂不自動退訂 Klaviyo、重新訂閱與刪除同步限制。
- [XTERRA 專案：程式與串接文件快照](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba)（2026-10-21）：Astro／Sanity／Shopify 邊界、自訂表單及 Klaviyo adapter／Draft 腳本、Judge.me 和開發環境上線限制；不證明 live 設定、寄信或正式上線。

## 相關知識

- lifecycle-crm
- commerce-service
- headless-commerce
- ecommerce-growth
