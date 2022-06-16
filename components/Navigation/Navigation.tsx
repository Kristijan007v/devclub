import { Autocomplete, Kbd, Text } from "@mantine/core";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export default function Navigation() {
  return (
    <nav className="flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-2 justify-between items-center p-4">
      <div className="flex items-center justify-between">
        <a className="font-extrabold text-3xl ">DEVCLUB</a>
        <ThemeSwitch />
      </div>
      <div className="flex space-x-0 md:space-x-2 items-center">
        <div className="hidden lg:flex items-center space-x-2">
          <Text size="sm">Toogle theme</Text>
          <div>
            <Kbd>CTRL/⌘</Kbd> + <Kbd>J</Kbd>
          </div>
        </div>
        <div className="grow md:grow-0">
          <Autocomplete
            placeholder="Search posts"
            data={["React", "Angular", "Svelte", "Vue"]}
          />
        </div>
      </div>
    </nav>
  );
}
