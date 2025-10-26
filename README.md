# 🌌 Star Wars Explorer

Uma aplicação React que consome a **API pública do Star Wars (SWAPI)** para exibir informações sobre filmes e personagens do universo Star Wars.  
O projeto utiliza **React Router**, **hooks personalizados**, **suspense com lazy loading**, e **efeitos de carregamento (skeletons)** para uma experiência fluida e moderna.

---

## 🚀 Funcionalidades

- 🔍 **Busca interativa** por filmes da franquia.
- 🎬 **Visualização de detalhes** de cada filme.
- 👤 **Visualização de detalhes** de personagens.
- 💫 **Skeleton loaders** para suavizar a experiência enquanto os dados são carregados.
- 🧭 **Navegação dinâmica** entre páginas usando `react-router-dom`.
- 💡 **Design responsivo** e interface com estilo **neon futurista** inspirado em Star Wars.

---

## ⚙️ Tecnologias Utilizadas

- **React 18+**
- **React Router DOM**
- **Hooks (useState, useEffect, useNavigate, useParams)**
- **React.lazy & Suspense** (para carregamento dinâmico de rotas)
- **Fetch API**
- **CSS puro** para os estilos e animações neon/skeleton

---

## 🌐 API Utilizada

Este projeto consome a **[SWAPI - Star Wars API](https://swapi.dev/)**, uma API pública e gratuita com dados do universo Star Wars.

Exemplo de endpoint:

https://swapi.dev/api/films/


---

## 🧠 Hook Personalizado (`useSwapi`)

O hook `useSwapi(resource)` encapsula a lógica de busca de dados da API, tratando:
- Requisições assíncronas (`fetch`)
- Erros de rede
- Estados de carregamento (`loading`)
- Estruturação de dados (`results` ou objeto único)

Exemplo de uso:
```jsx
const { data, loading, error } = useSwapi("films");

| Tela                      | Descrição                                     |
| ------------------------- | --------------------------------------------- |
| 🏠 Página Inicial         | Lista todos os filmes com barra de busca      |
| 🎬 Detalhes do Filme      | Mostra informações e personagens relacionados |
| 👤 Detalhes do Personagem | Mostra dados detalhados de um personagem      |
| 💫 Skeletons              | Efeitos visuais de carregamento dinâmico      |


🧑‍💻 Autor

Rian Reis Neiva