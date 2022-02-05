import axios from "axios";

export const toggleArchiveAll = async (setLoading, calls, setCalls, archiveAll, setSnackBarDetails) => {

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
        return { ...call, is_archived: archiveAll };
      });
    });

    setSnackBarDetails({
      open: true,
      message: `Successfully ${archiveAll ? "archived" : "restored"} all calls`
    });

    setLoading((prev) => !prev);

  } catch (err) {
    console.log(err.message);
  };

};

export const toggleArchive = (id, is_archived, setCalls, setSnackBarDetails, setSelectedCall) => {
  const endPoint = `https://aircall-job.herokuapp.com/activities/${id}`;

  axios.post(endPoint, {
    is_archived: !is_archived
  })
    .catch((err) => {
      console.log(err.message);
    });

  setCalls((prev) => {
    const selectedCall = prev.find((call) => call.id === id);
    const otherCalls = prev.filter((call) => call.id !== selectedCall.id);
    const selectedCallNew = { ...selectedCall, is_archived: !is_archived };
    const newCallsData = [...otherCalls, selectedCallNew];
    return newCallsData;
  });

  if (setSelectedCall) {
    setSelectedCall((prev) => {
      prev.is_archived = !prev.is_archived;
      return prev;
    });
  };

  setSnackBarDetails({
    open: true,
    message: `Call# ${id} successfuly ${is_archived ? "restored" : "archived"}`
  });

};