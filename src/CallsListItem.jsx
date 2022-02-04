import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import { Link } from "react-router-dom";
import { toggleArchive } from "./helpers/archiveHelpers";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const iconTypeMap = {
  "answered": <CallIcon />,
  "missed": <PhoneMissedIcon />,
  "voicemail": <VoicemailIcon />
};

const secondaryTextPrefixMap = {
  "answered": "for ",
  "missed": "tried to call on ",
  "voicemail": "left voicemail for "
};

function CallsListItem({ call, setCalls, setSnackBarDetails }) {
  const { id, is_archived, call_type, from, to } = call;

  const handleArchiveIconClick = () => {
    toggleArchive(id, is_archived, setCalls, setSnackBarDetails);
  };

  return (
    <ListItem disablePadding
      secondaryAction={
        <Tippy content={is_archived ? "Unarchive" : "Archive"} placement="left" theme="material" arrow={true}>
          <IconButton edge="end" onClick={handleArchiveIconClick} >
            {is_archived ? <SettingsBackupRestoreIcon /> : <ArchiveIcon />}
          </IconButton>
        </Tippy>
      }
    >
      <ListItemButton component={Link} to={`/call/${id}`}>
        <ListItemAvatar>
          <Avatar>
            {iconTypeMap[call_type]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={from}
          secondary={secondaryTextPrefixMap[call_type] + to}
        />
      </ListItemButton>
    </ListItem>
  )

};

export default CallsListItem;