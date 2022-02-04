import { useState, useEffect } from "react";
import axios from "axios";

const useCallsData = (setLoading) => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {

    const getAllCallsData = async () => {
      try {
        setLoading((prev) => !prev);
        const { data } = await axios.get("https://aircall-job.herokuapp.com/activities");
        const calls = [...data];
        setCalls(calls);
        setLoading((prev) => !prev);
      } catch (err) {
        console.log(err.message);
      };

    };

    getAllCallsData();

  }, []);

  return { calls, setCalls }
};

export default useCallsData;