import { Kbd, Text, Anchor } from "@mantine/core";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SearchData from "../Search/SearchData";
import Link from "next/link";

interface Props {
  autoComplete: string[];
}

export default function Navigation({ autoComplete }: Props) {
  return (
    <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-2 justify-between items-center p-4 w-full">
      <div className="flex items-center justify-between w-full">
        {/* <a className="font-extrabold text-3xl ">DEVCLUB</a> */}
        <Link href="/">
          <Anchor
            component="a"
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[5]
                  : theme.colors.dark[6],
            })}
            className="font-extrabold text-3xl "
          >
            DEVCLUB
          </Anchor>
        </Link>
        <div className="block md:hidden">
          <ThemeSwitch />
        </div>
      </div>
      <div className="flex space-x-0 md:space-x-2 items-center w-full">
        <div className="hidden md:flex items-center space-x-2 w-full">
          <Text size="sm">Toogle theme</Text>
          <div>
            <Kbd>CTRL/⌘</Kbd> + <Kbd>J</Kbd>
          </div>
        </div>
        <div className="grow md:grow-0">
          <SearchData searchData={autoComplete} />
        </div>
      </div>
    </nav>
  );
}
