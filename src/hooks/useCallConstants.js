import React from "react";
import CallIcon from '@mui/icons-material/Call';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';

const useCallConstants = () => {

  const iconTypeMap = {
    "answered": <CallIcon style={{ "color": "green" }} />,
    "missed": <PhoneMissedIcon style={{ "color": "red" }} />,
    "voicemail": <VoicemailIcon style={{ "color": "black" }} />
  };

  const secondaryTextPrefixMap = {
    "answered": "for ",
    "missed": "tried to call on ",
    "voicemail": "left voicemail for "
  };

  return {
    iconTypeMap,
    secondaryTextPrefixMap
  };
  
};

export default useCallConstants;
