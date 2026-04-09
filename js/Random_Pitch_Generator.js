/**
 * 27. Random_Pitch_Generator.js
 * 役割: サウンド再生時のピッチのランダム幅（0.9〜1.1等）を設定
 */
export const RandomPitchGenerator = {
    getRange(javaPitchVar) {
        return [1.0 - javaPitchVar, 1.0 + javaPitchVar];
    }
};
