# 上線量測：GA4、GSC、Google Ads 與 Meta

先釐清要量什麼，再接好流量、行為與成交資料。

## 這是什麼

量測是把網站行為轉成可判斷的資料。GA4、GSC 和廣告平台各看不同環節，合起來才能理解成效。

適用情境：網站上線、活動開始，或團隊需要回答「流量從哪來、為什麼沒有成交」時。

## 為什麼重要

- 沒有可靠量測，上線後無法判斷流量與活動是否帶來成果。
- 重複 purchase、幣別或 consent 錯誤會直接影響廣告優化和商業判讀。

## 四個工具，四種問題

 | 概念 | 說明 |
 | --- | --- |
 | GSC | 搜尋結果有沒有被看見、點進來？ |
 | GA4 | 進站後做了什麼、在哪裡離開？ |
 | Google Ads | Google 廣告帶來什麼成果？ |
 | Meta | Facebook／Instagram 廣告帶來什麼成果？ |

先決定想回答的問題，再選工具與事件。各平台的歸因方式不同。

## 掌握重點

- **不同工具回答不同問題**：GA4 看行為；GSC 看 Google 搜尋與索引；Google Ads／Meta 看投放與轉換，各自有不同歸因。
- **追蹤碼與 SEO 標籤各有用途**：SEO title／description、OG tags 與 Meta Pixel 是不同東西；GTM 是可選部署工具，不是全部追蹤。
- **事件名稱和成交定義要一致**：電商事件要定義觸發點、transaction_id、items、value、currency；個資不能隨意送進分析。

### 名詞小抄

- **GA4**：Google Analytics 4，觀察進站後的行為與轉換。
- **GSC**：Google Search Console，觀察 Google 搜尋曝光、點擊與索引。
- **GTM**：Google Tag Manager，用來管理追蹤標籤的工具。

## 舉個例子

- 情境：GSC 顯示搜尋點擊增加，GA4 卻顯示訪客在商品頁離開。
- 重點：前者回答能否被找到，後者幫忙定位進站後的問題。

## 從這一步開始

先列出最想回答的三個商業問題，再決定需要哪些事件。

## 開始前準備

- 既有 GA4／GSC／GTM／廣告帳號 ID 與授權連線
- 事件、成交定義、來源系統、測試訂單及市場隱私要求

## 依序完成

1. 先盤點現有原生 App、theme、GTM 和 server-side 實作，畫唯一事件責任表。
2. GA4／GSC 與 Google Ads／Meta 都列標準盤點；依渠道計畫接線，未使用者註明理由及未來需求，不直接略過。
3. 測試 consent 接受／拒絕、購買、退款與重複載入；Meta Pixel／CAPI 以相同 event_name／event_id 去重。
4. 比對 DebugView／平台測試事件與實際訂單，保留 payload、時間及去重證據；說明歸因差異。

## 完成時檢查

- 一筆測試訂單只有一筆有效成交，金額幣別與訂單一致。
- 同意與拒絕行為符合核准規則；報表不暴露個資。

## 容易忽略的事

- 只確認 tag 有載入，沒測事件。
- 重建既有 property，導致歷史資料斷開。

## 需要決定的事

確認哪些行為代表成果，以及資料收集與同意規則。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- Erik 的知識庫需求與 XTERRA 電商擴充（2026-10-21）：AI-native 短文件、Tenten 服務範圍、XTERRA 美國站 Magento → Shopify、電商上線標準與給 Sherry 的 Shopify／Klaviyo 知識；不代表已取得 20 年私人筆記。
- [Google Analytics：電商事件](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)（2026-10-21）：電商事件、items、currency、transaction_id、購買與退款；Meta 去重及 Ads 配置需 Agent 執行時查現行平台文件。
- [Shopify：顧客隱私設定](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings)（2026-10-21）：隱私設定、同意、opt-out 和資料用途；不構成法律結論。
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify)（2026-10-21）：商品、市場、整合與量測的 Shopify 交付脈絡；不證明個別商店設定。
- [Meta：Pixel 與 CAPI 去重](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events)（2026-10-21）：同一事件的名稱與 eventID／event_id 配對及去重驗證；不代表已檢查客戶帳號。
- [Shopify：Meta 資料分享](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)（2026-10-21）：Pixel／CAPI、分享層級、標準事件及資料用途；自訂前台覆蓋仍需另驗。

## 相關知識

- ga4-commerce
- meta-tracking
- google-commerce
- ecommerce-launch
