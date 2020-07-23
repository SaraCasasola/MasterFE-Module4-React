import React from "react";
import TableBody from "@material-ui/core/TableBody";
import { MemberTableRow, MemberEntity } from "@member-table";

interface Props {
	members: MemberEntity[];
	membersPerPage: number;
	page: number;
}

export const MemberTableBody: React.FC<Props> = (props: Props) => {
	const { members, membersPerPage, page } = props;

	const setMembersPerPage = () => {
		return (members && membersPerPage > 0
			? members.slice(page * membersPerPage, page * membersPerPage + membersPerPage)
			: members);
	};

	return (
		<TableBody>
			{setMembersPerPage().map((member) => (
				<MemberTableRow key={member.id} member={member}/>
			))}
		</TableBody>);
}