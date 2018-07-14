# Eventos

Los eventos en ionic siguen la técnica **publish-subscribe**.

```typescript
import { Events } from 'ionic-angular';

constructor(public events: Events) {}
createUser(user) {
  console.log('User created!')
  this.events.publish('user:created', user, Date.now());
}


constructor(public events: Events) {
  events.subscribe('user:created', (user, time) => {
    console.log('Welcome', user, 'at', time);
  });
}
```

## publish(topic, eventData)

Emite un evento

## subscribe(topic, handler)

Registra un manejador con un evento.

## unsubscribe(topic, handler)

Desregsitra un manejador asociado a un evento. Esta función devuelve **true** si se elimina el manejador.
