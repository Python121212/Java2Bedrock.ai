/**
 * 8. Class_Bytecode_Reader.js
 * 役割: .classバイナリからコンスタントプールやメソッド構造を抽出
 */
export const ClassBytecodeReader = {
    async read(zip, classPath) {
        const content = await zip.file(classPath).async("uint8array");
        // ここでJavaクラスファイルの構造（CAFEBABE）を解析
        // 簡易版として、文字列定数（サウンド名やエンティティ名）を抽出
        const textDecoder = new TextDecoder();
        const rawString = textDecoder.decode(content);
        return rawString; // 本来は構造解析したオブジェクトを返す
    }
};
