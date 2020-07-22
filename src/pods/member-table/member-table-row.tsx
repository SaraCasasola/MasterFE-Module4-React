import React from "react";
import {
  Avatar,
  TableRow,
  TableCell
} from "@material-ui/core";
import { MemberEntity } from "@member-table";
import { Link, generatePath } from "react-router-dom";

interface Props {
  member: MemberEntity
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;
  const detailsPageUrl = "/detail/:id";

  return (   
      <TableRow key={member.id}>
        <TableCell>
          <Avatar alt={member.name} src={member.avatar_url} />
        </TableCell>
        <TableCell>{member.id}</TableCell>
        <TableCell>
          <Link to={generatePath(detailsPageUrl, { id: member.login })}>
            {member.login}
          </Link>
        </TableCell>
      </TableRow>
  );
}