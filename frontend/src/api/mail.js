// frontend/src/api/mail.js
export const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    const response = await fetch("https://portfolio01-backend-a723a56386b4.herokuapp.com/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("メールが送信されました!！");
    } else {
      alert("メール送信に失敗しました...");
    }
};

