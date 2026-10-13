(() => {
  const installButton = document.getElementById('installBtn');
  let installPrompt = null;
  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone()) installButton.hidden = true;
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener('click', async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      installButton.hidden = true;
    } else {
      alert('このブラウザではボタンからのインストールに対応していません。\n\niPhone/iPad：Safariの共有ボタン →「ホーム画面に追加」\nAndroid：Chromeのメニュー →「アプリをインストール」または「ホーム画面に追加」');
    }
  });
  window.addEventListener('appinstalled', () => { installButton.hidden = true; installPrompt = null; });
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(err => console.warn('Service worker registration failed:', err)));
  }
})();