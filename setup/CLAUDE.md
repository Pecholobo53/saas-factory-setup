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
[Definir tu tech stack según las necesidades del proyecto]

**Ejemplos de casos de uso:**
- Scripts de automatización
- Herramientas CLI
- POCs y experimentos
- Tests y benchmarks
- Utilidades y herramientas

### Architecture Guidelines

**Enfoque: Organización Clara y Modular**

Independientemente del framework elegido, mantén estos principios:

```
proyecto/
├── src/                     # Código fuente principal
│   ├── core/               # Lógica de negocio central
│   ├── utils/              # Funciones utilitarias
│   ├── config/             # Configuración
│   └── tests/              # Tests unitarios
│
├── scripts/                 # Scripts de automatización
├── docs/                    # Documentación técnica
├── .claude/                 # Configuración Claude Code
└── [archivos de config]     # package.json, requirements.txt, etc.
```

> **🤖 ¿Por qué esta organización?**
>
> Esta estructura fue diseñada para **desarrollo asistido por IA**:
> - **Localización clara** del código por responsabilidad
> - **Contexto completo** disponible de forma organizada
> - **Separación de concerns** natural
> - **Escalabilidad** sin necesidad de reestructurar
> - **Consistencia** en la generación de código por IA
>
> *La IA puede trabajar de forma más efectiva cuando la información está organizada siguiendo principios claros y predecibles.*

## 🛠️ Comandos Importantes

### Development
[Definir comandos según tu proyecto]

Ejemplos:
- `npm run dev` / `python main.py` - Ejecutar en desarrollo
- `npm run build` / `python -m build` - Build para producción
- `npm test` / `pytest` - Ejecutar tests

### Git Workflow
- `git commit -m "type(scope): description"` - Commit con Conventional Commits
- `git push origin feature/branch-name` - Push a rama remota
- `git commit -m "type(scope): description"` - Commit con Conventional Commits
- `git push origin feature/branch-name` - Push a rama remota

## 📝 Convenciones de Código

### File & Function Limits
- **Archivos**: Máximo 500 líneas
- **Funciones**: Máximo 50 líneas
- **Módulos**: Una responsabilidad clara

### Naming Conventions
- **Variables/Functions**: `camelCase` (JS/TS) o `snake_case` (Python)
- **Classes**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case.extension` o `snake_case.py`
- **Folders**: `kebab-case` o `snake_case`

### Type Safety Guidelines
- **Siempre usar type hints** cuando el lenguaje lo permita
- **Validar inputs** antes de procesarlos
- **Evitar tipos dinámicos sin necesidad** - preferir tipos explícitos
- **Documentar tipos complejos** con comentarios claros

### Code Patterns
```python
# ✅ GOOD: Clear function structure
def process_data(items: list[dict], options: dict) -> dict:
    """
    Process data items with given options.

    Args:
        items: List of data items to process
        options: Configuration options

    Returns:
        Processed result dictionary
    """
    if not items:
        return {"status": "empty", "result": []}

    result = []
    for item in items:
        processed = apply_options(item, options)
        result.append(processed)

    return {"status": "success", "result": result}
```

## 🧪 Testing Strategy

### Test-Driven Development (TDD)
1. **Red**: Escribe el test que falla
2. **Green**: Implementa código mínimo para pasar
3. **Refactor**: Mejora el código manteniendo tests verdes

### Test Structure (AAA Pattern)
```python
# ✅ GOOD: Clear test structure
def test_process_data_with_valid_input():
    # Arrange
    items = [{"value": 10}, {"value": 20}]
    options = {"multiplier": 2}

    # Act
    result = process_data(items, options)

    # Assert
    assert result["status"] == "success"
    assert len(result["result"]) == 2
```

### Coverage Goals
- **Unit Tests**: 80%+ coverage
- **Integration Tests**: Critical paths
- **E2E Tests**: Main user journeys

## 🔒 Security Best Practices

### Input Validation
- Validate all user inputs
- Sanitize data before processing
- Use schema validation libraries

### Secrets Management
- Never hardcode secrets
- Use environment variables
- Keep .env files out of version control

### Data Protection
- Never log sensitive data
- Encrypt data at rest
- Use secure connections (HTTPS, TLS)

## ⚡ Performance Guidelines

### Code Optimization
- Profile before optimizing
- Cache repeated computations
- Use appropriate data structures

### Resource Management
- Close files and connections properly
- Implement timeouts for external calls
- Monitor memory usage in long-running processes

## 🔄 Git Workflow & Repository Rules

### Branch Strategy
- `main` - Production ready code
- `develop` - Integration branch
- `feature/TICKET-123-description` - Feature branches
- `hotfix/TICKET-456-description` - Hotfixes

### Commit Convention (Conventional Commits)
```
type(scope): description

feat(cli): add new command for data export
fix(parser): handle empty input correctly
docs(readme): update installation steps
test(core): add unit tests for processor
```

### Pull Request Rules
- **No direct commits** a `main` o `develop`
- **Require PR review** antes de merge
- **All tests must pass** antes de merge
- **Squash and merge** para mantener historia limpia

## ❌ No Hacer (Critical)

### Code Quality
- ❌ No ignorar type errors
- ❌ No hacer commits sin tests
- ❌ No omitir manejo de errores
- ❌ No hardcodear configuraciones

### Security
- ❌ No exponer secrets en código
- ❌ No loggear información sensible
- ❌ No saltarse validación de entrada
- ❌ No usar conexiones inseguras en producción

### Architecture
- ❌ No crear dependencias circulares
- ❌ No mezclar concerns en un módulo
- ❌ No duplicar lógica de negocio
- ❌ No ignorar warnings del linter

## 🔄 Error-First Development Protocol

### Manejo de Errores Predictivos
```python
# ✅ GOOD: Siempre incluir fallbacks
try:
    external_result = call_external_api()
except Exception as e:
    logger.error(f"External API failed: {e}")
    external_result = get_mock_fallback()  # Siempre tener fallback
```

### Debugging Sin Visibilidad Directa
- **Usar logs extensivos** con niveles claros (DEBUG, INFO, ERROR)
- **Crear health checks** para validar dependencias
- **Implementar timeouts** en todas las llamadas externas
- **Hacer requests incrementales** - nunca asumir que algo complejo funcionará

---

*Este archivo es la fuente de verdad para desarrollo en este proyecto. Todas las decisiones de código deben alinearse con estos principios.*
