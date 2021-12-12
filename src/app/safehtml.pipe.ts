import { Pipe, ɵbypassSanitizationTrustHtml } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({name: 'safehtml'})
export class Safehtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(style: string) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
