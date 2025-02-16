# ユーティリティ関数をまとめるファイル（必要なら使う）

def format_s3_url(bucket_name, key):
    """S3オブジェクトのURLをフォーマット"""
    return f"https://{bucket_name}.s3.amazonaws.com/{key}"


