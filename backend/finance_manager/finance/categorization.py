import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

descriptions = ["Salary for October", "Grocery shopping", "Monthly rent", "Freelance work"]
categories = ["Salary", "Food", "Rent", "Freelance"]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(descriptions)

model = MultinomialNB()
model.fit(X, categories)

with open("vectorizer.pkl", "wb") as vec_file, open("model.pkl", "wb") as model_file:
    pickle.dump(vectorizer, vec_file)
    pickle.dump(model, model_file)

def categorize_transaction(description):
    with open("vectorizer.pkl", "rb") as vec_file, open("model.pkl", "rb") as model_file:
        vectorizer = pickle.load(vec_file)
        model = pickle.load(model_file)
    
    X_new = vectorizer.transform([description])
    return model.predict(X_new)[0]
