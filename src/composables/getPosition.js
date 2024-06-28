export const getPosition = (node) => {
  const rect = node.getBoundingClientRect();
  return rect;
}