import { Component } from '@angular/core';

@Component({
  selector: 'nova-comp-tag-navbar',
  templateUrl: './comp-tag-navbar.component.html',
  styleUrls: ['./comp-tag-navbar.component.scss']
})
export class CompTagNavbarComponent {
    /**
   * 控制变量：.tag-expand是否显示
   */
    isExpand:Boolean = false;
    /**
     * 控制函数：改变isExpand参数
     */
    toggleExpand(){
      this.isExpand = !this.isExpand
    }
    /**
     * 数据列表：标签列表
     */
    tagList = ["推荐",  "北京",  "南京",  "长沙",  "成都",  "厦门",  "青岛",  "南昌",  "苏州",  "上海",  "天津",  "西安",  "昆明"]
    /**
     * 关键数据：用户当前点击标签名
     */
    currentTag = "推荐"
    /**
     * 根据点击事件，切换当前标签currentTag
     * @param tag 被点击标签名
     */
    tagClick(tag:string){
      console.log(tag)
      this.currentTag = tag
    }
}
