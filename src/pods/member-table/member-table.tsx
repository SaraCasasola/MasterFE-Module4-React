import React from 'react';
import { MemberEntity } from './model';
import { MemberTableRow } from './member-table-row';
import { MemberTableHeader } from './member-table-header';

export const MemberTable: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);

	React.useEffect(() => {
		fetch("https://api.github.com/orgs/lemoncode/members").then((response) => response.json()).then((json) => setMembers(json));
	}, []);

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