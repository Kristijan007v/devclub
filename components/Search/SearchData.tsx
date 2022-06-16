import { forwardRef } from "react";
import {
  Group,
  Avatar,
  Anchor,
  Text,
  MantineColor,
  SelectItemProps,
  Autocomplete,
} from "@mantine/core";
import { Hash } from "tabler-icons-react";
import formatDate from "../../lib/backend/utilities/formatDate";

// const charactersList = [
//   {
//     image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
//     label: "Bender Bending Rodríguez",
//   },

//   {
//     image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
//     label: "Carol Miller",
//   },
//   {
//     image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
//     label: "Homer Simpson",
//   },
//   {
//     image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
//     label: "Spongebob Squarepants",
//   },
// ];

// const data = charactersList.map((item) => ({ ...item, value: item.label }));

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
  href: string;
  date: string;
}

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, href, date, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others} className={"p-4"}>
      <Group noWrap>
        <Avatar src={image} />

        <Group position="apart" className="w-full">
          <Anchor href={`/posts/${href}`} color={"blue"}>
            {value}
          </Anchor>
          <Text size="sm" weight={"normal"} color={"gray"}>
            {formatDate(date)}
          </Text>
        </Group>
      </Group>
    </div>
  )
);

AutoCompleteItem.displayName = "AutoCompleteItem";

interface Props {
  searchData: string[];
}

const SearchData = ({ searchData }: Props) => {
  return (
    <Autocomplete
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
      placeholder="Search posts ..."
      itemComponent={AutoCompleteItem}
      icon={<Hash />}
      limit={4}
      data={searchData}
      filter={(value, item) =>
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
};

export default SearchData;
