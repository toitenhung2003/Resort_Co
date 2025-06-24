import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt";
import forge from "node-forge";

// Mã hóa OTP bằng AES
export function encryptOtpWithAES(otp, aesKey, iv) {
    const key = CryptoJS.enc.Utf8.parse(aesKey); // chuẩn hóa key
    const encrypted = CryptoJS.AES.encrypt(otp, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString(); // base64
  }
  

// Mã hóa AES key bằng RSA (server public key)

export function encryptAESKeyWithRSA(publicKeyPem, aesKeyWordArray) {
    try {
        const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
        const rawKeyHex = aesKeyWordArray.toString(); // HEX string
        const rawKeyBytes = forge.util.hexToBytes(rawKeyHex); // raw bytes
        const encrypted = publicKey.encrypt(rawKeyBytes, "RSA-OAEP", {
            md: forge.md.sha1.create(),
            mgf1: forge.mgf1.create(forge.md.sha1.create())
        });
        return forge.util.encode64(encrypted);
    } catch (error) {
        console.error("RSA Encryption Error:", error);
        return null;
    }
}
