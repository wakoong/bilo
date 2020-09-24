import * as React from "react";
import ItemPreviewCardStyles from "./styles/ItemPreviewCardStyles";

interface ItemPreviewCardProps {
  title: string;
  subtitle: string;
  imagePath: string;
}

const ItemPreviewCard = ({
  title,
  subtitle,
  imagePath
}: ItemPreviewCardProps) => {
  return (
    <ItemPreviewCardStyles>
      <div className="image-container">
        <img src={imagePath} />
      </div>
      <div className="description-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </ItemPreviewCardStyles>
  );
};

export default ItemPreviewCard;
