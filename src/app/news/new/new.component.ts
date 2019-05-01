import { Component, OnInit, Input } from '@angular/core';
import { New } from '../../models/news';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Input() new:New

  constructor(private route: ActivatedRoute, private configService: ConfigService, private location: Location) { }

  ngOnInit() {    
    let newName;
    this.route.params.subscribe( params =>
      newName = params['newName']
    )

    this.invokeGetNew(newName)
  }

  async invokeGetNew(newName) {
    if (newName) {
      const obsNew = await this.configService.getNew(newName)
      this.asignObs(obsNew)
    }
  }

  asignObs(obsNew) {
    this.new = {
      id: obsNew.id,
      date: obsNew.date
    }
  }

  goBack() {
    this.location.back();
  }

}
