/**
 * 32. Pathfinding_Param_Setter.js
 * 役割: ナビゲーション（移動知能）のパラメータを設定
 */
export const PathfindingParamSetter = {
    setNav(canBreakDoors, canFloat) {
        return {
            "minecraft:navigation.walk": {
                "can_break_doors": canBreakDoors,
                "can_float": canFloat,
                "avoid_water": !canFloat
            }
        };
    }
};
