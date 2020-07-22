import React from "react";
import {
	TableRow,
	TableFooter,
	TablePagination
} from "@material-ui/core";

interface Props {
	rowsPerPageOptions: number[];
	totalMembers: number;
	membersPerPage: number;
	page: number;
	handleChangeMembersPerPage: (event) => void;
	handleChangePage: (event, newPage) => void;
}

export const MemberTableFooter: React.FC<Props> = (props: Props) => {
	const { rowsPerPageOptions, totalMembers, membersPerPage, page, handleChangePage, handleChangeMembersPerPage } = props;
	return (
		<TableFooter>
			<TableRow>
				<td>
					<TablePagination
						rowsPerPageOptions={rowsPerPageOptions}
						component="div"
						count={totalMembers}
						rowsPerPage={membersPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeMembersPerPage}
					/>
				</td>
			</TableRow>
		</TableFooter>
	);
}