import WindowWrapper from "#hoc/WindowWrapper";
import { socials } from "#constants/index.js";
import WindowControls from "#components/WindowControls";


const Contact = () => {
  return (
    <>
    <div id="window-header">
    <WindowControls target="contact"/>
      <h2>Contact</h2>
    </div>

    <div className="space-y-5 p-5">
    <img 
    src="/images/contact.png"
    alt="Contact"
    className="w-16 h-16 rounded-full mx-auto"
    />
    <h3>Let's Connect</h3>
    <p>Got an idea? A bug to squash? Feel free to reach out!</p>
    <p>ayushyadav5867@gmail.com</p>

    <ul>
        {socials.map(({id, bg, link, icon, text}) => (
            <li key={id} style={{background:bg}}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-md text-white">
            <img src={icon} alt={text} className="size-5"/>
            <p>{text}</p>
            </a>
            </li>
            ))}
    </ul>
    </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
