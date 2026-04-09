/**
 * 12. Mapping_Applier.js
 * 役割: 難読化された難解な名前を、統合版で使える名前に正規化
 */
export const MappingApplier = {
    apply(rawName, mapData) {
        // mapDataから対応する正式名称を引く
        return mapData[rawName] || rawName;
    }
};
