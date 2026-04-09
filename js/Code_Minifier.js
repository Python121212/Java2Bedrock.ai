/**
 * 47. Code_Minifier.js
 * 役割: JSコードを圧縮し、物理的に読みづらくする
 */
export const CodeMinifier = {
    minify(code) {
        // 正規表現で余白とコメントを削除
        return code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*|[\t ]+/g, ' ')
                   .replace(/\s+([\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e])\s+/g, '$1')
                   .trim();
    }
};
