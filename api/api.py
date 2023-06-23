# uvicorn main:app
# uvicorn main:app --reload

from fastapi import FastAPI, Response, Path, FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse;
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
from decouple import config
import openai;
from typing import Union
from typing import Optional

# Custom Function Imports
from functions.database import store_messages, reset_messages
from functions.openai_requests import convert_audio_to_text, get_chat_response
from functions.text_to_speech import convert_text_to_speech


# run app with
# uvicorn api:app --reload

app = FastAPI()

# CORS - Origins
origins = [ 
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:4173",
    "http://localhost:4174",
     "http://localhost:3000",
]

# CORS Middleware 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/v1/")
def index():
    return "Get index"

# Check health
@app.get("/health")
async def check_health():
    return {"message": "healthy"}

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

# Reset Messages
@app.get("/reset")
async def reset_conversation():
    reset_messages()
    return {"message": "converstion reset"}


# Get saved audio
@app.post("/post-audio/")
async def post_audio(file: UploadFile = File(...)):
    # Get saved audio
    # audio_input = open("voice.mp3", "rb")
    # Save file from frontend
    with open(file.filename, "wb") as buffer:
        buffer.write(file.file.read())
    audio_input = open(file.filename, "rb")

    # Decode audio
    message_decoded = convert_audio_to_text(audio_input)
    
    # Guard: Ensure message decode
    if not message_decoded: 
        return HTTPException(status=400, detail="Failed to decode audio")
 
    # Get ChatGPT response
    chat_response = get_chat_response(message_decoded)

    # Guard: Ensure chat response
    if not chat_response: 
        return HTTPException(status=400, detail="Failed to get chat response")

    # Store messages
    store_messages(message_decoded, chat_response)

    # Convert chat response to audio
    audio_output = convert_text_to_speech(chat_response)

     # Guard: Ensure audio output
    if not audio_output: 
        return HTTPException(status=400, detail="Failed to get Eleven Labs audio response")
    
    # Generator that yields chunks of data
    def iterfile():
        yield audio_output

    # Return audio file
    return StreamingResponse(iterfile(), media_type="application/octet-stream")

