import { Component } from "@angular/core";
import { GithubapiService } from "../service/githubapi.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.less"]
})
export class MainComponent {
  public pulls: any;
  public fullRepo: string;
  public owner: string;
  public repo: string;
  public rels: any;
  public loading: boolean = false;
  public currentPage = 1;

  constructor(private githubapiService: GithubapiService) {}

  onClick(value: string) {
    this.fullRepo = value;
    const str = value.split("/");
    this.owner = str[0];
    this.repo = str[1];
    this.request();
  }

  setPageTo(page: number) {
    this.currentPage = page;
    this.request();
  }

  request() {
    this.loading = true;
    this.githubapiService
      .getPulls(this.owner, this.repo, this.currentPage)
      .subscribe(res => {
        if (this.currentPage === 1) {
          this.rels = res.headers
            .get("link")
            .match(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g);
          this.rels.last = Array.from(
            new Array(parseInt(this.rels[1].match(/&page=(\d+).*$/)[1]))
          ).map((val, idx) => idx + 1);
        }
        this.pulls = res.body;
        this.loading = false;
      });
  }
}
