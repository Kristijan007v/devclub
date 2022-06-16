import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Moon, Sun } from "tabler-icons-react";

export default function ThemeSwitch() {
  //Toogle theme
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <div>
      {colorScheme === "light" ? (
        <Moon
          onClick={() => {
            toggleColorScheme();
          }}
        />
      ) : (
        <Sun
          onClick={() => {
            toggleColorScheme();
          }}
        />
      )}
    </div>
  );
}
