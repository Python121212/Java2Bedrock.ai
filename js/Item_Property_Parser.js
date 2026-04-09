/**
 * 34. Item_Property_Parser.js
 * 役割: Java版のアイテム定義から、スタック数や耐久度を抽出
 */
export const ItemPropertyParser = {
    parse(javaItemData) {
        return {
            "max_stack_size": javaItemData.maxStackSize || 64,
            "hand_equipped": javaItemData.isTool || false,
            "use_duration": javaItemData.useDuration || 0
        };
    }
};
