/**
 * 1. PDF_Raw_Stream.js
 * 役割: PDFファイルをバイナリデータとして読み込み、 extractorへ渡す
 */
export const PDFRawStream = {
    async fetchBinary(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const arrayBuffer = await response.arrayBuffer();
            return new Uint8Array(arrayBuffer);
        } catch (e) {
            window.log(`ERROR [PDF_Raw_Stream]: ${e.message}`, "log-error");
            return null;
        }
    }
};
