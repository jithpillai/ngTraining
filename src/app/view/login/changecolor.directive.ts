import { Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appChangeColor]'
})

export class ChangeColor {
    constructor(el:ElementRef) {
        el.nativeElement.style.color = "green";
    }
}