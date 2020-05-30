const formatTime = (d, accuracy = 'minutes') => {
  d = new Date(d * 1000);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const second = d.getSeconds();
  return `${year}/${month}/${date} ${hour}:${minutes < 10 ? 0 : ''}${minutes}${accuracy === 'second' ? `:${second}` : ''}`;
};


export {formatTime};
