/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card, CardProps } from "antd";

const maxDescriptionLength = 100;

export interface ScreenPreviewProps extends CardProps {
  data: any;
}

export const ScreenPreview = ({ data, ...rest }: ScreenPreviewProps) => {
  const originalDescription = (data?.attributes?.description as string) || "";
  const targetDescription = originalDescription.slice(0, maxDescriptionLength);
  const trimmed = targetDescription.length < originalDescription.length;
  return (
    <Card
      hoverable
      cover={
        <img
          src={`/api/strapi` + data?.attributes?.data?.data?.attributes?.url}
        />
      }
      {...rest}
    >
      <Card.Meta description={targetDescription + (trimmed ? "..." : "")} />
    </Card>
  );
};
