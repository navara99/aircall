import React from "react";
import { List, Divider, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import CallsListItem from "./CallsListItem.jsx";
import ArchiveIcon from '@mui/icons-material/Archive';
import RestoreIcon from '@mui/icons-material/Restore';
import { dateParser } from "../../helpers/dateHelpers.js";
import useCallsFilter from "../../hooks/useCallFilter.js";
import { ListItemText } from "@mui/material";
import { toggleArchiveAll } from "../../helpers/archiveHelpers.js";
import Loading from "../Loading/Loading.jsx";
import Empty from "../Empty/Empty.jsx";

function CallsList({ calls, setCalls, filter, loading, setLoading, setTabIndex, setSnackBarDetails }) {
  const filteredCalls = useCallsFilter(calls, filter);

  const generateCallsList = () => {

    return filteredCalls.map((call) => {
      return (
        <div key={call.id}>
          <Divider style={{ color: "#2ac420" }} textAlign="left">{dateParser(call.created_at)}</Divider>
          <CallsListItem {...{ call, setCalls, setTabIndex, setSnackBarDetails }} />
        </div>
      );
    });
  };

  const handleAllCalls = async () => {
    const archiveAll = filter ? false : true;
    await toggleArchiveAll(setLoading, calls, setCalls, archiveAll);
  };

  const allArchiveToggleBtn = () => {

    return (
      <React.Fragment>
        {filteredCalls.length > 0 ? < List >
          < ListItem >
            <ListItemButton
              onClick={handleAllCalls}
              style={{
                borderRadius: "200px",
                border: "2px solid #2ac420"
              }}>
              <ListItemIcon>{filter ? <RestoreIcon /> : <ArchiveIcon />}</ListItemIcon >
              <ListItemText
                primary={filter ? "Restore all calls" : "Archive all calls"}
              />
            </ListItemButton >
          </ListItem >
          {generateCallsList()}
        </List > : <Empty message={filter ? " You have not archived any calls." : "Call Log is empty"} />}
      </React.Fragment >
    );

  };

  return (
    <React.Fragment>
      {!loading ? allArchiveToggleBtn() :
        <Loading
          message={filteredCalls.length ? `${filter ? "Restoring" : "Archiving"} all calls...` : ""}
        />}
    </React.Fragment >
  )

};

export default CallsList;