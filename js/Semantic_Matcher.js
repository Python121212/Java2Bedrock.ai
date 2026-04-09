/**
 * 5. Semantic_Matcher.js
 * 役割: Javaと統合版のIDをマッチングさせる
 */
export const SemanticMatcher = {
    match(javaId) {
        // Java: entity.zombie.hurt -> Bedrock: mob.zombie.say
        // 実際にはここで大規模な変換テーブル、またはあいまい検索を行う
        let bedrockId = javaId.replace("entity.", "mob.");
        bedrockId = bedrockId.replace(".hurt", ".say"); // 統合版はsayに統合されていることが多い
        return bedrockId;
    }
};
