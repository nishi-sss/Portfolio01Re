export const handleSubmit = async (e, formData) => { // ✅ `formData` を受け取る！
    e.preventDefault();  // ✅ `フォーム送信時のリロードを防ぐ！`

    console.log("📩 フォーム送信ボタンが押された！");  // ✅ `デバッグログ`
    console.log("📨 送信データ:", formData);  // ✅ `送信データの確認`

    const response = await fetch("https://portfolio01-backend-a723a56386b4.herokuapp.com/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log("✅ メール送信成功！🎉");
      alert("メールが送信されました！ 🎉");

      // ✅ `フォームの入力値をクリア`
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

    } else {
      console.log("❌ メール送信失敗！😢", response);
      alert("メール送信に失敗しました...");
    }
};

