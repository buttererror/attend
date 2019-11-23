document.getElementById("fileUpload").addEventListener('change', event => {
    handleFileUpload(event);
});

let handleFileUpload = event => {
    let fileName = event.target.files[0].name;
    fileName = fileName.slice(0, fileName.indexOf("."));
  console.log(fileName);
};
