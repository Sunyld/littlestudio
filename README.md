# Little Studio - Portfólio de Estúdio de Fotografia

Website moderno e cinematográfico para estúdio de fotografia profissional, desenvolvido com Next.js, Tailwind CSS, Framer Motion e Supabase.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações cinematográficas
- **Lenis** - Scroll suave
- **Supabase** - Backend e banco de dados
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase (para integração completa)

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone <repository-url>
cd project
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e adicione suas credenciais do Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. Execute o servidor de desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
project/
├── app/                    # Páginas e rotas (App Router)
│   ├── page.tsx           # Home
│   ├── portfolio/         # Portfólio
│   ├── services/          # Serviços
│   ├── budget/            # Solicitação de orçamento
│   ├── team/              # Equipe
│   ├── contact/           # Contato
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── CustomCursor.tsx   # Cursor customizado
│   ├── Navigation.tsx     # Navegação
│   ├── SmoothScroll.tsx   # Scroll suave
│   └── ScrollIndicator.tsx
├── lib/                   # Utilitários
│   ├── supabase.ts        # Cliente Supabase
│   └── utils.ts           # Funções utilitárias
└── public/                # Arquivos estáticos
```

## 🗄️ Estrutura do Banco de Dados (Supabase)

### Tabela: `services`
```sql
id: uuid (primary key)
title: text
description: text
image_url: text
```

### Tabela: `portfolio`
```sql
id: uuid (primary key)
title: text
image_url: text
category: text
```

### Tabela: `team`
```sql
id: uuid (primary key)
name: text
role: text
bio: text
photo_url: text
```

### Tabela: `budget_requests`
```sql
id: uuid (primary key)
name: text
email: text
phone: text
service_type: text
event_date: date (nullable)
message: text
created_at: timestamp
```

## 🎨 Características

- ✨ Design minimalista e premium
- 🎬 Animações cinematográficas suaves
- 📱 Totalmente responsivo
- 🖱️ Cursor customizado
- 📜 Scroll suave com Lenis
- 🎯 Foco em imagens grandes e imersivas
- 🌙 Tema escuro elegante
- ⚡ Performance otimizada

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter
- `npm run typecheck` - Verifica tipos TypeScript

## 🔧 Configuração do Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Crie as tabelas conforme a estrutura acima
3. Configure as políticas RLS (Row Level Security) conforme necessário
4. Adicione as credenciais no arquivo `.env.local`

## 📄 Licença

Este projeto é privado e proprietário.








