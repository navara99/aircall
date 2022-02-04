import React from "react";
import { List, Divider, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import CallsListItem from "./CallsListItem.jsx";
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { dateParser } from "./helpers/dateHelpers.js";
import useCallsFilter from "./hooks/useCallFilter.js";
import { ListItemText } from "@mui/material";
import { toggleArchiveAll } from "./helpers/archiveHelpers.js";
import Loading from "./Loading.jsx";

function CallsList({ calls, setCalls, filter, loading, setLoading, setTabIndex }) {
  const filteredCalls = useCallsFilter(calls, filter);

  const generateCallsList = () => {

    return filteredCalls.map((call) => {
      return (
        <div key={call.id}>
          <Divider >{dateParser(call.created_at)}</Divider>
          <CallsListItem {...{ call, setCalls, setTabIndex }} />
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
                border: "1px solid black"
              }}>
              <ListItemIcon>{filter ? <UnarchiveIcon /> : <ArchiveIcon />}</ListItemIcon >
              <ListItemText
                primary={filter ? "Unarchive all calls" : "Archive all calls"}
              />
            </ListItemButton >
          </ListItem >
          {generateCallsList()}
        </List > : "Nothing"}
      </React.Fragment >
    );

  };

  return (
    <React.Fragment>
      {!loading ? allArchiveToggleBtn() : <Loading />}
    </React.Fragment >
  )

};

export default CallsList;