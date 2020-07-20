import React from 'react';
import { MemberEntity } from "./model";
import { Link, generatePath } from "react-router-dom";

interface Props {
    member: MemberEntity
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <tr key={member.id}>
      <td><img src={member.avatar_url} style={{width: "5rem" }}/></td>
      <td><span>{member.id}</span></td>
      <td>
        <Link to={generatePath("/detail/:id", { id: member.login })}>
            {member.login}
        </Link>{" "}</td>
    </tr>
  );
}