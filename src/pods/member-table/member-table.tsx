import React from 'react';
import { MemberEntity } from './model';
import { MemberTableRow } from './member-table-row';
import { MemberTableHeader } from './member-table-header';

interface Props {
    members: MemberEntity[];
}

export const MemberTable: React.FC<Props> = (props) => {
	const {members} = props;

	return (
		<table>
			<thead>
				<MemberTableHeader></MemberTableHeader>
			</thead>
			<tbody>
				{members.map((member) => (
					<MemberTableRow key={member.id} member={member}></MemberTableRow>
				))}
			</tbody>
		</table>
	);
}