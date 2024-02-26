import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import classNames from "classnames";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div className={classNames("loader", styles.loaderWrapper)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/icons/loader.svg"} alt="loader" className={styles.loader} />
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
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
