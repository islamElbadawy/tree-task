import { Member } from './models';
import { Component } from '@angular/core';
import * as Data from "../assets/users.json";
import { RawMember } from './raw-member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree-task';
  data: any[] = [];
  users: Member[] = [];
  tree: Member[] = [];
  nodeCounter: number = 0;

  constructor(){
    this.data = Data.default
    this.createTree(this.data)
}



createTree(data: RawMember[]){
  let treeUsers: Member[] = [];
  data.map((user) => {
    let treeNode: Member = {
      name: user.name,
      code: user.code.split('.').reverse()[0],
      pCode: user.code.length > 4 ? user.code.split('.').reverse()[1] : '',
      imagePath: user.imagePath,
      children: []
    }
    // this.nodeCounter++;
    treeUsers.push(treeNode)
  })




  this.tree = this.makeTree(treeUsers)

  console.log(this.tree)

}


makeTree(members:Member[], code='') : Member[]{

  return members.filter(member => member['pCode'] == code)
          .map(member => ({...member, children: this.makeTree(members, member.code)}))

}



}
