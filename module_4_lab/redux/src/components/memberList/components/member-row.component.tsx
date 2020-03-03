import * as React from 'react';
import { useHistory } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { MemberEntity } from '../../../model';
import { linkRoutes } from "../../../core";

interface Props  {
  member : MemberEntity;
}

export const MemberRowComponent = (props: Props) => {
  const history = useHistory();

  const goMemberCard = () => {
    history.push(linkRoutes.memberCard(props.member.login));
  }

  return (
    <TableRow>
      <TableCell>
        <img src={props.member.avatar_url} style={{maxWidth: '10rem'}}/>
      </TableCell>
      <TableCell>
        <span>{props.member.id}</span>
      </TableCell>
      <TableCell>
        <span>
          <Link onClick={goMemberCard}>
            {props.member.login}
          </Link>
        </span>
      </TableCell>
    </TableRow>
  );
}
