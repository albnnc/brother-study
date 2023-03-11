import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardProps,
  Typography,
} from "@mui/material";

const maxDescriptionLength = 100;

export interface ScreenPreviewProps extends CardProps {
  data: any;
  compact?: boolean;
}

export const ScreenPreview = ({
  data,
  compact,
  ...rest
}: ScreenPreviewProps) => {
  const originalDescription = (data?.attributes?.description as string) || "";
  const targetDescription = originalDescription.slice(0, maxDescriptionLength);
  const trimmed = targetDescription.length < originalDescription.length;
  return (
    <Card {...rest}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`/api/strapi` + data?.attributes?.data?.data?.attributes?.url}
        />
        {!compact && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {targetDescription + (trimmed ? "..." : "")}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};
