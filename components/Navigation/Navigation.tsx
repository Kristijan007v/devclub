import React from "react";
import { Kbd, Autocomplete, Text } from "@mantine/core";

export default function Navigation() {
  return (
    <nav className="flex space-x-0 justify-between items-center p-4">
      <a className="font-extrabold text-3xl ">DEVCLUB</a>
      <div className="flex space-x-2 items-center">
        <div className="hidden lg:flex items-center space-x-2">
          <Text size="sm">Toogle theme</Text>
          <div>
            <Kbd>CTRL/⌘</Kbd> + <Kbd>J</Kbd>
          </div>
        </div>
        <Autocomplete
          placeholder="Search posts"
          data={["React", "Angular", "Svelte", "Vue"]}
        />
      </div>
    </nav>
  );
}
