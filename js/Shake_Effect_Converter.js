/**
 * 23. Shake_Effect_Converter.js
 * 役割: Java版のカメラシェイクやモデルの震えをアニメーションデータ化
 */
export const ShakeEffectConverter = {
    generateVibration(intensity, duration) {
        // MoLangを使ってランダムな微振動を生成
        return `math.random(-${intensity}, ${intensity})`;
    }
};
