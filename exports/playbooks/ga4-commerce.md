# GA4 電商：事件與轉換率怎麼算

讓商品瀏覽、加購、結帳與成交形成可對帳的漏斗。

## 這是什麼

GA4 用事件記錄顧客在網站做了什麼。把瀏覽、加購、結帳和購買連起來，就能看到電商漏斗。

適用情境：需要檢查購物流失、計算轉換率，或驗證網站是否正確記錄成交時。

## 為什麼重要

- 知道哪一步流失，才知道應修商品頁、購物車還是結帳。
- 分母、金額與事件不一致，會讓團隊做出相反的成效判斷。

## 把購物旅程連起來

 | 概念 | 說明 |
 | --- | --- |
 | 看商品 | view_item |
 | 加入購物車 | add_to_cart |
 | 開始結帳 | begin_checkout |
 | 完成購買 | purchase |

每一段都能觀察流失。示意只列主要事件；付款失敗不算購買。

## 掌握重點

- **記錄購物的關鍵動作**：核心事件：view_item_list／select_item、view_item、add_to_cart、begin_checkout、purchase、refund；依實際旅程補 shipping／payment。
- **每筆事件帶上對帳資料**：事件契約記觸發點、item_id、items、value、currency；purchase／refund 用穩定 transaction_id 對回訂單。
- **先說清楚轉換率分母**：購買 session 轉換率＝含 purchase 的 sessions／同範圍 sessions；訂單數／sessions 與所有 key event rate 是不同指標。
- **比較時使用相同範圍**：例如 10,000 sessions 中 100 個完成購買＝1%；先對齊時區、裝置、市場、期間與 consent 覆蓋。
- **不同平台有不同觀察口徑**：GA4、Shopify、Ads 各有歸因和追蹤限制；訂單帳務為交易基準，不要求報表數字完全一樣。

### 名詞小抄

- **事件 Event**：一次可記錄的動作，例如加購或購買。
- **造訪 Session**：同一次使用期間的一組網站互動；一位使用者可以有多次造訪。
- **交易編號 transaction_id**：用來辨認同一筆訂單，避免重複計算。

## 舉個例子

- 情境：10,000 次造訪中，有 100 次造訪完成購買，購買造訪轉換率就是 1%。
- 重點：要先說清楚分母是造訪、使用者還是其他基準，數字才可比較。

## 從這一步開始

先和團隊確認「購買」與「轉換率」的定義，再檢查事件。

## 開始前準備

- 既有 property／data stream、事件來源與測試環境
- 商品／變體 ID 對照、金額含稅運費規則與去識別測試訂單

## 依序完成

1. 建立事件／參數／唯一發送者對照，先查原生整合，補足自訂前台到 hosted checkout 的缺口。
2. 驗證跨域與來源延續，避免把支付商或自己店鋪誤當新來源；分析不得傳 Email 等個資。
3. 在 DebugView／網路請求與後台驗證事件順序、金額、幣別；測重載、付款失敗、退款與 consent。
4. 交付漏斗與指標字典，註明分子分母、排除測試流量及差異原因。

## 完成時檢查

- 同一訂單重載不多記 purchase；退款能對回原交易。
- 報表可按渠道／裝置看漏斗，並能重算定義好的購買轉換率。

## 容易忽略的事

- 按結帳按鈕就送 purchase，或把付款失敗算成交。
- 直接用訂單數除使用者，卻稱為 session 轉換率。

## 需要決定的事

確認怎麼算成交、營收與轉換率，讓團隊使用相同口徑。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- [Google Analytics：電商事件](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)（2026-10-21）：電商事件、items、currency、transaction_id、購買與退款；Meta 去重及 Ads 配置需 Agent 執行時查現行平台文件。
- [Shopify：Web Pixels API](https://shopify.dev/docs/api/web-pixels-api)（2026-10-21）：App／custom pixel sandbox、customer events 與隱私 API 邊界；不保證自訂 Astro 前台自動涵蓋。
- [XTERRA 專案：程式與串接文件快照](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba)（2026-10-21）：Astro／Sanity／Shopify 邊界、自訂表單及 Klaviyo adapter／Draft 腳本、Judge.me 和開發環境上線限制；不證明 live 設定、寄信或正式上線。

## 相關知識

- measurement
- meta-tracking
- google-commerce
- ecommerce-growth
