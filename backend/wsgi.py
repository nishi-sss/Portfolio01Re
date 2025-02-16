import os
from app import create_app

app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # ← ここが間違ってたら RIP😇
    app.run(debug=False, host="0.0.0.0", port=port)  # debug=False にして負荷軽減！

