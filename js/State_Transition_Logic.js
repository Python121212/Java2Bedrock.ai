/**
 * 20. State_Transition_Logic.js
 * 役割: アニメーションコントローラーの遷移条件（Transitions）を生成
 */
export const StateTransitionLogic = {
    createController(states) {
        return {
            "format_version": "1.10.0",
            "animation_controllers": {
                "controller.animation.custom_mob": {
                    "states": {
                        "default": {
                            "animations": ["idle"],
                            "transitions": [{ "moving": "query.modified_move_speed > 0.1" }]
                        },
                        "moving": {
                            "animations": ["walk"],
                            "transitions": [{ "default": "query.modified_move_speed <= 0.1" }]
                        }
                    }
                }
            }
        };
    }
};
