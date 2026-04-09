/**
 * 21. MoLang_Syntax_Generator.js
 * 役割: Javaの計算式を MoLang (例: math.sin(query.life_time * 20)) に変換
 */
export const MoLangSyntaxGenerator = {
    convert(javaExpression) {
        // Java: Math.sin(tick * 0.1) -> MoLang: math.sin(query.life_time * 2.0)
        let molang = javaExpression.replace(/Math\.sin/g, "math.sin");
        molang = molang.replace(/Math\.PI/g, "3.14159");
        return molang;
    }
};
