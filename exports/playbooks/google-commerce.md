# Google Ads 與商品 Feed：先接對再投放

把轉換、商品資料與落地頁對齊，才有可靠的搜尋與購物廣告。

## 這是什麼

Google Ads 負責廣告投放，Merchant Center 提供商品目錄。商品資料與購買回報正確，廣告才有可用的基礎。

適用情境：準備 Google 購物廣告、商品被拒登，或購買轉換重複計算時。

## 為什麼重要

- 缺轉換會讓出價缺乏訊號；錯誤 Feed 會造成商品拒登或錯價。
- 把接線和投放分開驗收，能避免有花費卻無法判讀成效。

## 掌握重點

- **先分清每個平台的工作**：Ads 管投放／轉換；Merchant Center 管商品資料與資格；GA4 分析行為，GSC 看搜尋索引。
- **避免重複主要購買轉換**：同一購買避免原生 Ads 與 GA4 匯入同時作主要出價轉換；觀察用來源需檢查目標納入規則。
- **商品目錄要與網站一致**：Feed 對齊穩定 id、品牌／GTIN 等適用識別碼、價格／幣別、庫存、圖片、正式落地頁與運退規則。
- **進階比對需要正確資料用途**：Enhanced conversions 用核准的第一方資料補強比對；雜湊不是免除同意或資料責任。
- **官方整合仍要驗證完整旅程**：Shopify Google & YouTube 是可優先評估的官方整合；headless 的結帳／域名／商品連結仍要實測。

### 名詞小抄

- **Feed**：提供給平台的結構化商品目錄。
- **GTIN**：商品的全球貿易識別碼，依品項與平台規則提供。
- **主要轉換**：廣告出價主要使用的成果訊號，例如購買。

## 舉個例子

- 情境：商品目錄寫有庫存，落地頁卻顯示售完，可能影響刊登資格。
- 重點：商品目錄、實際頁面和結帳資訊要對得起來。

## 從這一步開始

確認 Ads、Merchant Center 和 GA4 的現有帳號與連結關係。

## 開始前準備

- 既有 Ads／Merchant Center／GA4 帳號與目標市場
- 商品識別碼、運費退貨政策、主要轉換定義及授權範圍

## 依序完成

1. 盤點既有連結與轉換，產出唯一主要購買來源、value／currency／transaction_id 契約。
2. 透過適用整合／API 同步商品並查診斷；不可捏造 GTIN 或把開發網址送到正式 Feed。
3. 測試訂單對帳、重載去重、跨域／歸因及 consent；Enhanced conversions 依現行能力驗證。
4. 交付商品資格、拒登原因與修正清單；預算、素材、活動啟用另依既有投放授權。

## 完成時檢查

- 代表商品價格／庫存／網址與落地頁一致，拒登項有原因及處置。
- 一次購買只產生預期的主要出價訊號；接線完成不宣稱已產生成效。

## 容易忽略的事

- 同一筆訂單在多個主要 conversion actions 重複計算。
- Feed 指向 Shopify theme，但實際買家應前往自訂前台。

## 需要決定的事

確認廣告目標、轉換價值與預算；資料接通後再依授權啟用投放。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- [Google Merchant Center：商品資料規格](https://support.google.com/merchants/answer/7052112?hl=en)（2026-10-21）：商品識別、價格、幣別、庫存、連結與資料一致性；不保證審核通過。
- [Google Ads：Enhanced conversions](https://support.google.com/google-ads/answer/9888656?hl=en)（2026-10-21）：第一方資料比對、雜湊與轉換補強；須遵守資料用途，不是免 consent 的保證。
- [Shopify：Google & YouTube 渠道](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/google)（2026-10-21）：官方渠道及連接、商品同步文件入口；不證明任何商店的帳號資格或轉換設定。
- [Google Analytics：電商事件](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)（2026-10-21）：電商事件、items、currency、transaction_id、購買與退款；Meta 去重及 Ads 配置需 Agent 執行時查現行平台文件。

## 相關知識

- ga4-commerce
- paid-media
- headless-commerce
- ecommerce-launch
