/**
 * 10. Method_Logic_Parser.js
 * 役割: AI挙動（もし〜なら〜する）の条件式を解析
 */
export const MethodLogicParser = {
    parseAI(classRawData) {
        const behaviors = [];
        if (classRawData.includes("nearestAttackableTarget")) {
            behaviors.push({ type: "target_player", priority: 1 });
        }
        return behaviors;
    }
};
