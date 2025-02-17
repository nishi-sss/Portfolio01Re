export const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📩 フォーム送信ボタンが押された！");  // ← 追加

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    console.log("📨 送信データ:", formData);  // ← 追加

    try {
        const response = await fetch("https://portfolio01-backend-a723a56386b4.herokuapp.com/send-mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        console.log("📡 サーバーからのレスポンス:", response.status);  // ← 追加

        if (response.ok) {
            alert("メールが送信されました！🎉");
        } else {
            alert("メール送信に失敗しました… 😢");
        }
    } catch (error) {
        console.error("❌ fetch() エラー:", error);  // ← 追加
    }
};

