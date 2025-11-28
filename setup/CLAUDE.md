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

### Patrones de Código
```python
# ✅ BIEN: Estructura de función clara
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

## 🧪 Estrategia de Testing

### Desarrollo Guiado por Tests (TDD)
1. **Rojo**: Escribe el test que falla
2. **Verde**: Implementa código mínimo para pasar
3. **Refactorizar**: Mejora el código manteniendo tests verdes

### Estructura de Tests (Patrón AAA)
```python
# ✅ BIEN: Estructura de test clara
def test_process_data_with_valid_input():
    # Preparar (Arrange)
    items = [{"value": 10}, {"value": 20}]
    options = {"multiplier": 2}

    # Actuar (Act)
    result = process_data(items, options)

    # Afirmar (Assert)
    assert result["status"] == "success"
    assert len(result["result"]) == 2
```

### Objetivos de Cobertura
- **Tests Unitarios**: 80%+ de cobertura
- **Tests de Integración**: Rutas críticas
- **Tests E2E**: Flujos principales de usuario

## 🔒 Mejores Prácticas de Seguridad

### Validación de Entrada
- Validar todas las entradas de usuario
- Sanitizar datos antes de procesar
- Usar librerías de validación de esquema

### Gestión de Secretos
- Nunca hardcodear secretos
- Usar variables de entorno
- Mantener archivos .env fuera del control de versiones

### Protección de Datos
- Nunca registrar datos sensibles
- Cifrar datos en reposo
- Usar conexiones seguras (HTTPS, TLS)

## ⚡ Guías de Rendimiento

### Optimización de Código
- Perfilar antes de optimizar
- Cachear cálculos repetidos
- Usar estructuras de datos apropiadas

### Gestión de Recursos
- Cerrar archivos y conexiones correctamente
- Implementar timeouts para llamadas externas
- Monitorear uso de memoria en procesos de larga duración

## 🔄 Flujo de Git y Reglas de Repositorio

### Estrategia de Ramas
- `main` - Código listo para producción
- `develop` - Rama de integración
- `feature/TICKET-123-descripcion` - Ramas de features
- `hotfix/TICKET-456-descripcion` - Hotfixes

### Convención de Commits (Conventional Commits)
```
tipo(alcance): descripción

feat(cli): agregar nuevo comando para exportar datos
fix(parser): manejar entrada vacía correctamente
docs(readme): actualizar pasos de instalación
test(core): agregar tests unitarios para procesador
```

### Reglas de Pull Request
- **Sin commits directos** a `main` o `develop`
- **Requerir revisión de PR** antes de merge
- **Todos los tests deben pasar** antes de merge
- **Squash and merge** para mantener historia limpia

## ❌ No Hacer (Critical)

### Calidad de Código
- ❌ No ignorar errores de tipos
- ❌ No hacer commits sin tests
- ❌ No omitir manejo de errores
- ❌ No hardcodear configuraciones

### Seguridad
- ❌ No exponer secrets en código
- ❌ No loggear información sensible
- ❌ No saltarse validación de entrada
- ❌ No usar conexiones inseguras en producción

### Arquitectura
- ❌ No crear dependencias circulares
- ❌ No mezclar responsabilidades en un módulo
- ❌ No duplicar lógica de negocio
- ❌ No ignorar warnings del linter

## 🔄 Error-First Development Protocol

### Manejo de Errores Predictivos
```python
# ✅ BIEN: Siempre incluir fallbacks
try:
    external_result = call_external_api()
except Exception as e:
    logger.error(f"API externa falló: {e}")
    external_result = get_mock_fallback()  # Siempre tener fallback
```

### Debugging Sin Visibilidad Directa
- **Usar logs extensivos** con niveles claros (DEBUG, INFO, ERROR)
- **Crear health checks** para validar dependencias
- **Implementar timeouts** en todas las llamadas externas
- **Hacer requests incrementales** - nunca asumir que algo complejo funcionará

---

*Este archivo es la fuente de verdad para desarrollo en este proyecto. Todas las decisiones de código deben alinearse con estos principios.*
