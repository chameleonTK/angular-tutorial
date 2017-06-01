import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [],
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
    `
})

export class AppComponent implements OnInit{
    title = 'Tour of Heroes';
}
