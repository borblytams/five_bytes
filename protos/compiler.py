# TODO
    # figure-out-how-to-count-characters-in-word           | A
    # based-on-character-number-return-word                | A
    # search_-about-some-easy-to-implement-compilers       | A
    # talk-with-mentor-about-helping-writing-me-a-compiler | A
    # read-about-input-stream-handling                     | A
    # seearch-about-imput-stream-hangling-libraries        | A
    # how-to-mark-string-in-language-characters            | A
    # read-about-programming-language-developement         | A
    # read-about-how-to-define-base-language-syntax        | A
    
# IN_PROGRESS
    # how-to-interate-in-list
    # practice-embedded-for-loops
# DONE


words = ["house" , "codecool" , "work" , "coffe" , "gingseng"]

# controller-modifiers
while_compiler_compiles = True

def under_test():
    while while_compiler_compiles:
        for language_char in language_characters:
            for language_char in language_characters:
                if language_char== "(": 
                    print("you started a sentence")
                if language_char== ")":
                    print("you finished a sentence")


def language_character_parser():
    language_characters   =  ['(',')']
    language_keywords     =  ['t','f', 'nil', 'bool', ]
    language_data_species =  []
    letter_guessed = str(input("please enter a letter ~>"))
    counter=0
    for letter_guessed in language_characters:
        if letter_guessed in language_characters:
            counter+=1
    if counter==len(language_characters):
        print("this is a lanugage character how to move foreward?")
    else:
        print("not a language character drop an error")


language_character_parser()