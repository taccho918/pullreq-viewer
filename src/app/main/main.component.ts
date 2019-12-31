import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../service/githubapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {

  public pulls: any;
  public owner: string;
  public repo: string;

  constructor(
    private githubapiService: GithubapiService
  ) { }

  onclick(value: string) {
    console.log(value);
    let str = value.split('/');
    this.owner = str[0];
    this.repo = str[1];
    this.pulls = this.githubapiService.getPulls(this.owner, this.repo);
  }

}
