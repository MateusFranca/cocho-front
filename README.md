# Cocho - Sistema de Gestão de Cochos

Sistema web para gerenciamento de cochos (bebedouros/comedouros) de gado e pecuaristas, com integração de sensores IoT para monitoramento de níveis de enchimento.

## Sobre o Projeto

O **Cocho** é uma aplicação frontend desenvolvida para auxiliar na gestão de propriedades rurais, permitindo o cadastro e acompanhamento de cochos com sensores, bem como o gerenciamento de pecuaristas (clientes).

## Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo com Composition API
- **Vite** - Build tool para desenvolvimento rápido
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vue Router** - Roteamento para Vue.js
- **Axios** - Cliente HTTP para comunicação com API

## Funcionalidades

### Autenticação
- Login de administrador
- Autenticação via token JWT
- Proteção de rotas autenticadas

### Gestão de Pecuaristas (Clientes)
- Cadastro de novos pecuaristas
- Listagem com filtros e busca
- Edição de informações
- Ativação/Desativação de registros

### Gestão de Cochos
- Cadastro de cochos com informações detalhadas
- Associação de sensores
- Configuração de limite crítico de enchimento
- Agendamento de horários de execução
- Vinculação com pecuaristas
- Cadastro de endereço com integração de CEP
- Listagem com filtros por status e pecuarista
- Edição e gerenciamento de status

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── layouts/         # Componentes de layout (Header, Footer, Sidebar)
├── pages/               # Páginas da aplicação
│   ├── Authentication/  # Página de login
│   ├── Register/        # Formulários de cadastro
│   ├── Query/           # Páginas de consulta/listagem
│   └── views/           # Views gerais (Home, 404)
├── router/              # Configuração de rotas
├── core/                # Middlewares e utilitários
├── main.ts              # Ponto de entrada da aplicação
└── App.vue              # Componente raiz
```

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd cocho-front
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a URL da API no arquivo `api-config.ts`:
```typescript
export const API_BASE_URL = "http://localhost:3000/api"
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## Requisitos

- Node.js 16+
- npm ou yarn
- API Backend rodando (configurada em `api-config.ts`)

## Licença

Este projeto é privado e de uso restrito.
