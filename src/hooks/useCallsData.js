import { useState, useEffect } from "react";
import axios from "axios";

const useCallsData = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {

    axios.get("https://aircall-job.herokuapp.com/activities")
      .then(({ data }) => {
        const calls = [...data];
        setCalls({ calls });
      });

  }, []);

  return { calls, setCalls }
};

export default useCallsData;