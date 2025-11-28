# Proyecto: [NOMBRE_DEL_PROYECTO]

## 🎯 Principios de Desarrollo (Context Engineering)

### Design Philosophy
- **KISS**: Keep It Simple, Stupid - Prefiere soluciones simples
- **YAGNI**: You Aren't Gonna Need It - Implementa solo lo necesario  
- **DRY**: Don't Repeat Yourself - Evita duplicación de código
- **SOLID**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion

### Descripción del Proyecto
[Breve descripción de qué hace tu proyecto y sus características principales]

## 🏗️ Tech Stack & Architecture

### Core Stack
- **Runtime**: Node.js + TypeScript
- **Framework**: Next.js 16 (App Router)
- **Base de Datos**: PostgreSQL/Supabase
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Testing**: Jest + React Testing Library
- **Schema Validation**: Zod

### Architecture: Feature-First

**Enfoque: Arquitectura Feature-First optimizada para desarrollo asistido por IA**

Este proyecto usa una arquitectura **Feature-First** donde cada feature es independiente y contiene toda la lógica relacionada (componentes, hooks, servicios, tipos).

#### Frontend: Feature-First
```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Rutas de autenticación (grupo)
│   ├── (main)/              # Rutas principales (grupo)
│   ├── layout.tsx           # Layout root
│   └── page.tsx             # Home page
│
├── features/                 # 🎯 Organizadas por funcionalidad
│   ├── auth/                # Feature: Autenticación
│   │   ├── components/      # Componentes específicos (LoginForm, etc.)
│   │   ├── hooks/           # Hooks específicos (useAuth, etc.)
│   │   ├── services/        # API calls (authService.ts)
│   │   ├── types/           # Tipos específicos (User, Session, etc.)
│   │   └── store/           # Estado local (authStore.ts)
│   │
│   ├── dashboard/           # Feature: Dashboard
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── store/
│   │
│   └── [feature]/           # Otras features...
│
└── shared/                   # Código reutilizable
    ├── components/          # UI components genéricos (Button, Card, etc.)
    ├── hooks/               # Hooks genéricos (useDebounce, useLocalStorage, etc.)
    ├── stores/              # Estado global (appStore.ts, userStore.ts)
    ├── types/               # Tipos compartidos (api.ts, domain.ts)
    ├── utils/               # Funciones utilitarias
    ├── lib/                 # Configuraciones (supabase.ts, axios.ts)
    ├── constants/           # Constantes de la app
    └── assets/              # Imágenes, iconos, etc.
```

### Estructura de Proyecto Completa
```
proyecto/
├── src/
│   ├── app/                 # Next.js routes
│   ├── features/            # Features por funcionalidad
│   └── shared/              # Código reutilizable
├── public/                  # Archivos estáticos
├── supabase/                # Migraciones de BD
│   └── migrations/
├── .claude/                 # Configuración Claude Code
├── docs/                    # Documentación técnica
├── package.json
├── tsconfig.json
└── next.config.js
```

> **🤖 ¿Por qué Feature-First?**
>
> Esta estructura fue diseñada específicamente para **desarrollo asistido por IA**. La organización clara por features permite que los AI assistants:
> - **Localicen rápidamente** todo el código relacionado con una feature en un mismo lugar
> - **Entiendan el contexto completo** sin navegar múltiples directorios
> - **Mantengan la separación de responsabilidades** al generar código nuevo
> - **Escalen el proyecto** añadiendo features sin afectar el código existente
> - **Generen código consistente** siguiendo patrones establecidos por feature
>
> *La IA puede trabajar de forma más efectiva cuando la información está organizada siguiendo principios claros y predecibles.*

## 🔌 MCPs Clave (Backend as a Service)

### Chrome DevTools MCP - "Ojos" para el Agente
Te da visibilidad del navegador para desarrollo visual.

| Comando | Uso |
|---------|-----|
| `take_screenshot` | Captura visual de la página |
| `take_snapshot` | Estado del DOM (árbol de accesibilidad) |
| `click` / `fill` | Interactuar con elementos |
| `list_console_messages` | Ver errores de consola |
| `list_network_requests` | Debug de llamadas API/fetch |
| `resize_page` | Probar responsive (mobile/tablet/desktop) |

**Cuándo usar**: Bucle agéntico visual → código → screenshot → comparar → iterar hasta pixel-perfect.

### Supabase MCP - Acceso Directo a BDD
Interactúa con PostgreSQL sin CLI ni migraciones manuales.

| Comando | Uso |
|---------|-----|
| `execute_sql` | SELECT, INSERT, UPDATE, DELETE |
| `apply_migration` | CREATE TABLE, ALTER, índices, RLS |
| `list_tables` | Ver estructura de BD |
| `get_logs` | Debug de auth/postgres/edge-functions |
| `get_advisors` | Detectar tablas sin RLS (seguridad) |

**Cuándo usar**: Siempre que necesites consultar o modificar la base de datos. NO uses CLI ni apliques migraciones manualmente.

> Ver `.claude/prompts/supabase-mcp-baas.md` para guía completa.

## 🛠️ Comandos Importantes

### Development
- `npm run dev` - Servidor de desarrollo (auto-detecta puerto 3000-3006)
- `npm run build` - Build para producción
- `npm run preview` - Preview del build

### Quality Assurance
- `npm run test` - Ejecutar tests
- `npm run test:watch` - Tests en modo watch
- `npm run test:coverage` - Coverage report
- `npm run lint` - ESLint
- `npm run lint:fix` - Fix automático de linting
- `npm run typecheck` - Verificación de tipos TypeScript

### Skills Management
- `python .claude/skills/skill-creator/scripts/init_skill.py my-skill` - Crear nuevo skill
- `python .claude/skills/skill-creator/scripts/quick_validate.py ./my-skill` - Validar skill
- `python .claude/skills/skill-creator/scripts/package_skill.py ./my-skill` - Empaquetar skill

### Git Workflow
- `npm run commit` - Commit con Conventional Commits
- `npm run pre-commit` - Hook de pre-commit

## 📝 Convenciones de Código

### File & Function Limits
- **Archivos**: Máximo 500 líneas
- **Funciones**: Máximo 50 líneas
- **Componentes**: Una responsabilidad clara

### Naming Conventions
- **Variables/Functions**: `camelCase`
- **Components**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case.extension`
- **Folders**: `kebab-case`

### TypeScript Guidelines
- **Siempre usar type hints** para function signatures
- **Interfaces** para object shapes
- **Types** para unions y primitives
- **Evitar `any`** - usar `unknown` si es necesario

### Patrones de Componentes
```typescript
// ✅ BIEN: Estructura de componente correcta
interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export function Button({ children, variant = 'primary', onClick }: Props) {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}
```

## 🧪 Estrategia de Testing

### Desarrollo Guiado por Tests (TDD)
1. **Rojo**: Escribe el test que falla
2. **Verde**: Implementa código mínimo para pasar
3. **Refactorizar**: Mejora el código manteniendo tests verdes

### Estructura de Tests (Patrón AAA)
```typescript
// ✅ BIEN: Estructura de test clara
test('should calculate total with tax', () => {
  // Preparar (Arrange)
  const items = [{ price: 100 }, { price: 200 }];
  const taxRate = 0.1;

  // Actuar (Act)
  const result = calculateTotal(items, taxRate);

  // Afirmar (Assert)
  expect(result).toBe(330);
});
```

### Objetivos de Cobertura
- **Tests Unitarios**: 80%+ de cobertura
- **Tests de Integración**: Rutas críticas
- **Tests E2E**: Flujos principales de usuario

## 🔒 Mejores Prácticas de Seguridad

### Validación de Entrada
- Validar todas las entradas de usuario
- Sanitizar datos antes de procesar
- Usar validación de esquema (Zod, Yup, etc.)

### Autenticación y Autorización
- Tokens JWT con expiración
- Control de acceso basado en roles
- Gestión segura de sesiones

### Protección de Datos
- Nunca registrar datos sensibles
- Cifrar datos en reposo
- Usar HTTPS en todo lugar

## ⚡ Guías de Rendimiento

### División de Código
- División basada en rutas
- Carga diferida de componentes
- Importaciones dinámicas

### Gestión de Estado
- Estado local primero
- Estado global solo cuando sea necesario
- Memoización para cálculos costosos

### Optimización de Base de Datos
- Indexar columnas consultadas frecuentemente
- Usar paginación para conjuntos grandes de datos
- Cachear consultas repetidas

## 🔄 Flujo de Git y Reglas de Repositorio

### Estrategia de Ramas
- `main` - Código listo para producción
- `develop` - Rama de integración
- `feature/TICKET-123-descripcion` - Ramas de features
- `hotfix/TICKET-456-descripcion` - Hotfixes

### Convención de Commits (Conventional Commits)
```
tipo(alcance): descripción

feat(auth): agregar integración OAuth2
fix(api): manejar respuesta de usuario nula
docs(readme): actualizar pasos de instalación
```

### Reglas de Pull Request
- **Sin commits directos** a `main` o `develop`
- **Requerir revisión de PR** antes de merge
- **Todos los tests deben pasar** antes de merge
- **Squash and merge** para mantener historia limpia

## ❌ No Hacer (Critical)

### Calidad de Código
- ❌ No usar `any` en TypeScript
- ❌ No hacer commits sin tests
- ❌ No omitir manejo de errores
- ❌ No hardcodear configuraciones

### Seguridad
- ❌ No exponer secrets en código
- ❌ No loggear información sensible
- ❌ No saltarse validación de entrada
- ❌ No usar HTTP en producción

### Arquitectura
- ❌ No editar archivos en `src/legacy/`
- ❌ No crear dependencias circulares
- ❌ No mezclar responsabilidades en un componente
- ❌ No usar estado global innecesariamente

## 📚 Referencias y Contexto

### Archivos del Proyecto
- Ver @README.md para resumen detallado
- Ver @package.json para scripts disponibles
- Ver @.claude/docs/ para flujos y documentación
- Ver @.mcp.json.examples para MCPs disponibles

### Dependencias Externas
- Documentación oficial de frameworks
- Guías de mejores prácticas
- Guías de seguridad (OWASP)

## 🤖 Guías para el Asistente IA

### Al Sugerir Código
- Siempre incluir tipos en TypeScript
- Seguir principios de CLAUDE.md
- Implementar manejo de errores
- Incluir tests cuando sea relevante

### Al Revisar Código
- Verificar adherencia a principios SOLID
- Validar mejores prácticas de seguridad
- Sugerir optimizaciones de rendimiento
- Recomendar mejoras en testing

### Prioridad de Contexto
1. **Reglas de CLAUDE.md** (mayor prioridad)
2. **.claude/docs/** flujos y guías
3. **Archivos del proyecto** (package.json, etc.)
4. **Mejores prácticas generales**

## 🚀 Pre-Development Validation Protocol

### API & Dependencies Current Check
**CRÍTICO**: Siempre verificar antes de asumir
- [ ] ✅ Verificar que las versiones de APIs/modelos existen (ej: GPT-5 no existe aún)
- [ ] ✅ Confirmar que las librerías están actualizadas
- [ ] ✅ Validar endpoints externos funcionan
- [ ] ✅ Tener fallbacks para todas las dependencias externas

### Simplicity-First Development
- [ ] ✅ Crear versión simplificada primero (`simple_main.py`)
- [ ] ✅ Probar funcionalidad básica antes de agregar complejidad
- [ ] ✅ Mantener siempre una versión "modo demo" que funcione
- [ ] ✅ Implementar mock data para casos donde servicios externos fallen

### Incremental Validation Strategy
- [ ] ✅ Probar cada endpoint inmediatamente después de crearlo
- [ ] ✅ Usar TodoWrite para tracking sistemático de progreso
- [ ] ✅ Validar UI después de cada cambio importante
- [ ] ✅ Mantener logs detallados de errores para debugging

## 🔄 Error-First Development Protocol

### Manejo de Errores Predictivos
```python
# ✅ GOOD: Siempre incluir fallbacks
try:
    ai_result = await openai_call()
except Exception as e:
    print(f"AI call failed: {e}")
    ai_result = get_mock_fallback()  # Siempre tener fallback
```

### Debugging Sin Visibilidad Directa
- **Usar logs extensivos** con emojis para fácil identificación
- **Crear endpoints de testing** (`/test-connection`, `/health`)  
- **Implementar timeouts** en todas las llamadas externas
- **Hacer requests incrementales** - nunca asumir que algo complejo funcionará

## 🔌 Auto Port Detection (CRÍTICO para desarrollo)

### Problema: "EADDRINUSE - Puerto Ocupado"
**Solución implementada:** Scripts que auto-detectan puertos disponibles

### Frontend (Next.js) - Puertos 3000-3006
**Script:** `frontend/scripts/dev-server.js`

```javascript
// Auto-detecta primer puerto disponible en rango 3000-3006
// Checks both IPv4 (0.0.0.0) and IPv6 (::)
npm run dev  // Usa auto-port detection
```

**Características:**
- ✅ Chequea puertos 3000-3006 secuencialmente
- ✅ Compatible con IPv4 y IPv6 (Next.js usa `::`)
- ✅ Fallback automático si puerto ocupado
- ✅ Graceful shutdown (SIGINT/SIGTERM)

### Backend (FastAPI) - Puertos 8000-8006
**Script:** `backend/dev_server.py`

```python
# Auto-detecta primer puerto disponible en rango 8000-8006
python dev_server.py  # Usa auto-port detection
```

**Características:**
- ✅ Chequea puertos 8000-8006 secuencialmente
- ✅ Bind a `0.0.0.0` para acceso desde cualquier interface
- ✅ Fallback automático si puerto ocupado
- ✅ Keyboard interrupt handling

### CORS Backend Configuration
**Importante:** Backend CORS está configurado para soportar puertos dinámicos:

```python
# backend/main.py
ALLOWED_ORIGINS = [
    "https://tu-app.vercel.app",  # Production
    *[f"http://localhost:{port}" for port in range(3000, 3007)],
    *[f"http://127.0.0.1:{port}" for port in range(3000, 3007)],
]
```

### Best Practices
- ❌ **NO usar `uvicorn main:app` directamente** → puerto hardcodeado
- ✅ **SÍ usar `python dev_server.py`** → auto-port detection
- ❌ **NO usar `next dev` directamente** → puerto hardcodeado
- ✅ **SÍ usar `npm run dev`** → auto-port detection

### Debugging Port Issues
```bash
# Ver qué proceso está usando un puerto
lsof -i :3000
lsof -i :8000

# Matar proceso específico
kill -9 <PID>

# Matar todos los servidores de desarrollo
pkill -f "next dev"
pkill -f "uvicorn"
```

## 🎯 Advanced Real-Time Debugging (Expert Level)

### Background Log Streaming Setup
```bash
# 1. Start dev servers with log capture
npm run dev 2>&1 | tee frontend.log
uvicorn main:app --reload 2>&1 | tee backend.log

# 2. Monitor logs in real-time (Claude Code)
tail -f frontend.log | claude -p "Alert me of compilation errors"

# 3. Use Background Commands (Ctrl+B)
npm run dev  # Press Ctrl+B to run in background
# Then use BashOutput tool to monitor status
```

### Claude Code Web Interface
```bash
# Install web interface for visual log monitoring
npm install -g claude-code-web
claude-code-web --debug  # Enhanced logging mode

# Or use alternative: 
npx claude-code-web --dev  # Development mode with verbose logs
```

### Multi-Terminal Monitoring Pattern
```bash
# Terminal 1: Backend with structured logging
python -m uvicorn main:app --reload --log-level debug

# Terminal 2: Frontend with compilation monitoring
npm run dev -- --verbose

# Terminal 3: Claude Code with combined log analysis
tail -f *.log | claude -p "Debug any compilation or runtime errors immediately"
```

### Background Task Management
- **Use Ctrl+B** para run commands in background
- **BashOutput tool** para retrieving incremental output
- **Filter logs** for specific patterns (ERROR, WARN, Compil)
- **Status tracking** (running/completed/killed)

## 🎨 Bucle Agéntico con Playwright MCP

### Metodología de Desarrollo Visual
**Problema:** IA genera frontends genéricos sin poder ver el resultado  
**Solución:** Playwright MCP otorga "ojos" al AI para iteración visual

### Bucle Agéntico Frontend
```
1. Código UI → 2. Playwright Screenshot → 3. Visual Compare → 4. Iterate
```

### Playwright MCP Integration
- **browser_snapshot**: Captura estado actual de la página
- **browser_take_screenshot**: Screenshots para comparación visual
- **browser_navigate**: Navegación automática para testing
- **browser_click/type**: Interacción automatizada con UI
- **browser_resize**: Testing responsive en diferentes viewports

### Visual Development Protocol
1. **Implementar componente** siguiendo specs
2. **Capturar screenshot** con Playwright
3. **Comparar vs design requirements**
4. **Iterar automáticamente** hasta pixel-perfect
5. **Validar responsiveness** en mobile/tablet/desktop

### Integration con Design Review
- Activar review visual automático post-implementación
- Usar criterios objetivos de diseño (spacing, colors, typography)
- Generar feedback específico y accionable
- Prevenir frontends genéricos mediante validación visual

---

*Este archivo es la fuente de verdad para desarrollo en este proyecto. Todas las decisiones de código deben alinearse con estos principios.*