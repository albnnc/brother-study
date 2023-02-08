import { AppLayout } from "@/components";
import { useScreen } from "@/hooks";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id = router.query.id ? String(router.query.id) : undefined;
  const { data } = useScreen(id);
  const url = data?.data?.attributes?.data?.data?.attributes?.url;
  const description = data?.data?.attributes?.description;
  return (
    <AppLayout>
      {url && description && (
        <Card>
          <CardMedia component="img" image={`/api/strapi` + url} />
          <CardContent>
            <Typography color="text.secondary">{description}</Typography>
          </CardContent>
        </Card>
      )}
    </AppLayout>
  );
}
