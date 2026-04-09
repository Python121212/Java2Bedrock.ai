/**
 * 51. Domain_Lock_Shield.js
 * 役割: 特定のURL以外での不正コピー・実行を防止
 */
export const DomainLockShield = {
    check(allowedDomain) {
        if (window.location.hostname !== allowedDomain) {
            document.body.innerHTML = "FATAL SECURITY ERROR: Unauthorized Domain.";
            throw new Error("Domain Locked.");
        }
    }
};
