from google.cloud import storage

def download_all_blobs(bucket_name, destination_folder):
    """Downloads all blobs from the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)

    blobs = bucket.list_blobs()
    for blob in blobs:
        # Extract the filename from the full blob path
        blob_filename = blob.name.split("/")[-1]

        # Construct the local destination path
        local_destination = f"{destination_folder}/{blob_filename}"

        # Download the blob
        blob.download_to_filename(local_destination)

        print(f'Blob {blob.name} downloaded to {local_destination}.')

# Replace these with your values
bucket_name = 'your-bucket-name'
destination_folder = 'local_destination_folder'

download_all_blobs(bucket_name, destination_folder)
