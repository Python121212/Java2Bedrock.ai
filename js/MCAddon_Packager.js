/**
 * 42. MCAddon_Packager.js
 * 役割: JSZipを使用して二重構造のZIPを作成し、拡張子を.mcaddonにして出力
 */
export const MCAddonPackager = {
    async package(projectName, rpFiles, bpFiles) {
        const zip = new JSZip();
        
        // リソースパックフォルダを作成
        const rpRoot = zip.folder(`${projectName}_RP`);
        Object.entries(rpFiles).forEach(([path, data]) => rpRoot.file(path, data));

        // ビヘイビアパックフォルダを作成
        const bpRoot = zip.folder(`${projectName}_BP`);
        Object.entries(bpFiles).forEach(([path, data]) => bpRoot.file(path, data));

        // .mcaddonとして出力
        const blob = await zip.generateAsync({type: "blob"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${projectName}.mcaddon`;
        a.click();
        
        window.log(`COMPLETED: ${projectName}.mcaddon が出力されました。`);
    }
};
