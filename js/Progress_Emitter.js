/**
 * 56. Progress_Emitter.js
 * 役割: 変換進捗をパーセンテージとテキストでUIへ通知
 */
export const ProgressEmitter = {
    update(stepName, percent) {
        const event = new CustomEvent('bm60_progress', { detail: { stepName, percent } });
        window.dispatchEvent(event);
    }
};
