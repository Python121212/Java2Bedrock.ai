/**
 * 9. Field_Scanner.js
 * 役割: クラス内のフィールド（変数）からステータス値を抽出
 */
export const FieldScanner = {
    findStats(classRawData) {
        const stats = {};
        // 例: setMaxHealth(150.0F) のようなパターンを抽出
        const hpMatch = classRawData.match(/MaxHealth.*?([0-9.]+)/);
        if (hpMatch) stats.hp = parseFloat(hpMatch[1]);
        return stats;
    }
};
