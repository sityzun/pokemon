# PokéDeck — TCG Battle Studio

GitHub Pagesで公開できる、ビルド不要の静的サイトです。HTML / CSS / JavaScriptのみで動作します。

## 主な機能
- レスポンシブ対応のトップページとモバイルナビ
- サンプルカード図鑑、検索、タイプ絞り込み、並べ替え
- オリジナルカードの追加
- カードのデッキ追加・枚数調整・60枚上限・同名カード4枚制限
- デッキの保存・読み込み・削除
- 対戦UIデモ（ワザ、ドロー、HP、サイド、ターン表示）
- カード・デッキはブラウザのlocalStorageに保存

## GitHub Pagesで公開する手順
1. GitHubで新しい **Public** リポジトリを作成します（例：`pokedeck`）。
2. このフォルダ内の `index.html`、`style.css`、`app.js`、`README.md` をリポジトリのルートへアップロードします。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment** の Source を **Deploy from a branch** にし、Branch を `main`、Folder を `/ (root)` にして Save。
5. 数分待ち、表示された `https://ユーザー名.github.io/pokedeck/` を開きます。

GitHub公式手順: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 注意
- この版はデザインとUI操作を確認するためのプロトタイプです。カード情報はサンプルで、公式カードデータではありません。
- 対戦画面はデモです。正式なルールエンジン、通信対戦、P2P、アカウント認証はまだ実装していません。
- データはそのブラウザのlocalStorageに保存されます。別端末・別ブラウザとは同期されません。
- デザイン上のカード表現は簡易サンプルであり、公式カード画像は含めていません。
