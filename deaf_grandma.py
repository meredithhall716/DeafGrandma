from operator import truediv


def deaf_grandma():
    words = True
    goodbyes = 0

    while(words):
        user_input = input("Hey Kid!")

        if user_input == "":
            input("WHAT!?")
        elif user_input.upper() != user_input:
            input("SPEAK UP, KID!")
        elif user_input == "GOODBYE!":
            goodbyes += 1
            if(goodbyes == 1):
                input("LEAVING SO SOON?")
            elif(goodbyes == 2):
                input("LATER SKATER!")
                words == False
        elif user_input.upper() == user_input:
            input("NO, NOT SINCE 1946!")



deaf_grandma()
