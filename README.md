---

## 🖥️ Recomendação: use o projeto no Windows (NÃO WSL)

Este projeto foi pensado para rodar com facilidade no **Windows nativo**, especialmente por usar:

- `Expo CLI` com suporte a navegador (`--web`)
- `expo-router` para navegação por arquivos
- Imagens, fontes e paths locais que podem falhar no WSL
- Integração com Visual Studio Code e terminal do Windows
- Possibilidade de usar **Expo Go no celular** via QR Code direto
- Navegadores como Edge/Chrome com `http://localhost:8081`

> ❌ No WSL (Linux), alguns recursos como abertura de navegador, QR Code e até assets locais podem falhar ou exigir configurações extras (bridge de rede, liberação de portas, redirecionamento de display).

✅ **Recomendação**: mantenha o projeto e dependências no ambiente Windows puro para evitar esses problemas e garantir compatibilidade com todos os alunos e desenvolvedores.

---

## 💻 Como configurar o ambiente com NVM (Windows)

### 🔧 1. Remover instalações antigas (se necessário)

> ⚠️ Somente se você já instalou Node.js fora do NVM

1. Vá até **Adicionar ou remover programas**
2. Remova **Node.js**
3. Reinicie o computador (opcional, mas recomendado)

---

### ✅ 2. Instalar o NVM (Node Version Manager) no Windows

1. Acesse o repositório oficial:  
   👉 https://github.com/coreybutler/nvm-windows/releases  
2. Baixe o instalador:  
   ✅ **nvm-setup.exe**
3. Execute o instalador com as opções padrão (ele será instalado em `C:\Program Files\nvm`)
4. Após a instalação, **abra o terminal (PowerShell ou CMD)** e execute para confirmar:

```bash
nvm -v
