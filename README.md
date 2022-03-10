# TypeScript fundamentals

Instalación de TypeScript

```javascript
sudo npm install -g typescript
```

Generar archivo tsconfig.json

```javascript
tsc --init
```

Modo observador

```javascript
tsc --watch
tsc -W
```

Configuraciones en el archivo TSConfig

```javascript
    "outDir": "../JSBuild" // Salida de los archivos transpilados
    "outFile": "../JSBuild/main.js" // Exportar todo en un solo archivo
    "sourceMap": true // Activar debugging modo TS
    "removeComments": true // Desactivar los comentarios
    "include": [], // Decirle a TS los archivos a transpilar
    "exclude": [] // Decirle a TS los archivos a no transpilar
```
