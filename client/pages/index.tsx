import { AppLayout, ScreenPreview } from "@/components";
import { useScreens } from "@/hooks";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Slider from "react-slick";

export default function Page() {
  const router = useRouter();
  const { data: pages } = useScreens();
  const items = ((pages ?? []) as any[]).reduce<any[]>(
    (p, v) => p.concat(v.data),
    []
  );
  console.log(items);
  return (
    <AppLayout>
      <Typography variant="h4">Привет!</Typography>
      <Typography variant="subtitle1" sx={{ my: "1rem" }}>
        Это – лучший проект
      </Typography>
      <Typography variant="h4">Последние загрузки</Typography>
      {items.length ? (
        <Box sx={{ mx: "-0.5rem" }}>
          <Slider
            infinite
            autoplay
            arrows={false}
            slidesToShow={Math.min(items.length, 3)}
            slidesToScroll={1}
            autoplaySpeed={2000}
          >
            {items.map((v) => (
              <Box
                key={v.id}
                sx={{
                  p: "0.5rem",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ScreenPreview
                  compact
                  data={v}
                  onClick={() => router.push(`/library/${v.id}`)}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 300,
            opacity: 0.5,
          }}
        >
          Нет загруженных кадров
        </Box>
      )}
    </AppLayout>
  );
}
