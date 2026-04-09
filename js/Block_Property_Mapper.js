/**
 * 37. Block_Property_Mapper.js
 * 役割: ブロックの摩擦(friction)や破壊にかかる時間を統合版用に変換
 */
export const BlockPropertyMapper = {
    map(javaBlock) {
        return {
            "minecraft:block_resistance": javaBlock.resistance,
            "minecraft:friction": javaBlock.slipperiness || 0.6
        };
    }
};
