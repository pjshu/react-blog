export const combineClassName = (...args) => {
  let className = '';
  args.forEach(name => {
    if (name) {
      className += `${name} `;
    }
  });
  return className;
};
