import Icons from "../../assets/icons/Icons";


let files = [];
export default function DisplayFiles(fileName, size) {
  let dotNum = fileName.indexOf(".");

  let spaceNum = fileName.indexOf(" ");

  if (spaceNum !== -1 && spaceNum <= dotNum)
    fileName = fileName.slice(0, spaceNum);
  else fileName = fileName.slice(0, dotNum);
  //file size 
  size=Math.floor(size/1000);//getting files in Kb from bytes
  (size < 1024) ? size = size +' kb' : size = (size/(1024*1024)).toFixed(2)+' mb';
 
   files.push({ nameOfFile: fileName, fileSize: size });
  console.log(files);
  display();
}

function display() {
  let html = "";
  for (let i = 0; i < files.length; i++) {
    html += `
    <div class="fileContainer d-flex row m-4" >
    <div class="file-left d-flex align-items-center col">
<img src=${Icons.excel_icon} alt="file_icon" class="m-0 p-0" />
<h6 class="p-1 m-0">${files[i].nameOfFile}</h6>
<p class="p-1 m-0">${files[i].fileSize}</p>
</div>
<div class="ml-auto col-auto">
<img src=${Icons.cross_icon} alt="cross-icon" onclick="console.log('hii')" class="element" />
</div>
</div> 
`;
  }
    document.getElementById("upload-file").innerHTML = html;
    console.log(document.querySelectorAll(".element"));
    document.querySelectorAll(".element").forEach((element, index) => {
      // console.log(deleteButton);
      element.addEventListener("click", () => {
        console.log(index);
        files.splice(index, 1);
        display();
      });
    });

}
