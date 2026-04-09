/**
 * 11. Annotation_Analyzer.js
 * 役割: クラスの役割（EntityかItemか）をタグから判定
 */
export const AnnotationAnalyzer = {
    identifyRole(classRawData) {
        if (classRawData.includes("Entity")) return "ENTITY";
        if (classRawData.includes("Item")) return "ITEM";
        return "UNKNOWN";
    }
};
