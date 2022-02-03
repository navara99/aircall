import React from "react";
import { List, Divider, ListSubheader } from "@mui/material";
import CallsListItem from "./CallsListItem.jsx";
import { dateParser } from "./helpers/dateHelpers.js";
import useCallsFilter from "./hooks/useCallFilter.js";

function CallsList({ calls, filter, header }) {
  const filteredCalls = useCallsFilter(calls, filter);

  const generateCallsList = () => {
    return filteredCalls.map((call) => {
      return (
        <div key={call.id}>
          <Divider >{dateParser(call.created_at)}</Divider>
          <CallsListItem {...{ call }} />
        </div>
      );
    });
  };

  return (
    <List subheader={<ListSubheader>{header}</ListSubheader>}>
      {generateCallsList()}
    </List>
  )
};

export default CallsList;