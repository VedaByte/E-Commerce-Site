# Python Text and Speech Translator

This Python script provides text translation and speech-to-text functionality. It utilizes the Googletrans and gTTS libraries for translation and text-to-speech conversion, respectively. Additionally, it employs Pygame for audio playback.

## Features:

- Translate text between multiple languages.
- Convert text to speech in various languages.
- Perform speech recognition to capture user input.

## Usage:

1. Install the required Python libraries:
   - `pip install speech_recognition`
   - `pip install googletrans`
   - `pip install gtts`
   - `pip install pygame`

2. Ensure you have a working microphone connected to your computer.

3. Run the script using the following command:

```
python main.py
```

4. Select whether you want to enter text or speak your input.

5. Choose the language for translation and speech conversion.

6. Enter your text or speak your input.

7. The script will translate the text and convert it to speech. It will then play the synthesized speech.

8. You can continue to translate and convert different text or speech inputs.

## Code Overview:

### 1. Importing Libraries:

```python
import speech_recognition as sr
from language import LANGUAGES_TRANSLATE, LANGUAGES_GTTS
from googletrans import Translator
from gtts import gTTS
import pygame
import os
```

- `speech_recognition`: Provides speech recognition capabilities.
- `language`: Contains language codes and supported languages for translation and text-to-speech conversion.
- `googletrans`: Facilitates text translation.
- `gtts`: Enables text-to-speech conversion.
- `pygame`: Used for audio playback.

### 2. Defining the `textOperation` Class:

```python
class textOperation():

    def __init__(self, lang: str|None) -> None:
        self.lang = lang.lower()

    def translate(self, text: str)->str:
        translator = Translator()
        translation = translator.translate(text=text, dest=LANGUAGES_TRANSLATE[self.lang])
        return translation.text

    def text2speech(self, text: str)->None:
        myobj = gTTS(text=text, lang=LANGUAGES_GTTS[self.lang], slow=False)
        myobj.save('result.mp3')


    def playAudio(self, file: str)->None:
        pygame.mixer.init()
        pygame.mixer.music.load(file)
        pygame.mixer.music.play()
        while pygame.mixer.music.get_busy():
            pygame.time.Clock().tick(10)
        pygame.mixer.quit()
        os.remove(os.path.join('./result.mp3'))
```

- This class handles text-related operations, including translation and text-to-speech conversion.

### 3. Defining the `speechOperation` Class:

```python
class speechOperation(textOperation):

    def __init__(self, lang: str | None) -> None:
        super().__init__(lang)
        self.lang = lang.lower()

    def spech2text(self) -> str:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            print('listening......')
            r.pause_threshold = 1
            audio = r.listen(source=source)
            try:
                print('recognizing......')
                query = r.recognize_google(audio, language='en-in')
                return query
            except Exception as e:
                print(e)
                return 'sorry we cannot understand'
```

- This class extends the `textOperation` class and adds speech recognition functionality.

### 4. Defining the `operation` Class:

```python
class operation():

    def __init__(self) -> None:
        self.txt = ''
        self.lang = ''

    def startOperation(self)->None:
        choice = int(input('ENTER EITHER YOU WANT TO WRITE(0) OR SPEAK(1): '))
        self.lang = input('ENTER THE LANGUAGE TO OPERATE: ')
        if(choice):
            s2t = speechOperation(lang=self.lang)
            self.txt = s2t.spech2text()
        else:
            self.txt = input('ENTER YOUR TEXT: ')

    def operation(self)->None:
        t2s = textOperation(lang=self.lang)
        txt = t2s.translate(text=self.txt)
        t2s.text2speech(text=txt)
        t2s.playAudio(file=os.path.join('./result.mp3'))
```

- This class handles the overall operation, including prompting the user for input, performing translation and text-to-speech conversion, and playing the synthesized speech.

### 5. Main Function:

```python
if __name__=='__main__':
    opt = operation()
    while True:
        opt.startOperation()
        opt.operation()
        choice = int(input('ENTER 1 FOR CONTINUE OR 0 FOR END: '))
        if(not choice):
            break
```

- This is the entry point of the script. It creates an instance of the `operation` class and enters a loop where the user can repeatedly translate and convert text or speech.

## Conclusion:

This Python script provides a comprehensive solution for text translation and speech-to-text operations. It offers a user-friendly interface and is straightforward to use. The script can be employed in various applications, such as language learning, translation tasks, and assistive technology.