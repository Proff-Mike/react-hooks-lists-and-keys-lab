import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyItems = technologies.map(technology => {
    return (
      <span key ={technology}>{technology}</span>
    )
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* Renders a <span> for each technology in the technologies array */}
        {technologyItems}
      </div>
    </div>
  );
}

export default ProjectItem;
