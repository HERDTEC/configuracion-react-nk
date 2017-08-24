#Instalacion de eslint
yarn eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard --dev
cp ./.config-fold/.eslintignore .eslintignore
cp ./.config-fold/.eslintrc .eslintrc
yarn install
yarn install add ui
yarn add react-datepicker
yarn add react-router-dom