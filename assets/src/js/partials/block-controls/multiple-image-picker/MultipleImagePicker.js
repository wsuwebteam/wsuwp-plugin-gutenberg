import { useState, useEffect } from "@wordpress/element";
import {
  BaseControl,
  Button,
  FocalPointPicker,
  Popover,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

const MultipleImagePicker = (props) => {
  const { label = "Select Media", help = "", onChange, value = [] } = props;
  const [editingImage, setEditingImage] = useState(null);
  const [editingElement, setEditingElement] = useState(null);
  const [skipNextPopover, setSkipNextPopover] = useState(false);

  function updateSelectedMedia(media) {
    const images = mapToImageObjects(media);
    setEditingImage(null);
    onChange(images);
  }

  function mapToImageObjects(media) {
    return media.map((item) => {
      const currentImage = value.find((image) => image.id === item.id);
      return {
        id: item.id,
        url: item.url,
        thumbnail: item.sizes.thumbnail.url,
        focalPoint: currentImage?.focalPoint || { x: 0.5, y: 0.25 },
      };
    });
  }

  function updateFocalPoint(image, focalPoint) {
    const images = value.map((item) => {
      if (item.id === image.id) {
        return {
          ...item,
          focalPoint,
        };
      }
      return item;
    });

    setEditingImage(images.find((item) => item.id === image.id));
    onChange(images);
  }

  function openEditPopover(e, item) {
    if (!skipNextPopover) {
      setEditingElement(e.currentTarget);
      setEditingImage(item);
    }

    setSkipNextPopover(false);
  }

  function closeEditPopover(e) {
    if (e) {
      setSkipNextPopover(e.relatedTarget === editingElement);
    }

    setEditingElement(null);
    setEditingImage(null);
  }

  return (
    <>
      <BaseControl label={label} help={help} className="wsu-gutenberg-mip">
        {editingImage && (
          <Popover
            headerTitle="Edit Focal Point"
            focusOnMount="container"
            position="middle left"
            onFocusOutside={closeEditPopover}
            onClose={closeEditPopover}
            getAnchorRect={() =>
              editingElement?.getBoundingClientRect() || null
            }
          >
            <div className="wsu-gutenberg-mip__focal-point-picker-container">
              <FocalPointPicker
                url={editingImage.url}
                value={editingImage.focalPoint}
                onChange={(focalPoint) =>
                  updateFocalPoint(editingImage, focalPoint)
                }
              />
            </div>
          </Popover>
        )}

        <div className="wsu-gutenberg-mip__images">
          {value.map((item) => (
            <div
              key={item.id}
              className="wsu-gutenberg-mip__thumbnail-container"
            >
              <Button
                className={`wsu-gutenberg-mip__select-button${
                  editingImage?.id === item.id ? " is-selected" : ""
                }`}
                onClick={(e) => openEditPopover(e, item)}
              >
                <img
                  className="wsu-gutenberg-mip__thumbnail"
                  src={item.thumbnail}
                />
              </Button>
            </div>
          ))}
        </div>

        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => updateSelectedMedia(media)}
            allowedTypes={["image"]}
            multiple={true}
            gallery={true}
            value={value.map((item) => item.id)}
            render={({ open }) => (
              <BaseControl>
                <Button
                  isPrimary={true}
                  onClick={open}
                  className="wsu-gutenberg-mip__open-button"
                >
                  Select Images
                </Button>
              </BaseControl>
            )}
          />
        </MediaUploadCheck>
      </BaseControl>
    </>
  );
};

export default MultipleImagePicker;
