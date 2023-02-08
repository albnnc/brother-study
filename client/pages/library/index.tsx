import { AppLayout } from "@/components";
import { ScreenPreview } from "@/components/ScreenPreview";
import { useScreens } from "@/hooks";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Page() {
  const router = useRouter();
  const { data: pages } = useScreens();
  const meta = pages?.[0]?.meta ?? {};
  const items = ((pages ?? []) as any[]).reduce<any[]>(
    (p, v) => p.concat(v.data),
    []
  );
  console.log("meta", meta);
  console.log("items", items);
  return (
    <AppLayout>
      {items && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry style={{ gap: "1rem" }}>
            {items.map((v) => (
              <ScreenPreview
                key={v.id}
                data={v}
                onClick={() => router.push(`/library/${v.id}`)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </AppLayout>
  );
}
