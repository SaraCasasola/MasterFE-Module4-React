import React from "react";
import {
	TableHead,
	TableCell,
	TableRow
} from "@material-ui/core";

export const MemberTableHeader: React.FC = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell> Avatar </TableCell>
				<TableCell> Id </TableCell>
				<TableCell> Name </TableCell>
			</TableRow>
		</TableHead>
	);
}