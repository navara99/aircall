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
import CallMadeIcon from '@mui/icons-material/CallMade';
import EventIcon from '@mui/icons-material/Event';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import BusinessIcon from '@mui/icons-material/Business';
import TimerIcon from '@mui/icons-material/Timer';
import ArchiveIcon from '@mui/icons-material/Archive';
import Unarchive from "@mui/icons-material/Unarchive";

function CallDetails({ loading, setLoading, setTabIndex }) {
  const { id } = useParams();
  const call = useSelectedCall(id, setLoading);

  useEffect(() => {
    setTabIndex(false);
  });

  return (
    <React.Fragment>
      {loading ? <Loading /> :
        <List subheader={<ListSubheader>Call # {call.id}</ListSubheader>}>
          <ListItem>
            <ListItemAvatar>
              <Avatar >
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Caller" secondary={call.from} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Reciever" secondary={call.to} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                <EventIcon />
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Time & Day" secondary={dateParser(call.created_at)} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                <TimerIcon />
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Duration" secondary={call.duration + " seconds"} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                {<ArchiveIcon />}
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Archived" secondary={call.is_archived ? "Yes" : "No"} />
            <IconButton>
              {call.is_archived ? <Unarchive /> : <ArchiveIcon />}
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                {call.direction === "inbound" ? <CallReceivedIcon /> : <CallMadeIcon />}
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Direction" secondary={call.direction} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                <EventIcon />
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Call Type" secondary={call.call_type} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                <BusinessIcon />
              </Avatar >
            </ListItemAvatar>
            <ListItemText primary="Via" secondary={call.via} />
          </ListItem>
          <Divider />
        </List>}
    </React.Fragment>
  )
};

export default CallDetails;