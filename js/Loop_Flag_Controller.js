/**
 * 22. Loop_Flag_Controller.js
 * 役割: アニメーションの loop 設定と、終了後のホールド状態を管理
 */
export const LoopFlagController = {
    setLoop(animationName, isLoop) {
        return {
            [animationName]: {
                "loop": isLoop,
                "override_previous_animation": true
            }
        };
    }
};
