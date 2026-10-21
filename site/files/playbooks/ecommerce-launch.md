# 電商上線：標準交付與驗收

每次開店都帶這份清單，逐項交付交易、搜尋、量測與營運證據。

## 這是什麼

電商上線是一份跨部門的交付：能正確交易、被找到、量到成效，也有人處理出貨和售後。

適用情境：商店準備正式開放、搬站切換，或需要統一上線驗收標準時。

## 為什麼重要

- 能下單只是起點；漏掉追蹤、配送或通知，上線後仍會損失收入。
- 固定交付基線讓每個專案不用重新發明檢查清單。

## 電商上線的四個面向

 | 概念 | 說明 |
 | --- | --- |
 | 交易 | 商品、付款、配送與退款 |
 | 搜尋 | 網址、索引與舊站轉址 |
 | 量測 | 購物事件與廣告回報 |
 | 營運 | 通知、客服與維護責任 |

四個面向都要有狀態與證據，才能做上線決定。

## 掌握重點

- **交易能正確完成**：交易必查：商品／庫存、付款／失敗／退款、折扣、配送／稅額、政策與訂單通知。
- **搜尋資產能接續**：搜尋必查：舊 URL／301、canonical、title／description／OG、結構化資料、robots／sitemap 與 GSC。
- **成效有可靠紀錄**：量測預設列 GA4 電商漏斗、Google Ads 轉換、Meta Pixel／CAPI、商品 Feed、consent 與去重。
- **上線後有人接手**：營運必查：Email 名單／自動化、客服／保固入口、DNS／TLS、效能／無障礙、告警與回復。
- **每項都有明確狀態**：每項填完成／阻塞／有理由不適用；尚未投放的渠道保留接線計畫，不自動花廣告費。

## 舉個例子

- 情境：網站可以下單，但廣告購買事件漏記，客服也收不到詢問。
- 重點：每個環節都要有完成證據，才能判斷是否準備好上線。

## 從這一步開始

先建立交易、搜尋、量測、營運四欄清單，標出目前缺口。

## 開始前準備

- 正式與測試域名、版本、店鋪／平台既有連線和授權範圍
- 市場、交易規則、渠道計畫、測試單及上線決策人

## 依序完成

1. 輸出交付矩陣：項目、適用性、責任、狀態、證據、缺口與下一步；不可留空略過。
2. 先沿用既有整合，分清自訂前台、Shopify 結帳與伺服器的事件責任。
3. 以代表商品／地址跑接受與拒絕 consent、成功／失敗付款、退款與重試；對帳訂單及事件。
4. 依既有上線授權切換；驗證正式域名、301、索引、通知與觀察表。

## 完成時檢查

- 交易、SEO、量測、觸達與維運各有可重查的證據；阻塞項已有 go／no-go 決定。
- 正式訂單與有效 purchase 一對一；測試資料、通知和廣告受眾有隔離。

## 容易忽略的事

- 把 App 安裝成功或前台漂亮當成上線完成。
- 把 Klaviyo、GTM 或付費 App 視為每家店都必裝，卻沒確認用途和現有系統。

## 需要決定的事

確認目標市場、營運政策與廣告渠道；未完成項目是否影響上線。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- Erik 的知識庫需求與 XTERRA 電商擴充（2026-10-21）：AI-native 短文件、Tenten 服務範圍、XTERRA 美國站 Magento → Shopify、電商上線標準與給 Sherry 的 Shopify／Klaviyo 知識；不代表已取得 20 年私人筆記。
- [Shopify：搬遷到 Shopify](https://help.shopify.com/en/manual/migrating-to-shopify)（2026-10-21）：資料搬遷、匯入順序、商品驗證、配送、稅務、支付與測試訂單；API 能力和方案需當次驗證。
- [Google Analytics：電商事件](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)（2026-10-21）：電商事件、items、currency、transaction_id、購買與退款；Meta 去重及 Ads 配置需 Agent 執行時查現行平台文件。
- [Shopify：Meta 資料分享](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)（2026-10-21）：Pixel／CAPI、分享層級、標準事件及資料用途；自訂前台覆蓋仍需另驗。
- [XTERRA 專案：程式與串接文件快照](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba)（2026-10-21）：Astro／Sanity／Shopify 邊界、自訂表單及 Klaviyo adapter／Draft 腳本、Judge.me 和開發環境上線限制；不證明 live 設定、寄信或正式上線。

## 相關知識

- shopify-foundation
- ga4-commerce
- headless-commerce
- launch
