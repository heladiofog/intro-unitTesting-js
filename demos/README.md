# Recursos, configuraciones y comandos utilizados

## Configuraciones
- `.gitignore` file según la herramienta de [Toptal](https://www.toptal.com/developers/gitignore).
- `.editorconfig` file, ver [documentación](https://editorconfig.org/#example-file)
- `.eslintrc.js` generado vía el comando ```npx eslint --init```
  - También con este comando se instalan algunos paquetes según la configuración seleccionada.

## Paquetes instalados:
- ESLint: `npm i --save-dev eslint`
- Jest: `npm i --save-dev jest`

## Custom script execution
- `npm test -- --coverage`
- `npm test -- <file_names>`
