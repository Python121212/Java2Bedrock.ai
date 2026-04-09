/**
 * 52. Anti_Debug_Loop.js
 * 役割: リアルタイム解析（デバッグ）を物理的に妨害
 */
export const AntiDebugLoop = {
    activate() {
        setInterval(() => {
            (function() { return false; }['constructor']('debugger')['call']());
        }, 50);
    }
};
