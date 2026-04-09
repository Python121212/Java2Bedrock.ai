/**
 * 13. Model_JSON_Emitter.js
 * 役割: 統合版の geometry.json の基本構造(header, description)を作成
 */
export const ModelJSONEmitter = {
    createBase(identifier, texWidth = 64, texHeight = 64) {
        return {
            "format_version": "1.12.0",
            "minecraft:geometry": [{
                "description": {
                    "identifier": `geometry.${identifier}`,
                    "texture_width": texWidth,
                    "texture_height": texHeight,
                    "visible_bounds_width": 2,
                    "visible_bounds_height": 3,
                    "visible_bounds_offset": [0, 1.5, 0]
                },
                "bones": []
            }]
        };
    }
};
