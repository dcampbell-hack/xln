from fastapi import FastAPI, Response, Path
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
from typing import Union
from typing import Optional

# run app with
# uvicorn api:app --reload

app = FastAPI()

@app.get("/api/v1/")
def index():
    return "Get index"

# Sentiment Analysis
# Sentiment Analysis classifies text as positive or negative
@app.post("/api/v1/sentiment-analysis")
def sentiment_analysis(prompt: str ):
    classifier = pipeline("sentiment-analysis")
    output = classifier(prompt)
    return(output)

# Sentiment Analysis
# Sentiment Analysis classifies text as positive or negative
@app.post("/api/v1/sentiment-analysis/array")
def sentiment_analysis(prompt: Union[str, None ]):
    classifier = pipeline("sentiment-analysis")
    output = classifier(prompt)
    return(output)

# Zero Shot Classification
# The zero shot classification lets you select the label for classification
@app.post("/api/v1/zero-shot-classification")
def zero_shot_classification(prompt: str, labels: Union[str,None] ):
    classifier = pipeline("zero-shot-classification")
    output = classifier(prompt, candidate_labels=labels)
    return(output)

# Text Generation
# Text generation pipeline uses a input prompt to generate text
@app.post("/api/v1/text-generation")
def text_generation(prompt: str):
    classifier = pipeline("text-generation")
    output = classifier(prompt)
    return(output)

# Text Generation
# Use DistilGPT2 to generate text
@app.post("/api/v1/gpt2/text-generation")
def text_generation(prompt: str, maxLength: int, numSequences: int ):
    generator = pipeline("text-generation", model="distilgpt2")
    output = generator(
        prompt,
        max_length=maxLength,
        num_return_sequences=numSequences
        )
    return(output)

# NER
# The NER pipeline identifies elements such as person, location, and organization in a sentence
@app.post("/api/v1/ner")
def ner(prompt: str ):
    ner = pipeline("ner", grouped_entities=True)
    output = ner(prompt)
    return(output)

# Question and Answering
# The question answering pipeline extracts answers a question from a given context
@app.post("/api/v1/question/answer")
def question_answer(question: str, context: str ):
    question_answer = pipeline("question-answering")
    output = question_answer(
        question=question,
        context=context
    )
    return(output)

# Summarization
# Creates summaries of long text 
@app.post("/api/v1/summarization")
def summarization(prompt: str ):
    summarizer = pipeline("summarization")
    output = summarizer(prompt)
    return(output)

# Translator 
# The translation pipeline translates from one language to another
@app.post("/api/v1/translator")
def translator( prompt: str, language: str ):
    translator = pipeline("translation", model=language)
    output = translator(prompt)
    return(output)

