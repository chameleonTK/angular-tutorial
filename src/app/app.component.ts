import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent implements OnInit{
    title = 'Tour of Heroes';
}
