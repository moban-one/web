import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-active',
  templateUrl: './page-active.component.html',
  styleUrls: ['./page-active.component.scss']
})
export class PageActiveComponent {
  /**
   * 路由跳转详情传参
   * @see
   * Router 服务，参考：https://angular.cn/tutorial/tour-of-heroes/toh-pt5
   */
  goDetail(article:any){
    console.log(article)
    this.router.navigate(["/travel/active/detail"],{
      queryParams:article
    })
  }
  constructor(private router:Router){

  }

  /**
   * 星星组件调用逻辑
   */
  articleRating = 0
  isStartRating:Boolean = false
  startRating(article:any){
    article.isStartRating = true
  }
  onScoreChange(article:any,score:number){
    article.rating = score
    article.isStartRating = false
  }

  list = [
    {title:"长沙推荐指数",rating:5,isStartRating:false,likeCount:23000,publishDate:new Date()},
    {title:"成都推荐指数",rating:0,isStartRating:false,likeCount:89000,publishDate:new Date()},
    {title:"南昌推荐指数",rating:0,isStartRating:false,likeCount:178000,publishDate:new Date()},
  ]

  tok(value:number){
    return value/1000 + "k"
  }
}


