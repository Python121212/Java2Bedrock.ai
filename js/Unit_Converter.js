/**
 * 6. Unit_Converter.js
 * 役割: 数値単位の相互変換（計算ミスを防ぐ）
 */
export const UnitConverter = {
    tickToSecond(tick) { return tick / 20; },
    degToRad(deg) { return deg * (Math.PI / 180); },
    // 統合版のサウンド距離減衰の計算など
    calculateAttenuation(javaVol) { return Math.max(0, Math.min(1.0, javaVol)); }
};
