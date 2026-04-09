/**
 * 19. Keyframe_Interpolation.js
 * 役割: Java版の線形補間を統合版のキーフレーム形式に変換
 */
export const KeyframeInterpolation = {
    interpolate(startTime, endTime, startPos, endPos) {
        // 時間軸を0.0〜1.0の範囲に正規化し、滑らかなカーブ（Lerp）を計算
        return {
            [startTime]: [startPos.x, startPos.y, startPos.z],
            [endTime]: [endPos.x, endPos.y, endPos.z]
        };
    }
};
