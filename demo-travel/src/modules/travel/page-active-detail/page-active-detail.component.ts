import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page-active-detail',
  templateUrl: './page-active-detail.component.html',
  styleUrls: ['./page-active-detail.component.scss']
})
export class PageActiveDetailComponent {
  article:any = {}
  constructor(
    private route:ActivatedRoute,
    private router:Router
    ){

    /**
     * 纯JS实现路由参数解析
     * @example
     * location.search.split("?")[1].split("&").map(item=>item.split("=")[0]+decodeURIComponent(item.split("=")[1]))
     */

    /**
     * Angular的ActivatedRoute服务，实现参数解析
     */
    this.route.queryParams.subscribe(params=>{
      console.log(params)
      this.article=params
    })

  }
  goBack(){
    this.router.navigate(["/travel/active"])
  }
}
