export const ColorList = () => {
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <ul className="color-list">
      {colors.map((color, index) => (
        <li key={index} className="color-item">
          {color}
        </li>
      ))}
    </ul>
  );
};
