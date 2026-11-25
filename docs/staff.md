# Cadastro manual do primeiro DEV

A tabela lux_logic_staff começa vazia. O Worker aceita hashes no formato pbkdf2$SALT$HEX, PBKDF2-HMAC-SHA256, 100000 iterações, saída 32 bytes, salt textual UTF-8. Não insira senha em texto puro.

Execute localmente: node scripts/staff-hash.mjs (o script lê a senha pelo stdin; não a inclua no comando). Copie o hash gerado para password_hash no D1.

Campos: id (UUID único), username, password_hash, role = dev, active = 1. created_at tem default; created_by pode ser NULL. Após o primeiro DEV, os ADMINs são adicionados pelo painel. Nenhum cadastro público. Sessões expiram em 1 hora. Senhas dos ADMINs exigem pelo menos 10 caracteres.
