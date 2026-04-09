/**
 * 60. User_Interface_Bridge.js
 * 役割: 最終的な.mcaddonをユーザーに提供し、UIをリセット
 */
export const UIBridge = {
    finish(fileName) {
        window.log(`DONE: ${fileName} is ready for Minecraft!`, "log-ok");
        // パーティクル演出などの「完了」通知を表示
    }
};
