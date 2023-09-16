import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


// Load template only if the condition fails i. e., opposite to ngIf
@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  constructor(private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef) { }

  @Input() test: string = '';

  @Input() set appIfNot (condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      console.log('*****************c ', this.test)
    } else {
      this._viewContainerRef.clear();
    }
  }

}
