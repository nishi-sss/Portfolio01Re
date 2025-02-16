from flask import Blueprint, request, jsonify
import requests
import os

# Flask Blueprint を定義
mail_bp = Blueprint("mail_bp", __name__)

# Mailgun の API 設定
MAILGUN_DOMAIN = os.getenv("MAILGUN_DOMAIN")
MAILGUN_API_KEY = os.getenv("MAILGUN_API_KEY")

# 環境変数の確認（デバッグ用）
print("MAILGUN_DOMAIN:", MAILGUN_DOMAIN)
print("MAILGUN_API_KEY:", "EXISTS" if MAILGUN_API_KEY else "MISSING")  # APIキーが None じゃないか確認！

@mail_bp.route("/send-mail", methods=["POST"])
def send_mail():
    try:
        data = request.json
        name = data.get("name", "No Name Provided")  # None の場合はデフォルト値を入れる
        email = data.get("email", "No Email Provided")
        message_content = data.get("message", "No Message Provided")

        # 環境変数が正しく設定されているかチェック
        if not MAILGUN_DOMAIN or not MAILGUN_API_KEY:
            return jsonify({"error": "MAILGUN_DOMAIN or MAILGUN_API_KEY is not set!"}), 500

        # Mailgun API にリクエスト
        response = requests.post(
            f"https://api.mailgun.net/v3/{MAILGUN_DOMAIN}/messages",
            auth=("api", MAILGUN_API_KEY),
            data={"from": f"Hope先輩 <mailgun@{MAILGUN_DOMAIN}>",
                  "to": ["co.creation.nishisss@gmail.com"],
                  "subject": "お問い合わせが届きました!",
                  "text": f"名前: {name}\nメール: {email}\nメッセージ:\n{message_content}"}
        )

        # HTTP ステータスコードのチェック
        if response.status_code == 200:
            return jsonify({"message": "メール送信成功！"}), 200
        else:
            print("Mailgun API Error:", response.status_code, response.text)  # 追加のデバッグ情報
            return jsonify({"error": f"Mailgun API error: {response.status_code}", "details": response.text}), 500

    except requests.exceptions.RequestException as req_err:
        print("Requests Error:", req_err)
        return jsonify({"error": "Failed to connect to Mailgun API", "details": str(req_err)}), 500

    except Exception as e:
        print("メール送信エラー:", e)  # Flask のログにエラーを出力
        return jsonify({"error": "Unexpected server error", "details": str(e)}), 500

