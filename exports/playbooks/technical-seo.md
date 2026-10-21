# Technical SEO 與 301 Redirect

讓搜尋引擎找到正確頁面，並保留改版前累積的搜尋資產。

## 這是什麼

技術 SEO 讓搜尋引擎能找到、讀懂並收錄正確頁面。改版時的 301 轉址，則把舊入口接到新位置。

適用情境：網站新上線、網址變更、搜尋流量下降，或重要頁面沒有被收錄時。

## 為什麼重要

- 搜尋引擎看不到或選錯 URL，再好的內容也無法穩定帶來自然流量。
- 搬站有正確對應與監測，能降低遺漏與排錯成本；排名仍可能短期波動。

## 掌握重點

- **抓取、索引與主要版本不同**：robots 控制抓取；noindex 控制索引，需允許爬蟲讀到；canonical 提示主要版本。
- **提供清楚的網站與語言結構**：sitemap 放標準且可索引 URL；多語市場檢查 hreflang、自我 canonical 與互相對應。
- **搬家時保留正確轉址**：301／308 用於永久搬移；保留最相關一對一映射，Google 建議 redirect 至少維持一年，能長留則長留。

### 名詞小抄

- **索引 Index**：搜尋引擎收錄並可用來產生搜尋結果的頁面資料。
- **Canonical**：告訴搜尋引擎多個相似網址中，哪個是建議的主要版本。
- **301 Redirect**：把舊網址永久轉向新網址。

## 舉個例子

- 情境：正式站沿用預覽站的 noindex，搜尋引擎就不會把頁面納入索引。
- 重點：上線時要確認搜尋限制已在正確環境解除。

## 從這一步開始

先檢查首頁和一個重要商品頁是否可被抓取與索引。

## 開始前準備

- 正式與舊站 URL、GSC／流量／站內連結清單
- 要索引的範圍、市場語言、平台與 DNS／CDN 限制

## 依序完成

1. 抓取 status、索引指令、canonical、內鏈、sitemap 與結構化資料。
2. 建立舊新 URL 對照，驗證一跳永久導向、目的頁 200、無循環。
3. 修內鏈、metadata 與 sitemap；在授權 GSC property 交 sitemap 並檢查代表 URL。
4. 域名搬遷才評估 Change of Address；保留切換前後索引、流量和 404 觀察。

## 完成時檢查

- 重要頁能抓取與索引；staging 有存取保護，不只依賴 robots。
- redirect、canonical、hreflang 與 sitemap 指向一致，監測附日期。

## 容易忽略的事

- 把所有 404 導到首頁，造成 soft 404。
- 以為提交 sitemap 就保證收錄或排名。

## 需要決定的事

確認哪些內容保留、合併或淘汰，再決定網址與轉址安排。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- [Google Search Central：網站遷移](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)（2026-10-21）：URL 盤點、永久 redirect、canonical、切換、GSC 及至少一年的 redirect 保留建議。
- [Google Search Central：AI 搜尋功能](https://developers.google.com/search/docs/appearance/ai-features)（2026-10-21）：Google AI 搜尋的索引資格、SEO 基礎與不需特殊 schema／AI 文字檔；不能推論其他 AI 平台。

## 相關知識

- migration
- content-seo
- geo
