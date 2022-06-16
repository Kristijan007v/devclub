import { Autocomplete, Kbd, Text, Anchor } from "@mantine/core";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Hash } from "tabler-icons-react";

interface Props {
  autoComplete: string[];
}

export default function Navigation({ autoComplete }: Props) {
  return (
    <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-2 justify-between items-center p-4 w-full">
      <div className="flex items-center justify-between w-full">
        <a className="font-extrabold text-3xl ">DEVCLUB</a>
        <span className="block md:hidden">
          <ThemeSwitch />
        </span>
      </div>
      <div className="flex space-x-0 md:space-x-2 items-center w-full">
        <div className="hidden md:flex items-center space-x-2 w-full">
          <Text size="sm">Toogle theme</Text>
          <div>
            <Kbd>CTRL/⌘</Kbd> + <Kbd>J</Kbd>
          </div>
        </div>
        <span className="grow md:grow-0">
          <Autocomplete
            transition="pop-top-left"
            transitionDuration={80}
            transitionTimingFunction="ease"
            placeholder="Search posts ..."
            icon={<Hash />}
            limit={4}
            data={autoComplete}
          />
        </span>
      </div>
    </nav>
  );
}
