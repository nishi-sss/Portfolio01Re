from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
from dotenv import load_dotenv  # 追加！
import os

#  環境変数の読み込みは `app` の前に！
load_dotenv(dotenv_path="C:/Users/retur/portfolio01Re/backend/.env")

from .routes import main
from .mail import mail_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    mail = Mail(app)

    # ルート登録
    app.register_blueprint(main)
    app.register_blueprint(mail_bp)

    # デバッグ用（環境変数の確認）
    print("MAILGUN_DOMAIN:", os.getenv("MAILGUN_DOMAIN"))
    print("MAILGUN_API_KEY:", "EXISTS" if os.getenv("MAILGUN_API_KEY") else "MISSING")

    return app

