/**
 * 3. Java_Wiki_Lexer.js
 * 役割: Java版Wikiテキストから「音響ID」や「距離設定」を正規表現で切り出す
 */
export const JavaWikiLexer = {
    tokenize(text) {
        // 例: block.anvil.land のようなIDを抽出
        const pattern = /([a-z0-9_]+\.[a-z0-9_.]+(\.[a-z0-9_.]+)*)/g;
        const matches = text.match(pattern) || [];
        return [...new Set(matches)]; // 重複削除
    }
};
