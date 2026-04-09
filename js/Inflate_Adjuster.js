/**
 * 17. Inflate_Adjuster.js
 * 役割: 防具やレイヤーの重なりを表現する「膨らみ」の数値を調整
 */
export const InflateAdjuster = {
    adjust(javaInflate) {
        // 微細な浮き（Z-fighting）を防ぐための補正
        return javaInflate || 0.0;
    }
};
