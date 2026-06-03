import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { gallery } from "#constants/index.js";
import useWindowStore from "#store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="photos-grid p-4">
        <div className="grid grid-cols-3 gap-4">
          {gallery.map(({ id, img }) => (
            <div key={id} className="photo-item cursor-pointer" onClick={() => openWindow('imgfile', { name: `Photo ${id}`, imageUrl: img })}>
              <img
                src={img}
                alt={`gallery-${id}`}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
