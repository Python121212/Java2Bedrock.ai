/**
 * 46. Conflict_Detector.js
 * 役割: 全てのID（entity, item, sound）に独自の名前空間があるかチェック
 */
export const ConflictDetector = {
    audit(identifier, prefix) {
        if (!identifier.startsWith(prefix)) {
            return `${prefix}:${identifier}`;
        }
        return identifier;
    }
};
