# Tenten Knowledge Base

Tenten 內部的精簡工作知識庫，以人類快速找到、看懂並開始執行為優先。32 篇短文件、8 個業務領域、11 組工作指南、7 條閱讀路徑。

先看概念、原因和例子，再往下看做法與完成標準。需要交接時，可帶走完整知識與專案脈絡。介面與搜尋不需要 API key 或外部服務。

## 開啟

```sh
python3 scripts/serve.py
```

瀏覽 http://localhost:8768/index.html 。預覽僅綁定本機 127.0.0.1。也可直接以瀏覽器開啟 site/index.html；相對連結、搜尋與 Markdown 不依賴 server。剪貼簿無法使用時，介面會選取完整任務包供手動複製。

## 使用

1. 從首頁的工作指南開始，或按「理解需求 → 建立網站與商店 → 帶來流量與成長 → 維運與自動化」找主題。也可直接搜尋「Klaviyo 是什麼」。
2. 分類頁標示第一篇與閱讀順序；工作指南把相關文章排成三個階段。
3. 每篇先看「這是什麼、什麼時候用、為什麼重要」，接著用重點、名詞小抄與例子理解。10 篇附有流程或系統分工示意圖。
4. 看懂後從明確的第一步開始，依序執行，再用完成清單檢查。文章目錄與下一篇連結讓閱讀不中斷。
5. 需要交接時，展開文末「帶著這份知識開始工作」，補上專案資料，複製或下載給同事或 Agent。不要填密碼或 token。

純文字入口為 exports/INDEX.md；exports/playbooks/ 是單份知識，exports/scenarios/ 是含完整知識的任務包。exports/all-knowledge.md 提供整庫，但日常建議只帶入相關文件。

## 維護與驗證

```sh
python3 scripts/build.py
python3 scripts/harness.py
node --check web/app.js
node --check web/theme-init.js
python3 scripts/package.py
```

Python 使用標準函式庫；Node 只用於 JavaScript 語法檢查。修改 content/ 的 canonical JSON、web/ 或 scripts/，再重建。不要手改 site/ 與 exports/。

- content/playbooks/：32 份短卡，依專案成果持續修正。
- content/navigation.json：4 個導覽群組與首頁工作入口。
- content/categories.json：8 個領域與各主題的閱讀順序。
- content/scenarios.json：工作指南的階段與文章組合；重用同一批知識，不另寫重複長文。
- content/paths.json：新人與角色閱讀順序。
- content/sources.json、research/：來源日期、適用範圍與實際取閱紀錄。
- scripts/build.py：檢核資料、建置靜態頁與完整 Markdown。
- scripts/harness.py：可重跑的內容、連結、匯出與隔離檢查，失敗會以非零退出。
- docs/architecture.md：架構與撰寫規則。
- docs/product-experience.md：配色、主題、互動、效能與變更驗收準則。
- docs/review.md、evidence/：AgentHarness 改善紀錄、機器收據與實際瀏覽器驗證。

未安裝獨立 AgentHarness 服務。本次依 AgentHarness 技能執行 discover → verify → select → implement → validate，並提供本地驗證程式；harness.py 本身不會呼叫模型或自行擴寫內容。機器檢查通過不代表文字事實已獨立認證。

## 知識邊界

- 第一版根據實際讀取的 Tenten 官網、官方文件及本次需求建立；通用實務明示為建議基線。
- 尚未取得 Erik 過去 20 年私人筆記與完整案例，不宣稱已收錄所有個人經驗。之後以專案教訓更新既有卡片即可。
- XTERRA 已唯讀檢查指定 repo 的 e1caa5ecdcdf 快照；Astro／Sanity 前台搭配 Shopify。README 與 Klaviyo 專文／程式有差異，不能用 repo 描述推定正式帳號、寄信或搬站已完成。詳見 research/xterra-review.json。
- AI FTE 為工作角色設計概念，不推定既有價格、方案或人力替代保證。
- Neteon 專案維持唯讀；沿用其結構化內容、靜態建置和 Agent 匯出模式，沒有複製客戶知識或登入設定。
- 未部署、未建立登入服務、未變更外部帳號。未來上線需先保護全部頁面、搜尋資料、JSON 與 Markdown；noindex 不是存取控制。

## 電商擴充入口

- 標準上線：http://localhost:8768/scenarios/ecommerce-launch.html
- 電子報／Klaviyo：http://localhost:8768/scenarios/retention.html
- Shopify 生態系選型：http://localhost:8768/scenarios/commerce-ecosystem.html
- Sherry 閱讀路徑：http://localhost:8768/paths.html#commerce-operator

新增 8 份短卡：電商標準交付、GA4 事件與轉換率、Meta Pixel／CAPI、Google Ads／商品 Feed、Klaviyo、商品探索／評論／App 選型、售後與保固、headless 整合邊界。另更新既有 Shopify、搬站、量測、CRM 與電商成長文件。

## 人類閱讀版

- 每篇都有白話概念、適用情境、例子與第一步；正文先談工作與決策，交接表單預設收合。
- 首頁提供工作入口，分類提供學習順序，指南提供階段順序，文章提供下一步。
- 10 張可隨螢幕調整的示意圖，涵蓋 GA4／GSC／廣告工具分工、Klaviyo 旅程、Meta 去重、搬站轉址、主機與 headless 架構等。
- Logo 與 favicon 使用 Tenten 官網官方檔案；來源、下載日期與雜湊見 research/tenten-logo.json。Logo 未重畫，保留原比例。

## 外觀與產品體驗

- 右上角選擇「跟隨系統／淺色／深色」。預設跟隨系統，手動選擇會保存。
- 視覺參考指定 Cohere 文件：白色／石色與墨綠深色、清楚的層次、官方 Logo、本地字型。互動採 150–200ms 回饋，支援減少動態效果。
- ⌘K／Ctrl K 開啟快速搜尋，方向鍵選擇、Enter 開啟、Escape 返回。手機也有搜尋入口。
- 此分頁暫存各頁草稿、知識勾選、展開狀態、閱讀位置與焦點；清除可以撤銷。無法儲存或複製時提供可完成工作的替代入口。
- 搜尋資料由 173,924 bytes 降至 57,946 bytes（約減少 67%）。計入新增本地字型後，首頁 HTML 與觀測到的資源 body 合計由 248,714 降至 217,965 bytes（約減少 12%）；這不是傳輸壓縮量或正式環境速度保證。

## 本次驗證

- Build PASS：32 篇、11 指南、57 HTML 頁。Harness 170/170 PASS，包含搜尋資料、當頁任務包與 Markdown 的一致性檢查；兩份 JavaScript 語法通過。
- 瀏覽器 30/30 實際檢查通過：明暗／系統主題、搜尋／中文組字、草稿保存／撤銷、下載逐字比對、手機導覽、file URL、無 JS 內容與列印。
- 57 頁於 390px 無橫向溢出；另檢查 320px、約 1024px 與桌面。淺／深色及手機截圖已檢視。
- 最新收據：evidence/browser.json、product-mobile.json、product-performance.json。人類閱讀版舊收據在 browser-human.json。
- ZIP：dist/tenten-knowledge-base-2026-10-21.zip；獨立解壓重建紀錄見 evidence/portable.json。GitHub workflow 只驗證建置、語法和生成檔，不部署。

## Repository

指定同步位置：https://github.com/tentenco/kb.tenten.co （目前為 public）。原始碼同步不等於網站已在 kb.tenten.co 上線；本機預覽仍為 http://localhost:8768/index.html 。
