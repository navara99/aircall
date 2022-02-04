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
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';

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

function CallsListItem({ call }) {

  return (
    <ListItem disablePadding
      secondaryAction={
        <IconButton edge="end">
          {call.is_archived ? <UnarchiveIcon /> : <ArchiveIcon />}
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            {iconTypeMap[call.call_type]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={call.from}
          secondary={secondaryTextPrefixMap[call.call_type] + call.to}
        />
      </ListItemButton>
    </ListItem>
  )

};

export default CallsListItem;