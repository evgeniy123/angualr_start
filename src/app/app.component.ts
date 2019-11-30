import {Component, OnInit} from '@angular/core';

import {ApiService} from "./services/api.service";
import {Pic} from "./entities/pic";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['../assets/scss/argon.scss'],
   // styleUrls: ['./app.component.scss'],
    providers: [ApiService]
})

export class AppComponent implements OnInit {

    loading: boolean;
    pics_server: Pic[] = [];
    title = 'Коллекция книг';

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.loading = true;
        this.apiService.getAllPic()
            .subscribe(pics => {
                this.pics_server = pics;
                this.loading = false
            });
    }

}