import os
from app import create_app

app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Herokuの$PORTを取得
    app.run(debug=True, host="0.0.0.0", port=port)

