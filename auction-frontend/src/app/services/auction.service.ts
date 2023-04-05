import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Auction } from "../models/auction.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Auction[]>(`${environment.backendUrl}/auction`);
  }
}
