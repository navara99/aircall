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
import axios from "axios";
import { Link } from "react-router-dom";

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

function CallsListItem({ call, setCalls }) {
  const { id, is_archived, call_type, from, to } = call;

  const toggleArchive = () => {
    const endPoint = `https://aircall-job.herokuapp.com/activities/${id}`;

    axios.post(endPoint, {
      is_archived: !is_archived
    })
      .catch((err) => {
        console.log(err.message);
      });

    setCalls((prev) => {

      // Refactor this with object spread after configuring babel

      const selectedCall = prev.find((call) => call.id === id);
      const otherCalls = prev.filter((call) => call.id !== selectedCall.id);
      selectedCall.is_archived = !is_archived;
      const newCallsData = [...otherCalls, selectedCall];
      return newCallsData;
    });

  };

  return (
    <ListItem disablePadding
      secondaryAction={
        <IconButton edge="end" onClick={toggleArchive}>
          {is_archived ? <UnarchiveIcon /> : <ArchiveIcon />}
        </IconButton>
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