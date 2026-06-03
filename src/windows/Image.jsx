import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const imageFile = windows.imgfile?.data;

  if (!imageFile) return null;

  const { name, imageUrl } = imageFile;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name || "Image File"}</h2>
      </div>

      <div className="image-file-window p-5">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full h-auto rounded-md"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
