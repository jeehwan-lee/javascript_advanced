const textarea = document.querySelector("textarea");
fileNameInput = document.querySelector(".file-name input");
selectMenu = document.querySelector(".save-as select");
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  console.log(fileNameInput.value);

  if (fileNameInput.value == "") {
    alert("Please Input the Filename");
  } else {
    const blob = new Blob([textarea.value], { type: selectMenu.value });

    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileURL;
    link.click();
  }
});
