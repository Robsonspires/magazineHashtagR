# Projeto Magazine Hashtag com React

## Em Julho de 2025

### 

### Criação magazinehastagR:

* ##### npm create vite@latest
* preencher os dados conforme solicitado



#### Instalação do Tailwindcss com o postcss

* ##### npm install tailwindcss @tailwindcss/postcss postcss
* Add @tailwindcss/postcss to your postcss.config.mjs file, or wherever PostCSS is configured in your project.
* Adicionar no postcss.config.mjs:

&nbsp;	export default {

&nbsp;	  plugins: {

&nbsp;	    "@tailwindcss/postcss": {},

&nbsp;	  }

  	}



* no index.css (ou o css do projeto) adicionar:

  @import "tailwindcss";



#### Não foi necessário configurar o tailwind.config.js e colocar os paths.





Aula 7 - Instalação da Font Awesome:

no terminal:

&nbsp;npm i --save @fortawesome/fontawesome-svg-core



pacotes gratuitos:

&nbsp;npm i --save @fortawesome/free-solid-svg-icons

&nbsp;npm i --save @fortawesome/free-regular-svg-icons

&nbsp;npm i --save @fortawesome/free-brands-svg-icons



Componente do React

&nbsp;npm i --save @fortawesome/react-fontawesome@latest

