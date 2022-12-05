'use strict';

module.export = function downloadFile({
  url,
  fileName,
}) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.addEventListener("load", function() {
      if (xhr.status === 200) {
        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(a.href);
      }
    });
    xhr.send();
}