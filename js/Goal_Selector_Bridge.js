/**
 * 29. Goal_Selector_Bridge.js
 * 役割: JavaのAI優先順位を統合版のコンポーネント形式にブリッジする
 */
export const GoalSelectorBridge = {
    bridge(javaGoals) {
        // Java: Goal 1: MeleeAttack, Goal 2: LookAtPlayer
        // Bedrock: { "minecraft:behavior.melee_attack": { "priority": 1 }, ... }
        const bedrockBehaviors = {};
        javaGoals.forEach(goal => {
            const converted = this.mapGoalToComponent(goal.type);
            if (converted) {
                bedrockBehaviors[converted] = { "priority": goal.priority };
            }
        });
        return bedrockBehaviors;
    },
    mapGoalToComponent(type) {
        const map = { "MeleeAttack": "minecraft:behavior.melee_attack", "RandomStroll": "minecraft:behavior.random_stroll" };
        return map[type] || null;
    }
};
