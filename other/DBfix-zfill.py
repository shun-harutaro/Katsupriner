from google.cloud import firestore

# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()

def DB(num):
    root = db.collection(num)
    docs = root.stream()
    for doc in docs:
        docId = doc.id
        if len(docId)==1:
            inner = doc.to_dict()
            print(f'{docId} => {inner}')
            setData = root.document(str(docId).zfill(2))
            setData.set(inner)
            delData = root.document(docId)
            delData.delete()

# main function
def main():
    for i in range(1,x):
        DB(f'2i{str(i).zfill(2)}')
    for i in range(1,y):
        DB(f'2m{str(i).zfill(2)}')

main()