import { Component, OnInit } from '@angular/core';
import { AuctionService } from "./services/auction.service";
import { Auction } from "./models/auction.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  auctions: Auction[] = [];

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.getAllAuctions();
  }

  getAllAuctions() {
    this.auctionService.getAll().subscribe({
      next: value => this.auctions = value,
      error: err => alert(err.message)
    });
  }
}
