import { ComponentFactoryResolver, ComponentRef, Directive, HostListener, Input, ViewContainerRef } from '@angular/core';
import { ContextMenuComponent } from '../components/context-menu/context-menu.component';

@Directive({
  selector: '[appContextMenu]'
})
export class ContextMenuDirective {
  @Input('appContextMenu') appContextMenu: any;
  component: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    // window.document.body.addEventListener('click', () => {
    //   if (this.component) {
    //     this.component.destroy();
    //     this.component = null;
    //   }
    // });
  }
  @HostListener('click', ['$event'])
  openMenu(event: Event) {
    event.stopPropagation();
    if (this.component) {
      this.component.instance.isShown = true;
      return;
    }
    const componentFac = this.componentFactoryResolver.resolveComponentFactory(ContextMenuComponent)
    this.component = this.viewContainerRef.createComponent(componentFac);
    this.component.instance.items = this.appContextMenu;
    //todo
    this.component.instance.isShown = true;
  }
}
