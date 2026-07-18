import { renderOgImage } from "@/lib/og";

export const dynamic = "force-static";

export { alt, contentType, size } from "@/lib/og";

export default function Image() {
  return renderOgImage();
}
