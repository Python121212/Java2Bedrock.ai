/**
 * 38. Creative_Menu_Sorter.js
 * 役割: アイテムを「建設」「装備」「アイテム」の適切なカテゴリに分類
 */
export const CreativeMenuSorter = {
    getCategory(itemId) {
        if (itemId.includes("sword") || itemId.includes("helmet")) return "equipment";
        if (itemId.includes("egg")) return "nature";
        return "items";
    }
};
