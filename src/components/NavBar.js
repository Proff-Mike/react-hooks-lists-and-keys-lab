import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLinks = links.map(link => {
    const hashString = "#" + link;
    return  (<a key={link} href={hashString}>{link}</a>)
  })

  return (
    <nav>
        {/* This returns the <a> of the array 'links*/}
        {newLinks}
    </nav>
  )
  
}

export default NavBar;
