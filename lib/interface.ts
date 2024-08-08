export interface NavLinksI {
  href: string;
  label: string;
}

export interface ILink {
  Icon: React.ComponentType; // Represents a React component type
  title: string;
  link: string;
  color: string;
}

export interface CommonHeaderProps {
  heading?: string;
  subHeading?: string;
}

export interface ITechnology {
  img: JSX.Element;
  title: string;
  size: "normal" | "large";
}

export interface ITechDetail {
  progress: number;
  details: string;
}

export interface Project {
  images: string[];
  projectName: string;
  caseStudy: string;
  projectStatus: string;
  liveLink: string;
  technologies: string[];
}
