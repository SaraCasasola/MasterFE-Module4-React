import React from "react";
import { 
  InputLabel, 
  Input,
  Button,
  withStyles
} from "@material-ui/core";
import {orange} from "@material-ui/core/colors"
import { MemberTable, MemberEntity } from "@member-table";

export const ListPage: React.FC = () => {
  const initialOrganisationToSeach = "lemoncode";

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organisation, setOrganisation] = React.useState<string>(initialOrganisationToSeach);

  React.useEffect(() => {
    handleSearch();
  }, []);

  const getMembers = async () => {
    await fetch(`https://api.github.com/orgs/${organisation}/members`)
      .then((response) => response.json())
      .then(json => setMembers(json));
  };

  const handleOrganisationChange = event => {
    setOrganisation(event.target.value);
  };

  const handleSearch = () => {(async () => getMembers())()};

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      "&:hover": {
        backgroundColor: orange[700],
      },
    },
  }))(Button);  

  return (
    <>
      <h2>Hello from List page</h2>
      <InputLabel htmlFor="organisation"> Organisation: </InputLabel>
      <Input id="organisation" value={organisation} onChange={handleOrganisationChange} />
      <ColorButton onClick={handleSearch}>Search</ColorButton>
      <MemberTable members={members} />     
    </>
  );
};