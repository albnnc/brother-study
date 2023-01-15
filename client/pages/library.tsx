import { AppLayout } from "@/components";
import { ScreenPreview } from "@/components/ScreenPreview";
import { useScreens } from "@/hooks";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Page() {
  const { data: pages } = useScreens();
  console.log(pages);
  if (!pages) {
    // FIXME
    return null;
  }
  const meta = pages[0]?.meta ?? {};
  const items = (pages as any[]).reduce<any[]>((p, v) => p.concat(v.data), []);
  console.log("meta", meta);
  console.log("items", items);
  return (
    <AppLayout>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry style={{ gap: "1rem" }}>
          {items.map((v) => (
            <ScreenPreview key={v.id} data={v} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </AppLayout>
  );
}
