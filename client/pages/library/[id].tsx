import { AppLayout } from "@/components";
import { useScreen } from "@/hooks";
import { CardMedia, CardContent, Typography, Card } from "@mui/material";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id = router.query.id ? String(router.query.id) : undefined;
  const { data } = useScreen(id);
  const url = data?.data?.attributes?.data?.data?.attributes?.url;
  const movie = data?.data?.attributes?.movie;
  const description = data?.data?.attributes?.description;
  return (
    <AppLayout>
      {url && (
        <Card>
          <CardMedia component="img" image={`/api/strapi` + url} />
          {movie && (
            <CardContent sx={{ pb: 0 }}>
              <Typography color="text.secondary">
                <strong>Фильм / сериал:</strong> {movie}
              </Typography>
            </CardContent>
          )}
          {description && (
            <CardContent>
              <Typography color="text.secondary">{description}</Typography>
            </CardContent>
          )}
        </Card>
      )}
    </AppLayout>
  );
}
