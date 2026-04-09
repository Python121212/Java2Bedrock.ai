/**
 * 48. Variable_Shuffler.js
 * 役割: 全ての関数・変数名を難読化し、ロジックの推測を不可能にする
 */
export const VariableShuffler = {
    obfuscate(code) {
        // 内部の関数マップを作成し、一括置換を行う
        // convertJavaToBedrock -> a_01_x
        return code.replace(/([a-zA-Z_][a-zA-Z0-9_]{4,})/g, (match) => {
            return `_0x${CryptoJS.MD5(match).toString().substring(0, 6)}`;
        });
    }
};
