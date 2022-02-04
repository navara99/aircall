import { filterByArchived, filterByNotArchived } from "../helpers/filterHelpers";

const useCallsFilter = (calls, filter, value) => {
  if (!filter) return filterByNotArchived(calls);
  return filterByArchived(calls);
};

export default useCallsFilter