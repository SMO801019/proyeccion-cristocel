# Directorio escalable de iglesias (Next.js)

Base inicial en **Next.js + TypeScript** para construir una página similar a un directorio de iglesias, con estructura lista para crecer.

## Incluye

- Filtro por búsqueda (nombre/ciudad/etiquetas)
- Filtro por país
- Tarjetas reutilizables
- Dataset inicial mock (`app/data/churches.ts`)
- Arquitectura por componentes (`app/components/*`)

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Próximos pasos para escalar

1. Migrar `app/data/churches.ts` a API/DB (PostgreSQL, Supabase, etc.).
2. Agregar autenticación para panel admin.
3. Crear rutas de detalle por iglesia (`/churches/[id]`).
4. Añadir paginación server-side y caché.
