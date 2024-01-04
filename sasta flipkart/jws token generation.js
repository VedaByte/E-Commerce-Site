const crypto = require("crypto");

function generateSecretKey() {
  // Generate a random buffer with 32 bytes
  const buffer = crypto.randomBytes(32);

  // Convert the buffer to a hexadecimal string
  const secretKey = buffer.toString("hex");

  return secretKey;
}

const generatedSecretKey = generateSecretKey();
console.log("Generated Secret Key:", generatedSecretKey);
