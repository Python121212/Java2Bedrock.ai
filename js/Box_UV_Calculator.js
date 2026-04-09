/**
 * 15. Box_UV_Calculator.js
 * 役割: テクスチャのUV座標(u, v)を統合版形式で算出
 */
export const BoxUVCalculator = {
    calculateUV(u, v, isMirror = false) {
        return {
            "uv": [u, v],
            "mirror": isMirror
        };
    }
};
