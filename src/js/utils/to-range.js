const toRange = (start, end, separator = '–') => {
  if (start === end) {
    return '' + end;
  }

  if (start > end) {
    return end + separator + start;
  }

  return start + separator + end;
};

export { toRange as default };
