/**
 * 60. User_Interface_Bridge.js
 * 役割: メモリ上のデータを .mcaddon ファイルとしてブラウザから排出する
 */
export const UIBridge = {
    async download(blob, fileName) {
        // 1. Blobから一時的なURLを作成
        const url = window.URL.createObjectURL(blob);
        
        // 2. 見えないダウンロード用リンクを作成
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName; // ここで .mcaddon になる
        
        // 3. 画面に追加して自動クリック
        document.body.appendChild(a);
        a.click();
        
        // 4. 後片付け（メモリ解放）
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            window.log("💾 デバイスへの保存リクエストを送信しました。", "log-success");
        }, 100);
    }
};
