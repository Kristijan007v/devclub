import { showNotification } from "@mantine/notifications";
import { Copy, Check } from "tabler-icons-react";

interface Props {
  textToCopy: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function CopyToClipboard({ textToCopy, size }: Props) {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      showNotification({
        title: "Success",
        message: "Copied to clipboard!",
        color: "teal",
        icon: <Check />,
      });
      return await navigator.clipboard.writeText(text);
    } else {
      showNotification({
        title: "Success",
        message: "Copied to clipboard!",
        color: "teal",
        icon: <Check />,
      });
      return document.execCommand("copy", true, text);
    }
  }
  return (
    <div className="hover:cursor-pointer">
      <Copy onClick={() => copyTextToClipboard(textToCopy)} size={size} />
    </div>
  );
}
