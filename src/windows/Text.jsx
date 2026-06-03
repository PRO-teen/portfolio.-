import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const textFile = windows.txtfile?.data;

  if (!textFile) return null;

  const { name, image, subtitle, description } = textFile;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name || "Text File"}</h2>
      </div>

      <div className="text-file-window px-6 py-5">
        {image && (
          <img
            src={image}
            alt={name}
            className="max-w-full h-auto rounded-md mb-4"
          />
        )}

        {subtitle && <p className="subtitle mb-4 text-sm text-slate-500">{subtitle}</p>}

        {description?.length > 0 && (
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
