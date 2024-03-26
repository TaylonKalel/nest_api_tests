# Use a imagem oficial do Node.js como base
FROM node:18.15.0-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /home/node/app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta 3000 (ou qualquer outra porta que seu aplicativo esteja ouvindo)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "app.js"]
