import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    log(message: string) {
        console.log(`Logger service: ${message}`);
    }
}