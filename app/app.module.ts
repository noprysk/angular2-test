import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {HighlightDirective} from "./directive/highlight.directive";
import {TitleComponent} from "./title/title.component";
import {UserService} from "./user.service";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}