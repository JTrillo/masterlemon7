import { connect } from 'react-redux';
import { memberRequest, updateOrganization, updatePage, updateRowsPerPage } from '../../actions/member.actions';
import { MemberListComponent } from './member-list.component';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => ({
  members: state.memberReducer.members,
  organization: state.memberReducer.organization,
  page: state.memberReducer.page,
  rowsPerPage: state.memberReducer.rowsPerPage
});

const mapDispatchToProps = (dispatch) => ({
  loadMembers: (organization: string) => dispatch(memberRequest(organization)),
  onChangeOrganization: (organization: string) => dispatch(updateOrganization(organization)),
  onChangePage: (page: number) => dispatch(updatePage(page)),
  onChangeRowsPerPage: (rowsPerPage: number) => dispatch(updateRowsPerPage(rowsPerPage))
});

export const MemberListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberListComponent);
