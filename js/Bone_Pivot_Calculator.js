/**
 * 14. Bone_Pivot_Calculator.js
 * 役割: Java版のモデル中心点を統合版のピボット座標に変換
 */
export const BonePivotCalculator = {
    convertPivot(javaPivot) {
        // Javaの(x,y,z)を統合版の相対座標に変換
        // 軸の反転やオフセットの補正を行う
        return [
            -javaPivot.x,
            javaPivot.y,
            javaPivot.z
        ];
    }
};
