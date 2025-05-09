import { useHover } from "../hooks";

export function UseHover() {
  const { hovered, ref } = useHover<HTMLDivElement>();

  return (
    <div className="text" ref={ref}>
      {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
    </div>
  );
}
