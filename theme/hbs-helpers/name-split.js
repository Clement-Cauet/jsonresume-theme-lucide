const nameSplit = (name) => {
  if (!name) return "";

  const parts = name.split(" ");

  if (parts.length < 2) return name;

  const firstName = parts.slice(0, -1).join(" ");
  const lastName = parts.slice(-1).join(" ");
  
  return `${firstName}<br>${lastName}`;
};

module.exports = { nameSplit };