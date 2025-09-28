# Parte I – Teoría Conceptual

## a) ¿Qué es una colección basada en consultas y cómo se diferencia de una colección estática?

Una colección basada en consultas es un conjunto de documentos que no se almacena de manera fija, sino que se construye dinámicamente a partir de una consulta. Por ejemplo, podríamos definir una colección que siempre muestre a los clientes con promedio de compras mayor a 500.  
La diferencia con una colección estática es que:
- La colección estática guarda físicamente todos los documentos (no cambia a menos que hagamos un insert/update/delete).
- La colección basada en consultas se recalcula cada vez que se consulta (o se materializa periódicamente si así se define).

En pocas palabras:  
- Estática = datos guardados permanentemente.
- Basada en consultas = datos que dependen de una query definida.


## b) Diferencias entre consulta ad-hoc, vista materializada y colección dinámica

- Consulta ad-hoc: Es puntual y temporal. Sirve para obtener una respuesta específica en un momento dado, pero no queda guardada como definición. Ejemplo: `db.clientes.find({ pais: "México" })`.

- Vista materializada: Es una copia física y persistente del resultado de una consulta. Se actualiza periódicamente. Se usa para optimizar rendimiento cuando se consulta muchas veces el mismo resultado.

- Colección dinámica: Se comporta como una vista virtual. No guarda físicamente los datos, sino que cada vez que se accede, ejecuta la consulta y devuelve resultados actualizados al instante.


## c) Ventajas y desventajas de las colecciones basadas en consultas

Ventajas:
- Siempre muestran datos actualizados (en el caso de las dinámicas).
- Evitan duplicar información innecesaria.
- Pueden simplificar el trabajo de los desarrolladores (una sola definición centralizada).
- Son útiles para análisis, reportes y dashboards en tiempo real.

Desventajas:
- Si son dinámicas, pueden ser más lentas porque se recalculan en cada consulta.
- Si son materializadas, requieren espacio extra de almacenamiento.
- Necesitan procesos de actualización periódica** en las materializadas para no quedar desfasadas.
- Pueden aumentar la complejidad de administración si no se planifican bien.
