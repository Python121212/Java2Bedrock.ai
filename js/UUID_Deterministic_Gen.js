/**
 * 40. UUID_Deterministic_Gen.js
 * 役割: 名前をハッシュ化し、常に同じUUIDを生成して上書きインポートを安定させる
 */
export const UUIDDeterministicGen = {
    generate(inputString) {
        // 名前からハッシュを生成し、UUIDの規格に当てはめる
        const hash = CryptoJS.MD5(inputString).toString();
        return `${hash.substr(0,8)}-${hash.substr(8,4)}-4${hash.substr(13,3)}-a${hash.substr(17,3)}-${hash.substr(20,12)}`;
    }
};
