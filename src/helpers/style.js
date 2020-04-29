export const combineClassName = (...args) => {
  let className = '';
  args.forEach(name => {
    className += `${name} `;
  });
  return className;
};
