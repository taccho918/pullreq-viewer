import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../service/githubapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public pulls;

  constructor(
    private githubapiService: GithubapiService
  ) { }

  ngOnInit() {
    this.pulls = this.githubapiService.getPulls();
  }

}
