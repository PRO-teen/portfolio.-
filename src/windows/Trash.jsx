import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants/index.js";
import useWindowStore from "#store/window";

const Trash = () => {
  const { openWindow } = useWindowStore();

  const items = locations.trash?.children || [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <h2>Archive</h2>
      </div>

      <div className="photos-grid p-4">
        <div className="grid grid-cols-2 gap-4">
          {items.map(({ id, imageUrl }) => (
            <div
              key={id}
              className="photo-item cursor-pointer"
              onClick={() => openWindow("imgfile", { name: `Trash ${id}`, imageUrl })}
            >
              <img src={imageUrl} alt={`trash-${id}`} className="w-full h-auto rounded" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");

export default TrashWindow;
