/**
 * 4. Bedrock_Wiki_Lexer.js
 * 役割: 統合版Wikiからパラメータ名やJSON構造のヒントを抽出
 */
export const BedrockWikiLexer = {
    tokenizeParams(text) {
        // max_distance = 16 などの数値を抽出
        const results = {};
        const pattern = /(max_distance|volume|pitch)\s*[:=]\s*([0-9.]+)/g;
        let match;
        while ((match = pattern.exec(text)) !== null) {
            results[match[1]] = parseFloat(match[2]);
        }
        return results;
    }
};
