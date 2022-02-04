import { useState, useEffect } from "react";
import axios from "axios";

const useSelectedCall = (id, setLoading) => {
  const [selectedCall, setSelectedCall] = useState({});

  useEffect(() => {
    const fetchCallDetails = async () => {
      try {
        setLoading((prev) => !prev);
        const endPoint = `https://aircall-job.herokuapp.com/activities/${id}`;
        const { data } = await axios.get(endPoint);
        setSelectedCall(data);
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLoading((prev) => !prev);
      } catch (err) {
        console.log(err.messsage);
      };
    };

    fetchCallDetails();
  }, []);

  return { selectedCall, setSelectedCall };
};

export default useSelectedCall;