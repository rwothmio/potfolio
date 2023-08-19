const createLinkedSections = (sections) => {
  const linkedSections = {};
  sections.forEach((section, i) => {
    if (i === 0) {
      linkedSections[section] = {
        prev: null,
        current: sections[i],
        next: sections[i + 1],
      };
    } else if (i === sections.length - 1) {
      linkedSections[section] = {
        prev: sections[i - 1],
        current: sections[i],
        next: null,
      };
    } else {
      linkedSections[section] = {
        prev: sections[i - 1],
        current: sections[i],
        next: sections[i + 1],
      };
    }
  });
  return linkedSections;
};

export default createLinkedSections;
