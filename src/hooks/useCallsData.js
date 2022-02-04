import { useState, useEffect } from "react";
import axios from "axios";

const useCallsData = (setLoading) => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {

    setLoading(true);

    axios.get("https://aircall-job.herokuapp.com/activities")
      .then(({ data }) => {
        const calls = [...data];
        setCalls(calls);
        setLoading(false);
      });

  }, []);

  return { calls, setCalls }
};

export default useCallsData;