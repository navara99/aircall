import React from "react";
import { useParams } from "react-router";
import useSelectedCall from "./hooks/useSelectedCall";
import { useEffect } from "react";
import { dateParser } from "./helpers/dateHelpers";
import Loading from "./Loading.jsx";
import {
  Avatar,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  ListSubheader,
  Divider,
  IconButton
} from "@mui/material";
import { toggleArchive } from "./helpers/archiveHelpers";
import CallMadeIcon from '@mui/icons-material/CallMade';
import EventIcon from '@mui/icons-material/Event';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import BusinessIcon from '@mui/icons-material/Business';
import TimerIcon from '@mui/icons-material/Timer';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function CallDetails({ loading, setLoading, setTabIndex, setCalls, setSnackBarDetails, }) {
  const { id } = useParams();
  const { selectedCall, setSelectedCall } = useSelectedCall(id, setLoading);

  useEffect(() => {
    setTabIndex(false);
  }, []);

  const handleDetailsArchiveToggle = () => {
    toggleArchive(selectedCall.id, selectedCall.is_archived, setCalls, setSnackBarDetails, setSelectedCall)
  };

  const callInfo = () => {
    const archiveIcon = selectedCall.is_archived ? <SettingsBackupRestoreIcon /> : <ArchiveIcon />

    return (
      Object.keys(selectedCall).length > 0 &&
      <List subheader={<ListSubheader>Call # {selectedCall.id}</ListSubheader>}>
        <ListItem>
          <ListItemAvatar>
            <Avatar >
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Caller" secondary={selectedCall.from} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Reciever" secondary={selectedCall.to} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
              <EventIcon />
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Time & Day" secondary={dateParser(selectedCall.created_at)} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
              <TimerIcon />
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Duration" secondary={selectedCall.duration + " seconds"} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
              {<ArchiveIcon />}
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Archived" secondary={selectedCall.is_archived ? "Yes" : "No"} />
          <Tippy content={selectedCall.is_archived ? "Unarchive" : "Archive"} placement="left" theme="material" arrow={true}>
            <IconButton onClick={handleDetailsArchiveToggle}>
              {archiveIcon}
            </IconButton>
          </Tippy>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
              {selectedCall.direction === "inbound" ? <CallReceivedIcon /> : <CallMadeIcon />}
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Direction" secondary={selectedCall.direction} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
              <EventIcon />
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Call Type" secondary={selectedCall.call_type} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar >
              <BusinessIcon />
            </Avatar >
          </ListItemAvatar>
          <ListItemText primary="Via" secondary={selectedCall.via} />
        </ListItem>
        <Divider />
      </List>
    )
  }

  return (
    <React.Fragment>
      {loading ? <Loading /> : selectedCall && callInfo()}
    </React.Fragment>
  )
};

export default CallDetails;