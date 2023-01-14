const previewFile = (file) => {
  const preview = document.getElementById("preview");

  const reader = new FileReader();

  // URLとして読み込まれたときに実行する処理
  reader.onload = function (e) {
    const imageUrl = e.target.result; // URLはevent.target.resultで呼び出せる
    const img = document.createElement("img"); // img要素を作成
    img.src = imageUrl; // URLをimg要素にセット
    preview.appendChild(img); // #previewの中に追加
  };

  // いざファイルをURLとして読み込む
  reader.readAsDataURL(file);
}

// ファイル選択時、ファイル内容をconsoleに表示
const fileInput = document.getElementById("file_input");

const handleFileSelect = () => {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    previewFile(files[i]);
  }
};

fileInput.addEventListener("change", handleFileSelect);
