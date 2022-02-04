export const filterByArchived = (calls) => {
  return calls.filter((call) => {
    return call.is_archived
  });
};

export const filterByNotArchived = (calls) => {
  return calls.filter((call) => {
    return !call.is_archived
  });
};

export const filterByType = () => {

};


export const filterByDirection = () => {

};