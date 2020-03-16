import { Component, OnInit } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

/*NgRx*/
import { Store, select } from "@ngrx/store";
import { MembersState } from '../state/members.reducer';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent implements OnInit {
  members: MemberEntity[];
  organization: string;

  constructor(
    private store: Store<any>,
    private membersApi: MembersApiService) { }

  ngOnInit() {
    this.store.pipe(
      select('members')
    ).subscribe(
      (state: MembersState) => {
        if (state) this.organization = state.organization;
      }
    )
  }

  loadMembers() {
    this.membersApi.getAllMembers(this.organization)
      .subscribe(
        (ms) => this.members = ms,
        (error) => console.log(error)
      );
  }

  //Action for input organization changes
  updateOrganization($event){
    this.store.dispatch({
      type: 'UPDATE_ORGANIZATION',
      payload: $event,
    });
  }

}
