import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
@Component({
  selector: 'nova-comp-star-rating',
  templateUrl: './comp-star-rating.component.html',
  styleUrls: ['./comp-star-rating.component.scss']
})
export class CompStarRatingComponent implements OnInit,OnDestroy{
  /**
   * 重要数据：当前分值
   */
  @Input()
  score:number = 0 

  /**参考：https://angular.cn/guide/inputs-outputs */
  @Output()
  scoreChange = new EventEmitter<number>()

  /**
   * 生命周期：ngOnInit 组件初始化，完成Input传参后执行的代码
   * @see
   * https://angular.cn/guide/lifecycle-hooks
   */
  ngOnInit(): void {
    this.startTime = new Date()
    this.makeStarList(this.score)
  }
  /**
   * 生命周期：ngOnDestory与Init联合使用，记录了组件从创建到销毁的事件
   * @desc 反映了用户在打分过程中耗时duration
   */
  startTime:Date = new Date()
  ngOnDestroy():void{
    let endTime = new Date()
    let duration = endTime.getTime() - this.startTime.getTime()
    duration = duration/1000
    console.log("打分已经结束，组件被销毁时候，打印了这段话")
    console.log("打分耗时：",duration)
  }
  /**
   * 星星列表：用于显示在页面中
   */
  starList = [false,false,false,false,false]
  totalScore:number = 5 // 默认的总分

  clickStar(index:number){
    let score = index+1

    let starStatus = this.starList[index]
    // 点击未选中星星，根据星星所在位置，设置当前分数为下标+1
    if(!starStatus){
      this.score = score
    }
    // 点击选中星星，设置分数为0
    if(starStatus){
      this.score = 0
    }

    console.log(this.score)
    // 当组件分值变化，用户点击确认时，将本组件内this.score属性，
    // 通过this.scoreChange事件，返回给父级组件，同时传递结果参数
    this.scoreChange.emit(this.score)
    this.makeStarList(this.score)
  }

  makeStarList(score:number){
    let list = []
    for (let index = 0; index < this.totalScore; index++) {
      if(index<score){
        list.push(true)
      }else{
        list.push(false)
      }
    }
    this.starList = list
  }
}
