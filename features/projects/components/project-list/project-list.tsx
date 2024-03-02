import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import classNames from "classnames";
import {
  Alert,
  AlertColor,
  AlertIcon,
  Button,
  ButtonColor,
  ButtonIcon,
} from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, refetch } = useGetProjects();

  const handleAlertButtonClick = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className={classNames("loader", styles.loaderWrapper)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/icons/loader.svg"} alt="loader" className={styles.loader} />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert
        color={AlertColor.error}
        icon={AlertIcon.error}
        className="alert-error"
      >
        <span>There was a problem while loading the project data</span>
        <Button
          color={ButtonColor.emptyError}
          onClick={handleAlertButtonClick}
          icon={ButtonIcon.trailing}
        >
          <span className={styles.textMedium}>Try again</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.16669 10.0001H15.8334M15.8334 10.0001L10 4.16675M15.8334 10.0001L10 15.8334"
              stroke="#B42318"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Alert>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
