import React from "react";
import { MemberTable } from "./pods/member-table/member-table";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const initialOrganisationToSeach = "lemoncode";

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organisation, setOrganisation] = React.useState<string>(initialOrganisationToSeach);

  const handleOrganisationChange = event => {
    setOrganisation(event.target.value);
  };

  const getMembers = async () => {
    await fetch(`https://api.github.com/orgs/${organisation}/members`)
      .then((response) => response.json())
      .then(json => setMembers(json));
  };

  const handleSearch = () => {(async () => getMembers())()}

  React.useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>
      <label>
        Organisation:
        <input type="text" value={organisation} onChange={handleOrganisationChange} />
      </label>
      <button onClick={handleSearch}>Search</button>
      <MemberTable members={members} />
    </>
  );
};