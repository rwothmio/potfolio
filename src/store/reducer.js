import createLinkedSections from "./helper_function/createLinkedSections";

const sections = ["home", "about", "projects", "contact"];
const linkedSections = createLinkedSections(sections);

const initialState = {
  currentSection: "home",
};

const currentPageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "absolute":
      if (linkedSections[payload.section].current) {
        return {
          ...state,
          currentSection: linkedSections[payload.section].current,
        };
      }
    case "relative":
      if (linkedSections[state.currentSection][payload.path]) {
        return {
          ...state,
          currentSection: linkedSections[state.currentSection][payload.path],
        };
      }
    default:
      return { ...state };
  }
};

export default currentPageReducer;
