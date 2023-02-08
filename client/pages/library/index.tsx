import { AppLayout } from "@/components";
import { ScreenPreview } from "@/components/ScreenPreview";
import { useScreens } from "@/hooks";
import { useRouter } from "next/router";
import Masonry from "@mui/lab/Masonry";

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
        <Masonry columns={3} spacing={2}>
          {items.map((v) => (
            <ScreenPreview
              key={v.id}
              data={v}
              onClick={() => router.push(`/library/${v.id}`)}
            />
          ))}
        </Masonry>
      )}
    </AppLayout>
  );
}
