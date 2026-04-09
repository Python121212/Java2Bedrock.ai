/**
 * 28. Stream_Flag_Manager.js
 * 役割: ファイルサイズや長さから「ストリーミング再生」が必要か判断
 */
export const StreamFlagManager = {
    shouldStream(fileSize) {
        return fileSize > 1024 * 100; // 100KB以上ならストリーム
    }
};
