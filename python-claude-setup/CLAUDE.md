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
**Frontend:**
- **Runtime**: Node.js + TypeScript
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Testing**: Jest + React Testing Library
- **Schema Validation**: Zod

**Backend:**
- **Runtime**: Python 3.10+
- **Framework**: FastAPI
- **ORM**: SQLModel (Pydantic + SQLAlchemy)
- **Database**: PostgreSQL/Supabase
- **Testing**: pytest
- **Task Queue**: Celery (optional)

### Hybrid Strategic Architecture

**Enfoque: Arquitectura Híbrida Estratégica optimizada para desarrollo asistido por IA**

Este proyecto combina **Feature-First en Frontend** con **Clean Architecture en Backend**, cada uno optimizado para su contexto específico.

#### Frontend: Feature-First
```
frontend/src/
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

#### Backend: Clean Architecture
```
backend/
├── main.py                   # Punto de entrada FastAPI
│
├── api/                      # 🌐 Capa de Interfaz/Presentación
│   ├── auth_deps.py         # Dependencias de autenticación
│   ├── [feature]_router.py  # Endpoints por feature
│   └── ...
│
├── application/              # 🎯 Casos de Uso/Orquestación
│   └── services/            # Servicios de aplicación
│       └── [feature]_service.py
│
├── domain/                   # 💎 Lógica de Negocio Pura
│   ├── models/              # Entidades (SQLModel)
│   ├── services/            # Servicios de dominio
│   ├── config/              # Configuración de dominio
│   └── interfaces/          # Abstracciones/Contratos
│
└── infrastructure/           # 🔧 Implementaciones Externas
    ├── persistence/         # Repositorios, DB access
    ├── external_apis/       # Clientes APIs externas
    └── config/              # Configuración de infraestructura
```

### Estructura de Proyecto Completa
```
proyecto/
├── frontend/                # Next.js - Feature-First Architecture
│   ├── src/
│   │   ├── app/
│   │   ├── features/
│   │   └── shared/
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                 # FastAPI - Clean Architecture
│   ├── main.py
│   ├── api/
│   ├── application/
│   ├── domain/
│   ├── infrastructure/
│   ├── requirements.txt
│   └── pytest.ini
│
├── supabase/                # Migraciones de BD
│   └── migrations/
│
├── .claude/                 # Configuración Claude Code
│
└── docs/                    # Documentación técnica
```

> **🤖 ¿Por qué esta arquitectura híbrida?**
>
> Esta estructura fue diseñada específicamente para **desarrollo asistido por IA**. La combinación de Feature-First (frontend) y Clean Architecture (backend) permite que los AI assistants:
> - **Localicen rápidamente** el código relacionado con una funcionalidad
> - **Entiendan el contexto** sin navegar múltiples archivos dispersos
> - **Mantengan la separación de responsabilidades** al generar código nuevo
> - **Escalen el proyecto** añadiendo features sin afectar el código existente
> - **Generen código consistente** siguiendo los patrones establecidos en cada capa
>
> *La IA puede trabajar de forma más efectiva cuando la información está organizada siguiendo principios claros y predecibles.*

## 🛠️ Comandos Importantes

### Frontend Development
- `cd frontend && npm run dev` - Servidor de desarrollo Frontend (auto-detecta puerto 3000-3006)
- `cd frontend && npm run build` - Build para producción
- `cd frontend && npm run test` - Ejecutar tests Frontend

### Backend Development
- `cd backend && python dev_server.py` - Servidor de desarrollo Backend (auto-detecta puerto 8000-8006)
- `cd backend && python -m pytest` - Ejecutar tests Backend
- `cd backend && python -m pytest --cov` - Coverage report

### Git Workflow
- `npm run commit` - Commit con Conventional Commits
- `npm run pre-commit` - Hook de pre-commit
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

### Component Patterns
```typescript
// ✅ GOOD: Proper component structure
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

## 🧪 Testing Strategy

### Test-Driven Development (TDD)
1. **Red**: Escribe el test que falla
2. **Green**: Implementa código mínimo para pasar
3. **Refactor**: Mejora el código manteniendo tests verdes

### Test Structure (AAA Pattern)
```typescript
// ✅ GOOD: Clear test structure
test('should calculate total with tax', () => {
  // Arrange
  const items = [{ price: 100 }, { price: 200 }];
  const taxRate = 0.1;
  
  // Act
  const result = calculateTotal(items, taxRate);
  
  // Assert  
  expect(result).toBe(330);
});
```

### Coverage Goals
- **Unit Tests**: 80%+ coverage
- **Integration Tests**: Critical paths
- **E2E Tests**: Main user journeys

## 🔒 Security Best Practices

### Input Validation
- Validate all user inputs
- Sanitize data before processing
- Use schema validation (Zod, Yup, etc.)

### Authentication & Authorization
- JWT tokens con expiración
- Role-based access control
- Secure session management

### Data Protection
- Never log sensitive data
- Encrypt data at rest
- Use HTTPS everywhere

## ⚡ Performance Guidelines

### Code Splitting
- Route-based splitting
- Component lazy loading
- Dynamic imports

### State Management
- Local state first
- Global state only when needed
- Memoization for expensive computations

### Database Optimization
- Index frequently queried columns
- Use pagination for large datasets
- Cache repeated queries

## 🔄 Git Workflow & Repository Rules

### Branch Strategy
- `main` - Production ready code
- `develop` - Integration branch
- `feature/TICKET-123-description` - Feature branches
- `hotfix/TICKET-456-description` - Hotfixes

### Commit Convention (Conventional Commits)
```
type(scope): description

feat(auth): add OAuth2 integration
fix(api): handle null user response  
docs(readme): update installation steps
```

### Pull Request Rules
- **No direct commits** a `main` o `develop`
- **Require PR review** antes de merge
- **All tests must pass** antes de merge
- **Squash and merge** para mantener historia limpia

## ❌ No Hacer (Critical)

### Code Quality
- ❌ No usar `any` en TypeScript
- ❌ No hacer commits sin tests
- ❌ No omitir manejo de errores
- ❌ No hardcodear configuraciones

### Security  
- ❌ No exponer secrets en código
- ❌ No loggear información sensible
- ❌ No saltarse validación de entrada
- ❌ No usar HTTP en producción

### Architecture
- ❌ No editar archivos en `src/legacy/`
- ❌ No crear dependencias circulares
- ❌ No mezclar concerns en un componente
- ❌ No usar global state innecesariamente

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

### Best Practices
- ❌ **NO usar `uvicorn main:app` directamente** → puerto hardcodeado
- ✅ **SÍ usar `python dev_server.py`** → auto-port detection
- ❌ **NO usar `next dev` directamente** → puerto hardcodeado
- ✅ **SÍ usar `npm run dev`** → auto-port detection

---

*Este archivo es la fuente de verdad para desarrollo en este proyecto. Todas las decisiones de código deben alinearse con estos principios.*