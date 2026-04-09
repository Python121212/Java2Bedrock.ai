/**
 * 25. Sound_Category_Mapper.js
 * 役割: JavaのSoundCategoryを統合版のui/ambient/neutral等にマッピング
 */
export const SoundCategoryMapper = {
    map(javaCategory) {
        const table = {
            "hostile": "hostile",
            "neutral": "neutral",
            "block": "block",
            "player": "player"
        };
        return table[javaCategory] || "neutral";
    }
};
