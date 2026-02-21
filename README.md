# proyeccion-cristocel

Calculadora web estática para simular ventas de líneas nuevas y portabilidades durante 12 meses,
con cálculo de cartera y comisiones por recarga para Modelo 1 y Modelo 2.

## Uso rápido

1. Abre `index.html` en tu navegador, o levanta un servidor local:
   ```bash
   python3 -m http.server 8000
   ```
2. Selecciona el modelo de comisión.
3. Captura ventas manualmente por mes o usa **Simular 12 meses**.
4. Ajusta recarga promedio e IVA.
5. Pulsa **Calcular** para ver flujo mensual y detalle por cohorte.

## Supuestos implementados

- Bono de activación: **$40** por alta.
- Bono extra por portabilidad: **$100** por portabilidad.
- Comisión fija por alta: **$100** por línea.
- Costo por SIM: **$45** por línea.
- Degradación de cartera por cohorte:
  - Mes 2 = 50% de usuarios del mes 1.
  - Desde mes 3 = degradación del 5% mensual sobre el mes anterior.
- Comisiones de recarga de acuerdo con la tabla del modelo seleccionado.
- Comisiones mostradas con IVA.
