import { Box, Group } from "@mantine/core";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  BrandWhatsapp,
  BrandFacebook,
  BrandTwitter,
  Copy,
} from "tabler-icons-react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

interface Props {
  text?: string;
  url: string;
  iconSize?: "sm" | "md" | "lg" | "xl";
  style?: string;
  bgColor?: string;
}

export default function SocialShare({
  text,
  url,
  iconSize,
  style,
  bgColor,
}: Props) {
  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
      })}
    >
      <Group position="apart">
        <p className="whitespace-nowrap font-medium">{text}</p>
        <div className="flex space-x-4">
          <FacebookShareButton
            quote="20.456 People have brought the light to UA. Join them."
            hashtag="#ukraine"
            url={url}
          >
            <BrandFacebook size={iconSize} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <BrandTwitter size={iconSize} />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <BrandWhatsapp size={iconSize} />
          </WhatsappShareButton>
          <CopyToClipboard textToCopy={url} size={iconSize} />
        </div>
      </Group>
    </Box>
  );
}
