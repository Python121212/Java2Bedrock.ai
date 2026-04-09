/**
 * 31. Knockback_Physics.js
 * 役割: 被ダメージ時のノックバックの強さと、ノックバック耐性を変換
 */
export const KnockbackPhysics = {
    setPhysics(knockbackResistance) {
        return {
            "minecraft:knockback_resistance": {
                "value": knockbackResistance || 0.0
            }
        };
    }
};
