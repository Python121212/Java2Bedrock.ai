/**
 * 33. Entity_Event_Trigger.js
 * 役割: 特定条件（体力、時間、攻撃）で発動するコマンドやアニメーションの変化を定義
 */
export const EntityEventTrigger = {
    createHurtTrigger(threshold, eventName) {
        return {
            "minecraft:damage_sensor": {
                "triggers": {
                    "on_damage": { "filters": { "test": "have_component", "operator": "==", "value": "minecraft:health" }, "event": eventName }
                }
            }
        };
    }
};
