import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import ArchiveIcon from '@mui/icons-material/Archive';
import Restore from "@mui/icons-material/Restore";
import { Link } from "react-router-dom";
import { toggleArchive } from "./helpers/archiveHelpers";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ListItemIcon } from "@mui/material";
import useCallConstants from "./hooks/useCallConstants";

function CallsListItem({ call, setCalls, setSnackBarDetails }) {
  const { id, is_archived, call_type, from, to } = call;
  const { iconTypeMap, secondaryTextPrefixMap } = useCallConstants();

  const handleArchiveIconClick = () => {
    toggleArchive(id, is_archived, setCalls, setSnackBarDetails);
  };

  return (
    <ListItem disablePadding
      secondaryAction={
        <Tippy content={is_archived ? "Restore" : "Archive"} placement="left" theme="material" arrow={true}>
          <IconButton edge="end" onClick={handleArchiveIconClick} >
            {is_archived ? <Restore /> : <ArchiveIcon />}
          </IconButton>
        </Tippy>
      }
    >
      <ListItemButton component={Link} to={`/call/${id}`}>
        <ListItemIcon>
          {iconTypeMap[call_type]}
        </ListItemIcon>
        <ListItemText
          primary={from}
          secondary={secondaryTextPrefixMap[call_type] + to}
        />
      </ListItemButton>
    </ListItem>
  )

};

export default CallsListItem;