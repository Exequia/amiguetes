import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-filmography-wrapper',
  templateUrl: './filmography-wrapper.component.html',
  styleUrls: ['./filmography-wrapper.component.scss']
})
export class FilmographyWrapperComponent implements OnInit {

  filmName: string 

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      this.filmName = params['filmName']
    )
  }

}
