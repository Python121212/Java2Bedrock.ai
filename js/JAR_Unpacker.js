/**
 * 7. JAR_Unpacker.js
 * 役割: 投入されたJAR/ZIPを解凍し、仮想ファイルシステムに展開する
 */
export const JARUnpacker = {
    async unpack(fileBlob) {
        const zip = await JSZip.loadAsync(fileBlob);
        const fileMap = { classes: [], assets: [], data: [] };

        for (const [path, file] of Object.entries(zip.files)) {
            if (file.dir) continue;
            if (path.endsWith('.class')) fileMap.classes.push(path);
            else if (path.startsWith('assets/')) fileMap.assets.push(path);
            else if (path.startsWith('data/')) fileMap.data.push(path);
        }
        window.log(`UNPACKER: ${Object.keys(zip.files).length}個のファイルをスキャン完了。`);
        return { zip, fileMap };
    }
};
