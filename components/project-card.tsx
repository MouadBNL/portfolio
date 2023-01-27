import { ReactElement } from "react";

interface ProjectCardProps {
  technologies?: Array<string>;
  demo?: string;
  github?: string;
  icon?: ReactElement;
  title: string;
  image?: string;
}

const ProjectCard = ({
  technologies,
  demo,
  github,
  icon,
  title,
  image,
}: ProjectCardProps) => {
  return (
    <div className="p-5 rounded-lg bg-gr-800 shadow-lg">
      <header className="mb-5">
        <div className="w-full flex gap-4 justify-between items-center mb-4">
          <ul className="flex gap-2 overflow-hidden">
            {technologies?.map((tech) => {
              return (
                <li className="px-4 py-1 rounded bg-gr-900 font-medium text-gr-400" key={tech}>
                  {tech}
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-4">
            {!!github && (
              <li>
                <a
                  href={github}
                  className="flex items-center justify-center w-11 h-11 bg-gr-900 rounded-full hover:bg-gr-700 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_23)">
                      <path
                        d="M7.49999 15.8334C3.33332 17.0834 3.33332 13.75 1.66666 13.3334M13.3333 18.3334V15.1084C13.3646 14.711 13.3109 14.3115 13.1758 13.9365C13.0408 13.5615 12.8274 13.2195 12.55 12.9334C15.1667 12.6417 17.9167 11.65 17.9167 7.10003C17.9164 5.93655 17.4689 4.8177 16.6667 3.97503C17.0465 2.95712 17.0197 1.83199 16.5917 0.833363C16.5917 0.833363 15.6083 0.541696 13.3333 2.0667C11.4233 1.54905 9.40998 1.54905 7.49999 2.0667C5.22499 0.541696 4.24166 0.833363 4.24166 0.833363C3.81364 1.83199 3.78678 2.95712 4.16666 3.97503C3.35843 4.82395 2.91043 5.95292 2.91666 7.12503C2.91666 11.6417 5.66666 12.6334 8.28332 12.9584C8.00915 13.2417 7.79771 13.5795 7.66275 13.95C7.52778 14.3204 7.47233 14.7151 7.49999 15.1084V18.3334"
                        stroke="#94A1B2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_23">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            )}
            {!!demo && (
              <li>
                <a
                  href={demo}
                  className="flex items-center justify-center w-11 h-11 bg-gr-900 rounded-full hover:bg-gr-700 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_25)">
                      <path
                        d="M0.833344 10C0.833344 10 4.16668 3.33337 10 3.33337C15.8333 3.33337 19.1667 10 19.1667 10C19.1667 10 15.8333 16.6667 10 16.6667C4.16668 16.6667 0.833344 10 0.833344 10Z"
                        stroke="#94A1B2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                        stroke="#94A1B2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_25">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="flex gap-4 items-center h-11">
          {!!icon && (
            <div className="w-11 h-11 flex-shrink-0 bg-gr-900 flex items-center justify-center rounded-full">
              {icon}
            </div>
          )}
          <h3 className="text-3xl font-bold text-gr-50">{title}</h3>
        </div>
      </header>

      <div className="w-full aspect-square">

        <img className="block w-full aspect-square object-cover rounded-lg" src={image ?? 'https://via.placeholder.com/300x300'} alt={title + ' image'} />
      </div>
    </div>
  );
};

export default ProjectCard;
