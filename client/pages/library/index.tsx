import { AppLayout } from "@/components";
import { ScreenPreview } from "@/components/ScreenPreview";
import { useScreens } from "@/hooks";
import { useRouter } from "next/router";
import Masonry from "@mui/lab/Masonry";
import { Box, Button } from "@mui/material";

export default function Page() {
  const router = useRouter();
  const { data: pages, isLoading, setSize } = useScreens();
  const meta = pages?.[0]?.meta ?? {};
  const items = ((pages ?? []) as any[]).reduce<any[]>(
    (p, v) => p.concat(v.data),
    []
  );
  const pageCount = meta?.pagination?.pageCount || 0;
  const hasNext = pages && pages.length < pageCount;
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
      {hasNext && (
        <Box sx={{ py: "1rem", display: "flex", justifyContent: "center" }}>
          <Button disabled={isLoading} onClick={() => setSize((v) => v + 1)}>
            Загрузить ещё
          </Button>
        </Box>
      )}
    </AppLayout>
  );
}
