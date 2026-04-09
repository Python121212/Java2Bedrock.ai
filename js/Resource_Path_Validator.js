/**
 * 44. Resource_Path_Validator.js
 * 役割: ファイルパスの不一致（大文字・小文字の差など）によるリンク切れを防止
 */
export const ResourcePathValidator = {
    check(files) {
        // textures/entity/zombie.png が存在するか、
        // geometry.json 内の指定と一致するかを照合
        const paths = Object.keys(files);
        // ...不一致があればログ出力＆修正
    }
};
