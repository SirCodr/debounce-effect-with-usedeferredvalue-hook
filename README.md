Usedeferred evita el bloqueo de la UI durante el tiempo de renderizado. Se diferencia de la técnica de debounce porque no useDeferred no tiene un delay establecido, pero puedo usarse en conjunto con debounce.

Sin el memo o el useMemo, la UI se re renderizaria con cada cambio del estado.