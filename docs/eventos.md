# Eventos

Los componentes-página, al ser renderizados en un Router Outlet, poseen, además de los eventos propios de routing de Angular otros 4 eventos particulares que añade Ionic

- ionViewWillEnter, 
- ionViewDidEnter, 
- ionViewWillLeave, 
- ionViewDidLeave

## Eventos del ciclo de vida de los componentes de Angular

- **ngOnChanges()**: Es llamado cuando Angular establece datos asociados a propiedades asociadas a @Input. El método recibe un objeto SimpleChanges con el valor actual y el valor anterior. Es llamado antes de ngOnInit() y cuando una o más variables @Input cambie.
- **ngOnInit()**: Es llamado una única vez, después del primer ngOnChanges() cuando Angular ha renderizado las propiedades bindeadas y ha seteado las propiedades decoradas con @Input. En este momento es cuando se puede dar por inicializado el componente/directiva.
- **ngDoCheck()**: Es llamado durante cada ciclo de detección de cambios, después de cada ngOnChanges() y después de ngOnInit(). Puede servir para gestionar cambios que Angular no sea capaz de tratar por sí mismo.
- **ngAfterContentInit()**: Es llamado después de que Angular proyecte el contenido externo dentro de la vista del componente. Es llamado después del primer ngDoCheck(). Sólo disponible para componentes.
- **ngAfterContentChecked()**: Responde después de que Angular compruebe el contenido proyectado en el componente. Es llamado después de cada ngAfterContentInit() y de cada ngDoCheck(). Sólo disponible para componentes.
- **ngAfterViewInit()**: Responde después de que Angular inicialice la vista del componente y las vistas hijas. Es llamado una sola vez después del primer ngAfterContentChecked(). Sólo disponible para componentes. Es el lugar seguro para trabajar con variables obtenidas con @ViewChild.
- **ngAfterViewChecked()**: Responde después de que Angular compruebe la vista del componente y las vistas hijas. Es llamado después de ngAfterViewInit y de cada ngAfterContentChecked(). Sólo disponible para componentes.
- **ngOnDestroy()**: Es llamado usto antes de que Angular destruya el componente. Se puede utilizar por ejemplo para desuscribirse de los observables.

https://github.com/carherco/curso-angular/blob/master/docs/lifecycle.md

