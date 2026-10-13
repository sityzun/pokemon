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

### 対戦画面の表示比率
対戦ルームは16:9の固定アスペクト比を維持し、ブラウザの表示領域に合わせて収まるようにしています。画面全体をスクロールさせず、縦長スマートフォンではコンパクト表示になります。


## ホーム画面への追加（PWA）
- HTTPSで公開されたサイト（GitHub Pagesなど）をスマートフォンのブラウザで開きます。
- 対応ブラウザではヘッダーに「ホーム画面に追加」ボタンが表示されます。表示されない場合はブラウザの共有／メニューから追加してください。
- iPhone/iPad：Safariの共有ボタン →「ホーム画面に追加」。
- Android：Chromeのメニュー →「アプリをインストール」または「ホーム画面に追加」。
- PWAとしてインストールするには、HTTPS（またはlocalhost）で配信する必要があります。ローカルでZIPを直接開いた場合、インストール機能とService Workerは動作しません。
- Service Workerがアプリの基本ファイルをキャッシュします。Google Fontsなど外部リソースや一部の初回アクセスはネット接続が必要です。
