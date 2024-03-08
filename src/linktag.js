import icon from "./images/cloud.png";
function addLinkTag() {
  const headTag = document.querySelector("head");
  const link = document.createElement("link");

  link.rel = "icon";
  link.href = icon;
  headTag.appendChild(link);
}
export default addLinkTag;
