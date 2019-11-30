import {Injectable} from "@angular/core";
import {Pic} from "../entities/pic";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

    pic: Pic[] = [];

    constructor(private http: HttpClient) {
    }

    getAllPic(): Observable<Pic[]> {
        return this.http.get<Pic[]>('/site/get-pictures')
    }

}
