const Project = (title, description) => {
  const getTitle = () => title;
  const getDescription = () => description;

  return {
    getTitle,
    getDescription
  }
};
