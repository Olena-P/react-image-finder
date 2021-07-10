import { List } from "./Button.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({images}) {
    return (
        <List>
            {images && images.map(image => {
                return (
                    <ImageGalleryItem></ImageGalleryItem>
                )
                
            })}
            
        </List>
    )
}