# Gestos

Ionic proporiciona eventos con los que hacer binding de los siguientes gestos:

- tap (tocar)
- press (presionar)
- pan (desplazar)
- swipe (deslizar)
- rotate (rotar)
- pinch (pellizcar)

Ejemplo:

```html
<ion-card (tap)="tapEvent($event)">
  <ion-item>
    Lorem Ipsum...
  </ion-item>
</ion-card>
```
