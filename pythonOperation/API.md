# VedaByte Bharat Hackathon Project

## Project Overview

This project is created for the Bharat Hackathon by Team VedaByte. It is a language translation tool that allows users to translate text or audio from one language to another. The tool also provides text-to-speech functionality, allowing users to hear the translation in the target language.

## Features

* Text translation: Translate text from one language to another.
* Audio translation: Translate audio from one language to another.
* Text-to-speech: Convert translated text into audio.

## How to Use

### Text Translation

To translate text, simply send a POST request to the `/text/` endpoint with the following parameters:

* `txt`: The text to be translated.
* `lang`: The language code of the target language.

The endpoint will return a JSON response with the translated text.

### Audio Translation

To translate audio, simply send a POST request to the `/voice/` endpoint with the following parameters:

* `audio`: The audio file to be translated.
* `lang`: The language code of the target language.

The endpoint will return a JSON response with the translated text.

### Text-to-Speech

To convert translated text into audio, simply send a POST request to the `/text2speech/` endpoint with the following parameter:

* `text`: The text to be converted into audio.

The endpoint will return a JSON response with the audio file.

## Requirements

* Python 3.6 or higher
* FastAPI
* NumPy
* TensorFlow
* PyTorch
* ffmpeg

## Installation

To install the required dependencies, run the following command:

```
pip install -r requirements.txt
```

## Usage

To run the project, simply run the following command:

```
uvicorn main:app --host 0.0.0.0 --port 8000
```

The project will then be accessible at `http://0.0.0.0:8000`.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/Vedabyte-Official/BHARATH-HACKATHON/blob/main/CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Vedabyte-Official/BHARATH-HACKATHON/blob/main/LICENSE) file for more details.