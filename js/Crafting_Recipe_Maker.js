/**
 * 35. Crafting_Recipe_Maker.js
 * 役割: Javaのレシピ形式を統合版の型（Shaped/Shapeless）に合わせて変換
 */
export const CraftingRecipeMaker = {
    convert(javaRecipe) {
        return {
            "format_version": "1.12.0",
            "minecraft:recipe_shaped": {
                "description": { "identifier": javaRecipe.id },
                "tags": ["crafting_table"],
                "pattern": javaRecipe.pattern,
                "key": javaRecipe.key,
                "result": { "item": javaRecipe.result }
            }
        };
    }
};
