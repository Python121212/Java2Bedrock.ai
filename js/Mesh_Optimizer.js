/**
 * 16. Mesh_Optimizer.js
 * 役割: 重複パーツの結合や、描画されない面の削除による軽量化
 */
export const MeshOptimizer = {
    optimize(bones) {
        // パーツ数が多すぎる場合に階層を整理するロジック
        return bones.filter(bone => bone.cubes && bone.cubes.length > 0);
    }
};
