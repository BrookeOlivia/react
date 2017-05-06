# react
Setting up react using cli/npm
———————————————
1. install httpster
2. npm init
3. npm install - -save-dev-babel-cli
4. create .babelrc file.  This contains all presets
5. install presets
    1. nam install —save-dev babel-preset-latest babel-preset-react babel-preset-stage-0
6. Then  run babel call  =>  babel ./src/index.js —out-file ./dist/bundle.js
7. Add start command to package.json so that you don’t have to type httpster.
8. create web pack config file (describes everything that needs to happen to ready them for production)
9. Install web pack => npm install webpack babel-loader webpack-dev-server —save-dev
10. run web pack (just type web pack in terminal)
11. then run sudo npm install -g webpack or ./node_modules/.bin/webpack
12. package.json’s start should read “./node_modules/.bin/webpack-dev-server”
13. Make sure index.html src for bundle is pointing to the correct place
14. npm install style-loader --save-dev
15. npm install css-loader --save-dev
16. npm install autoprefixer-loader --save-dev
17. npm install sass-loader --save-dev
18. npm install node-sass —save-dev
19. npm install react —save -dev
20. nam install react-router —save -dev
21.  npm install react-router-native@next
22. npm install react-dom —save-dev



.babelrc {’presets': ['es2015', 'latest', 'react', 'stage-0’]}

NOTE: .babelrc is  a hidden file

