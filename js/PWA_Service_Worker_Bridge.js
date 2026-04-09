/**
 * 58. PWA_Service_Worker_Bridge.js
 * 役割: オフラインキャッシュの更新管理
 */
export const PWAServiceWorkerBridge = {
    checkUpdates() {
        navigator.serviceWorker.ready.then(reg => reg.update());
    }
};
