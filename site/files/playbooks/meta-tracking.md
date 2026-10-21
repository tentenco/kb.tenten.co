# Meta：Pixel、CAPI 與成交去重

把廣告接到真實購買，避免瀏覽器與伺服器把一單算兩次。

## 這是什麼

Meta 追蹤把網站購買回傳給 Facebook／Instagram 廣告系統。Pixel 從瀏覽器回傳，CAPI 從伺服器回傳。

適用情境：準備 Meta 廣告，或廣告報表的購買數看起來不合理時。

## 為什麼重要

- 可用的購買事件能幫廣告學習與評估；錯誤訊號會浪費預算。
- 瀏覽器與伺服器互補，但重複購買會把 ROAS 虛增。

## 兩個來源，同一筆購買

 | 概念 | 說明 |
 | --- | --- |
 | 瀏覽器 Pixel | 事件名稱＋eventID |
 | 伺服器 CAPI | 相同名稱＋event_id |
 | Meta 去重 | 辨認為同一筆購買 |

兩路使用相同事件識別值；是否正確去重仍要在平台測試。

## 掌握重點

- **兩種回傳方式互相補足**：Pixel 收瀏覽器事件；CAPI 收伺服器事件。它們不同於 SEO meta／OG tags。
- **先接好主要購物動作**：核心路徑含 ViewContent、AddToCart、InitiateCheckout、Purchase；value／currency 和商品 ID 要一致。
- **同一事件要能互相辨認**：同一事件送兩路時，對齊 event_name；瀏覽器 eventID 對上伺服器 event_id，同一次動作用同一穩定值。
- **客製前台要額外確認**：Shopify 官方 Meta 渠道可處理部分事件；headless 自訂前台的覆蓋需另外確認。
- **資料分享遵守同意範圍**：CAPI 不等於免 consent；分享層級、顧客資料與用途必須符合核准規則。

### 名詞小抄

- **Pixel**：在瀏覽器內收集並回傳事件的程式。
- **CAPI**：Conversions API，由伺服器回傳事件的介面。
- **去重 Deduplication**：辨認多份回報其實是同一次動作，只計算一次。

## 舉個例子

- 情境：同一筆購買由 Pixel 和 CAPI 各送一次，卻沒有共用識別碼。
- 重點：把兩份回報認成同一事件，才能避免一單算兩次。

## 從這一步開始

查現有 Pixel、CAPI 與官方整合，標出每個事件由誰發送。

## 開始前準備

- 既有 Business／廣告帳號、Pixel／dataset、目錄及連線權限
- 事件責任表、商品 ID 對照、同意規則和測試訂單

## 依序完成

1. 盤點官方渠道、GTM、程式與 server 實作，只保留明確的事件發送責任。
2. 依現行 API／原生整合完成授權內配置；商品事件 content_ids 對齊廣告目錄。
3. 用 Test Events／診斷驗證購買、拒絕同意、重載與重試；查 browser／server 配對及去重。
4. 交付去識別 payload、時間、事件 ID 配對與金額對帳，列出尚未覆蓋的旅程。

## 完成時檢查

- 一筆測試購買在平台形成一筆有效轉換；兩路事件有配對證據。
- 拒絕分享時的行為符合規則，事件中沒有額外洩漏客戶資料。

## 容易忽略的事

- 官方 App 和手動 Pixel 同時重複發送。
- 每次重試產生新 event_id，或只看 Pixel Helper 亮綠燈。

## 需要決定的事

確認資料分享與渠道用途；追蹤接通和啟用廣告是兩個分開的決定。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- [Shopify：Meta 資料分享](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)（2026-10-21）：Pixel／CAPI、分享層級、標準事件及資料用途；自訂前台覆蓋仍需另驗。
- [Meta：Pixel 與 CAPI 去重](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events)（2026-10-21）：同一事件的名稱與 eventID／event_id 配對及去重驗證；不代表已檢查客戶帳號。
- [Shopify：顧客隱私設定](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings)（2026-10-21）：隱私設定、同意、opt-out 和資料用途；不構成法律結論。

## 相關知識

- measurement
- ga4-commerce
- headless-commerce
- paid-media
