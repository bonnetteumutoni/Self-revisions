#  Calculate string length.
word="Hello"
print(len(word))
print(word[::-1].lower())

#Count character frequency in a string.
def char_frequency(str1):
    # Initialize an empty dictionary named 'dict' to store character frequencies.
    dict = {}
    
    # Iterate through each character 'n' in the input string str1.
    for n in str1:
        # Retrieve the keys (unique characters) in the 'dict' dictionary.
        keys = dict.keys()
        
        # Check if the character 'n' is already a key in the dictionary.
        if n in keys:
            # If 'n' is already a key, increment its value (frequency) by 1.
            dict[n] += 1
        else:
            # If 'n' is not a key, add it to the dictionary with a frequency of 1.
            dict[n] = 1
    
    # Return the dictionary containing the frequency of each character in the input string.
    return dict

# Call the char_frequency function with the argument 'google.com' and print the result.
print(char_frequency('google.com')) 

# Write a Python program to get a string made of the first 2 and last 2 characters of a given string. If the string length is less than 2, return the empty string instead.
# Sample String : 'w3resource'
# Expected Result : 'w3ce'
# Sample String : 'w3'
# Expected Result : 'w3w3'
# Sample String : ' w'
# Expected Result : Empty String

def first_two_last_Char(string):
    for n in string:
        if len(string)==1:
            print("Empty String")
        elif len(string)==2:
            return string+string
        else:
            return string[0:2]+string[-2:]

print(first_two_last_Char("Fantacy"))
print(first_two_last_Char("wc"))
print(first_two_last_Char("wc"))
print(first_two_last_Char("b"))

# Write a Python program to get a string from a given string where all occurrences of its first char have been changed to '$', except the first char itself.
# Sample String : 'restart'
# Expected Result : 'resta$t'
def change_occurence(string):
    char=string[0]
    string=string.replace(char,"$")
    string=char+string[1:]
    return string
print(change_occurence("restart"))
print(change_occurence("bobb"))

# Write a Python program to get a single string from two given strings, separated by a space and swap the first two characters of each string.
# Sample String : 'abc', 'xyz'
# Expected Result : 'xyc abz'

def swapping_chars(string1,string):
    char=string1[-1]
    string1=string1[0:-1]+string[-1]
    string=string[0:-1]+char
    return string+" "+string1

print(swapping_chars("abc","xyz"))

# Write a Python program to add 'ing' at the end of a given string (length should be at least 3). If the given string already ends with 'ing', add 'ly' instead. If the string length of the given string is less than 3, leave it unchanged.
# Sample String : 'abc'
# Expected Result : 'abcing'
# Sample String : 'string'
# Expected Result : 'stringly'

def add_ing_or_ly(string):
    if len(string)>=3 and string[-3:]=="ing":
        return string + "ly"
    elif len(string)>=3 and string[-3:]!="ing":
        return string + "ing"
    else:
        return string

print(add_ing_or_ly("string"))
print(add_ing_or_ly("abc"))
print(add_ing_or_ly("Hi"))

# Write a Python program to find the first appearance of the substrings 'not' and 'poor' in a given string. If 'not' follows 'poor', 
# replace the whole 'not'...'poor' 
# substring with 'good'. Return the resulting string.
# Sample String : 'The lyrics is not that poor!'
# 'The lyrics is poor!'
# Expected Result : 'The lyrics is good!'
# 'The lyrics is poor!'

def not_poor(str1):
    snot = str1.find('not')
    spoor = str1.find('poor')
    if spoor > snot and snot > 0 and spoor > 0:
        str1 = str1.replace(str1[snot:(spoor+4)], 'good')
        return str1
    else:
        return str1
print(not_poor("World is not poor place to live on"))

# Develop a comprehensive disaster planning system that quickly allocates and deploys emergency resources in response to natural disasters or crises.
# This system must coordinate with multiple agencies, manage logistics of supplies and personnel effectively, and adapt to rapidly changing conditions on the ground.
# The goal is to maximize the efficiency of response efforts, cover essential needs promptly, and improve recovery times for affected communities.

def disaster_planning(disaster):
    key="emergency"
    disasters=["fire","earthquake","floods"]
    agencies={"fire":"Fire department","earthquake":"Earthquake agency","floods":"Flood department","emergency":"Emergency department"}
    supplies={"fire":"Extinguishers","earthquake":"First-aid","floods":"Life Jackets","emergency":"Oxygen masks"}
    if disaster in disasters:
        print(f"The disaster is {disaster} and agency is {agencies.get(disaster.lower())} and supplies are {supplies.get(disaster.lower())}")
    else:
        print(f"The disaster is {disaster} and agency is {agencies.get(key)} and supplies are {supplies.get(key)}")

disaster_planning("fire")
disaster_planning("Eruption")


