from flask import Blueprint, jsonify
import boto3
import os

main = Blueprint('main', __name__)

@main.route('/api/photos', methods=['GET'])
def get_photos():
    """S3から画像URLを取得してフロントに返す"""
    s3 = boto3.client(
        's3',
        aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
        aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
    )

    bucket_name = os.getenv('S3_BUCKET_NAME')
    photos = []

    try:
        response = s3.list_objects_v2(Bucket=bucket_name)
        print("S3 Response:", response)
        for obj in response.get('Contents', []):
            print("Object key:", obj)
            photo_url = f"https://{bucket_name}.s3.amazonaws.com/{obj['Key']}"
            photos.append(photo_url)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    return jsonify({'photos': photos})

