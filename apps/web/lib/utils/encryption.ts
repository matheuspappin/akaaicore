// apps/web/lib/utils/encryption.ts
import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16; // AES block size

export function encrypt(text: string, secretKey: string): string {
  if (!secretKey || secretKey.length !== 32) { // 256 bits = 32 bytes
    throw new Error('Encryption key must be 32 characters long.');
  }
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(secretKey), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decrypt(text: string, secretKey: string): string {
  if (!secretKey || secretKey.length !== 32) { // 256 bits = 32 bytes
    throw new Error('Encryption key must be 32 characters long.');
  }
  const textParts = text.split(':');
  if (textParts.length !== 2) {
    throw new Error('Invalid encrypted text format.');
  }
  const iv = Buffer.from(textParts.shift()!, 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}