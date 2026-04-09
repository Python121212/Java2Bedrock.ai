/**
 * 30. Attack_Reach_Calculator.js
 * 役割: 巨大な敵や特殊な武器の攻撃届く範囲(Reach)を補正
 */
export const AttackReachCalculator = {
    calculate(javaEntityWidth, javaAttackRange) {
        // 統合版は当たり判定の中心からの距離で計算するため、
        // エンティティの幅(width)を考慮して数値を微調整する
        return (javaEntityWidth / 2) + javaAttackRange;
    }
};
