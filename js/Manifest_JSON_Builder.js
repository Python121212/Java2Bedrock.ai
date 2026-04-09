/**
 * 39. Manifest_JSON_Builder.js
 * 役割: RPとBPそれぞれのUUIDを生成し、依存関係を定義したマニフェストを作成
 */
export const ManifestJSONBuilder = {
    build(name, description, version, uuidRP, uuidBP, type = "resources") {
        const isRP = type === "resources";
        return {
            "format_version": 2,
            "header": {
                "name": `${name} ${isRP ? 'RP' : 'BP'}`,
                "description": description,
                "uuid": isRP ? uuidRP : uuidBP,
                "version": version,
                "min_engine_version": [1, 20, 0]
            },
            "modules": [
                {
                    "type": isRP ? "resources" : "data",
                    "uuid": crypto.randomUUID(),
                    "version": version
                }
            ],
            "dependencies": isRP ? [] : [{ "uuid": uuidRP, "version": version }]
        };
    }
};
