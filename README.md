# Projeto IOT UFJF time 7

Este é o projeto do time 7 da turma de IOT UFJF 2018/1

## Instalação

Este projeto roda em NodeJS. Para instalá-lo [Siga as instruções do site NodeJS](https://nodejs.org/).

No terminal siga os seguintes passos:

 - Instale as dependências globais do projeto executando `npm run setup` (pode precisar de permissão de administrador).
 - Instale as dependências locais do projeto executando `npm install`

 Snippet rápido:

    npm run setup
    npm install

## Execução/Desenvolvimento

 Para inicializar o servidor execute no terminal:

    npm start

O servidor irá inicializar na porta configurada. Sempre que algum arquivo for modificado, o servidor irá reinciar automaticamente.

O projeto é desenvolvido em JavaScript com Express.

Servidor MQTT: `mqtt://200.131.219.102`

## Links

- [Lib MQTT](https://github.com/mqttjs/MQTT.js)
- [LowDB](https://github.com/typicode/lowdb)
