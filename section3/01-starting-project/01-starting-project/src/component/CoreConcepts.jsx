export const CoreConcepts = ({imgSrc, title, description }) => {
  return (
    <li>
    <img src="imgSrc" alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};
