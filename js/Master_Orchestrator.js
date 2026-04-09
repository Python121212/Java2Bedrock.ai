/**
 * 53. Master_Orchestrator.js
 * 役割: 60モジュールの実行順序制御とデータリレー
 */
export const MasterOrchestrator = {
    async runPipeline(jarFile, wikiPdfs) {
        // 1. 知識解読 (1-6)
        const knowledge = await this.initKnowledge(wikiPdfs);
        // 2. 解剖 (7-12)
        const rawData = await this.unpackAndParse(jarFile, knowledge);
        // 3. 構築 (13-42)
        const addonData = await this.generateAddon(rawData);
        // 4. 防御・出力 (47-52)
        return await this.finalize(addonData);
    }
};
