import React from "react";
import { Table, TableContainer } from "@material-ui/core";
import { MemberTableHeader, MemberTableBody, MemberTableFooter, MemberEntity } from "@member-table";

interface Props {
	members: MemberEntity[];
}

export const MemberTable: React.FC<Props> = (props: Props) => {
	const { members } = props;
	const rowsPerPageOptions = [5, 10, 25];
	const initialPage = 0;
	const initialMembersPerPage = rowsPerPageOptions[0];
	const [page, setPage] = React.useState(initialPage);
	const [membersPerPage, setMembersPerPage] = React.useState(initialMembersPerPage);

	const handleChangeMembersPerPage = (event) => {
		setMembersPerPage(parseInt(event.target.value, 10));
		setPage(initialPage);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<TableContainer>
			<Table>
				<MemberTableHeader/>
				<MemberTableBody members={members} page={page} membersPerPage={membersPerPage}/>
				<MemberTableFooter
					rowsPerPageOptions={rowsPerPageOptions}
					page={page}
					membersPerPage={membersPerPage}
					totalMembers={members.length}
					handleChangeMembersPerPage={handleChangeMembersPerPage}
					handleChangePage={handleChangePage}/>
			</Table>
		</TableContainer>
	);
}