/**
 * 36. Loot_Table_Generator.js
 * 役割: Java版のLootTable（json）を統合版のpools/entries構造へ変換
 */
export const LootTableGenerator = {
    generate(javaLoot) {
        // 統合版特有の "rolls" と "entries" の構造に再構成
        return {
            "pools": javaLoot.pools.map(pool => ({
                "rolls": pool.rolls,
                "entries": pool.entries
            }))
        };
    }
};
