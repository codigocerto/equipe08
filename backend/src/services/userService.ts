// src/services/userService.ts

import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de rounds de hashing

// Função para gerar o hash de uma senha
export async function hashPassword(password: string): Promise<string> {
  // Gera um salt (um valor aleatório para aumentar a segurança)
  const salt = await bcrypt.genSalt(saltRounds);

  // Gera o hash da senha usando o salt
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

// Função para verificar se a senha fornecida corresponde ao hash armazenado
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}
