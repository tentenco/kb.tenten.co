# 網站上線：一次看完必要條件

上線前一次確認 SEO、交易、追蹤、DNS 與回復方案。

## 這是什麼

網站上線是把通過驗收的版本切到正式環境，並確認使用者、搜尋引擎與營運流程都能正常接續。

適用情境：準備發布新站、改版切換，或需要決定能否正式上線時。

## 為什麼重要

- 上線是一次系統切換，漏一個環節就可能造成流量、交易或資料損失。
- 有明確 go／no-go 與回復條件，團隊才能快速決定。

## 掌握重點

- **上線要看整套系統**：至少涵蓋功能、內容、SEO、量測、隱私、DNS／TLS、效能、備份和責任交接。
- **既有搜尋與量測要接續**：GA4／GSC 先盤點沿用；Google Ads／Meta 依實際渠道啟用；title、description、OG tags 分開查。
- **正式環境需要再次驗證**：預覽站不是正式站；production 的索引、表單、付款與追蹤需再驗證。

## 舉個例子

- 情境：預覽站表單正常，上線後正式環境卻缺少接收設定。
- 重點：上線前測試，切換後還要在正式網址再驗證。

## 從這一步開始

把必要項目列成通過、未通過與待決定三種狀態。

## 開始前準備

- 核准版本、網域與上線窗口、決策及維運聯絡人
- 驗收、301、事件、DNS、備份與回復計畫

## 依序完成

1. 整理 go／no-go 表，先驗證 staging 主流程、SEO、量測及必要政策。
2. 盤點正式 DNS／TLS／郵件、資料同步、環境變數與監控，準備可回復版本。
3. 在既有上線授權內執行切換，依適用情境移除 production noindex／密碼保護。
4. 檢查代表 URL、訂單或表單、事件與 GSC；交付帶時間和版本的上線收據及觀察表。

## 完成時檢查

- 正式站主要任務成功；舊 URL 對應正確；分析事件去重。
- 沒有 staging 限制殘留；監控與責任人已交接；未通過項有明確決定。

## 容易忽略的事

- 全站解除保護，連後台和預覽內容一起公開。
- 只看首頁，沒測表單、購物或 redirect。

## 需要決定的事

依驗收結果決定是否上線，並確認誰能決定暫停或回復。

## 來源與適用範圍

- 建議基線，依專案調整；整理日期：2026-10-21
- Erik 的知識庫需求與 XTERRA 電商擴充（2026-10-21）：AI-native 短文件、Tenten 服務範圍、XTERRA 美國站 Magento → Shopify、電商上線標準與給 Sherry 的 Shopify／Klaviyo 知識；不代表已取得 20 年私人筆記。
- [Google Search Central：網站遷移](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)（2026-10-21）：URL 盤點、永久 redirect、canonical、切換、GSC 及至少一年的 redirect 保留建議。
- [Managed WordPress Hosting Controls and Ownership | Tenten](https://tenten.co/solutions/hosting)（2026-10-21）：主機責任、備份、回復、監控和交接脈絡；不視為個案 SLA。
- [Google Analytics：電商事件](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)（2026-10-21）：電商事件、items、currency、transaction_id、購買與退款；Meta 去重及 Ads 配置需 Agent 執行時查現行平台文件。

## 相關知識

- technical-seo
- measurement
- operations-security
