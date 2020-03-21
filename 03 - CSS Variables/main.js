const inputs = document.querySelectorAll("input");

const updateStyle = e => {
  const suffix = e.target.dataset["sizing"] || "";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
  );
};

inputs.forEach(input => {
  input.addEventListener("change", updateStyle);
  input.addEventListener("mousemove", updateStyle);
});
