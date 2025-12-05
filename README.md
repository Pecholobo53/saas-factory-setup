# 🏭 SaaS Factory V2 - De Idea a Producción en Minutos

> *"La línea de ensamblaje de Ford aplicada al software."*

Sistema de comandos inteligentes que crea aplicaciones **production-ready** con IA.

## 🎯 ¿Qué es SaaS Factory?

**Un comando. Todo listo.**

```bash
cd ~/mi-nuevo-proyecto
saas-factory
```

La IA ya sabe cómo trabajar. Tú solo describes lo que quieres construir.

---

## 🎨 Filosofía

### Henry Ford
> "Pueden tener el coche del color que quieran, siempre que sea negro."

**Un solo stack perfeccionado** en lugar de mil opciones que paralizan.

### Elon Musk
> "La máquina que construye la máquina es más importante que la máquina."

**Los comandos que construyen el SaaS** son más importantes que el SaaS mismo.

### Guillermo Rauch (Next.js Conf 2025)
> "For a human under 100ms is all the same. But for an agent loop, every millisecond counts."

**Turbopack (10ms) vs Webpack (200ms):**
- 100 iteraciones de diseño → **30 segundos** vs **20 minutos**
- La diferencia entre una herramienta útil y una **mágica**

---

## 🚀 Instalación (2 minutos)

### 1. Clona el repositorio
```bash
git clone https://github.com/daniel-carreon/saas-factory-setup.git
cd saas-factory-setup
```

### 2. Abre en Claude Code
```bash
claude .
```

### 3. Pídele que configure el alias
```
Configura el alias "saas-factory" en mi terminal
```

Claude Code detecta tu sistema (zsh/bash) y configura todo automáticamente.

---

## 📦 ¿Qué Obtienes?

Cuando ejecutas `saas-factory`, obtienes un **proyecto Next.js 16 completo** listo para producción:

```
tu-proyecto/
├── CLAUDE.md              # System prompt - La IA lee esto automáticamente
├── .mcp.json              # El Cyborg (Next.js, Playwright, Supabase)
├── src/                   # App con Feature-First Architecture
├── .claude/commands/      # /new-app, /landing, etc.
└── package.json           # Next.js 16, React 19, Tailwind 3.4
```

**No es un template vacío. Es production-ready desde el minuto 0.**

---

## 🏗️ El Golden Path

**Un solo stack. Sin decisiones innecesarias.**

| Capa | Tecnología |
|------|------------|
| Frontend | Next.js 16 + React 19 + TypeScript |
| Estilos | Tailwind CSS 3.4 + shadcn/ui |
| Backend | Supabase (Auth + Database) |
| Testing | Playwright MCP |
| Deploy | Vercel |

---

## 🔥 El Cyborg - 3 MCPs Trabajando Juntos

```typescript
// next.config.ts - Esta línea lo cambia todo
experimental: { mcpServer: true }
```

| MCP | Rol | Superpoder |
|-----|-----|------------|
| 🧠 **Next.js DevTools** | Cerebro | Lee errores/logs en tiempo real vía `/_next/mcp` |
| 👁️ **Playwright** | Ojos | Captura screenshots, valida UX visualmente |
| 🗄️ **Supabase** | Backend | Ejecuta SQL, migraciones, consulta logs |

**Sin MCPs:** La IA adivina qué está roto.
**Con MCPs:** La IA **ve** exactamente qué está roto y por qué.

---

## 🛠️ Comandos Disponibles

### `/new-app` - El Arquitecto
Actúa como **Consultor de Negocio Senior**. Te entrevista y genera `BUSINESS_LOGIC.md` con la especificación técnica completa.

### `/landing` - The Money Maker
Actúa como **Copywriter + Diseñador**. Crea landing pages de alta conversión validadas visualmente con Playwright.

---

## 📋 Workflow: De 0 a Producción

### 1. Crear proyecto
```bash
mkdir mi-saas && cd mi-saas
saas-factory
```

### 2. Instalar y configurar
```bash
npm install
cp .env.example .env.local  # Añade credenciales de Supabase
```

### 3. Prender el MCP 🔥
```bash
npm run dev
# Output: - MCP Server: http://localhost:3000/_next/mcp ✓
```

### 4. Conectar Claude Code
```bash
claude .  # En otra terminal
```

### 5. Definir el negocio
```
/new-app
```

Responde las preguntas. El agente genera `BUSINESS_LOGIC.md`.

### 6. Construir
```
Implementa las features según BUSINESS_LOGIC.md
```

La IA usa el MCP para ver errores en tiempo real mientras construye.

### 7. Crear landing (opcional)
```
/landing
```

El agente itera el diseño hasta pixel-perfect.

---

## 🧪 ¿Cómo Saber que el MCP Funciona?

**Prueba:** Rompe algo a propósito
```typescript
// src/app/page.tsx
const broken = undefined.foo  // 💥
```

**Con MCP activo**, Claude ve:
```
TypeError: Cannot read property 'foo' of undefined
  at Home (page.tsx:2:23)
```

**Sin MCP**, Claude adivina.

---

## ❓ FAQ

**¿Por qué solo Next.js?**
Hace el 100% del trabajo para el 95% de los SaaS B2B. No necesitas Python ni backends separados.

**¿Por qué Email/Password en lugar de OAuth?**
Evita bloqueos de bots durante testing. OAuth requiere verificación que complica el desarrollo.

**¿Puedo personalizar?**
Sí. Todo está diseñado para ser extendido. `CLAUDE.md` es tu punto de entrada.

---

## 🤝 Contribuir

1. Abre un issue con tu propuesta
2. Fork y PR son bienvenidos
3. Mantén la filosofía: **simplicidad radical**

---

## 📖 Documentación

Para detalles técnicos, ver:
- `CLAUDE.md` (root) - System prompt del factory
- `saas-factory/CLAUDE.md` - System prompt de cada app
- `.claude/prompts/` - Metodología completa
- `.claude/commands/` - Cómo funcionan los comandos

---

**SaaS Factory V2** | *"De la idea a producción en minutos, no en meses."*

```
        ┌─────────────────────────────────────┐
        │                                     │
        │   saas-factory  →  /new-app  →  🚀  │
        │                                     │
        └─────────────────────────────────────┘
```
