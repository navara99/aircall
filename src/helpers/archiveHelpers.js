import axios from "axios";

export const toggleArchiveAll = async (loading, setLoading, calls, setCalls, archiveAll) => {

  try {
    setLoading((prev) => !prev);

    await Promise.all(calls.map(async (call) => {
      const endPoint = `https://aircall-job.herokuapp.com/activities/${call.id}`;
      return await axios.post(endPoint, { is_archived: archiveAll });
    }));

    // Let loading circle spin for a bit longer just to give the user feedback

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setCalls((prev) => {
      return prev.map((call) => {
        // Refactor this with object spread after configuring babel

        call.is_archived = archiveAll;
        return call;
      });
    });

    setLoading((prev) => !prev);
  } catch (err) {
    console.log(err.message);
  };

};