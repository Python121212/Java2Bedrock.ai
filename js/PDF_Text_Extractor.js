/**
 * 2. PDF_Text_Extractor.js
 * 役割: pdf.jsを使用してバイナリからテキストを抽出
 */
export const PDFTextExtractor = {
    async extract(binaryData) {
        const loadingTask = pdfjsLib.getDocument({ data: binaryData });
        const pdf = await loadingTask.promise;
        let fullText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            // 文字の並びを正規化して結合
            const strings = content.items.map(item => item.str);
            fullText += strings.join(" ") + "\n";
        }
        return fullText;
    }
};
