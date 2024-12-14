export const SumDisplay = () => {
  const num1 = 5;
  const num2 = 10;
  const sum = num1 + num2;

  return (
    <p className="sum-display">
      Сума чисел {num1} і {num2} дорівнює {sum}.
    </p>
  );
};
