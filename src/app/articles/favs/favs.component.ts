import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FavsService } from 'src/app/lib/favs.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit, OnChanges {
  @Input() postId: number;
  active: boolean = true;
  constructor(
    private favsService: FavsService
  ) { }

  ngOnChanges() {
    this.favsService.checkFavState(this.postId); 
  }

  ngOnInit() {
    console.log(this.active)
  }
  toggleFav() {
    this.active = this.favsService.onToggleFav(this.postId);
  }
}
