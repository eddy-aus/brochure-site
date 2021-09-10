const toPanelStyles = (linkIndex, linkRefs) => {
  let left = 4;

  for (let i = 0; i <= linkIndex; i++) {
    if (i === linkIndex) {
      left += linkRefs.current[i].offsetWidth / 2;
    } else {
      left += linkRefs.current[i].offsetWidth + 4;
    }
  }

  return {
    left,
    width: linkRefs.current[linkIndex].offsetWidth,
  };
};

export { toPanelStyles as default };
