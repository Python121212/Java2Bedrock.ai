/**
 * 50. String_Encrypter.js
 * 役割: 文字列定数を暗号化し、検索による解析を防止
 */
export const StringEncrypter = {
    encrypt(text, key) {
        return CryptoJS.AES.encrypt(text, key).toString();
    }
    // 実行時にはデクリプター経由で復号して使用
};
