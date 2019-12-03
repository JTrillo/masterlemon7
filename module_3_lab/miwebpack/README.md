Pasos seguidos:

* Inicializar proyecto node
```
npm init -y
```

* Instalar webpack y webpack-cli
```
npm i -D webpack webpack-cli
```

* Instalar Babel
```
npm i -D @babel/cli @babel/core @babel/preset-env
```

* Crear el archivo de configuración de Babel ( ***./.babelrc*** ). Tiene que tener este contenido:
```
{
  "presets": ["@babel/preset-env"]
}
```

* Instalar el loader de Babel
```
npm i -D babel-loader
```