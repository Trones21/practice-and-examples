def algorithm(inputStr):
    charList = list(inputStr)
    compStrand = ""
    for char in charList:
        if char == "A":
            compStrand += "T"
        elif char == "T":
            compStrand += "A"
        elif char == "C":
            compStrand += "G"
        elif char == "G":
            compStrand += "C"
        else:
            print("Bad char Found: " + char) 
    return compStrand[::-1]

savePath = 'C:\\Users\\trone\\Documents\\'
with open('C:\\Users\\trone\\Downloads\\rosalind_revc.txt', 'r') as f:
    text = f.read()   
    cleanText = text.replace('\n\t', '')
    answer = open(savePath + "answer.txt", 'w')
    answer.write(algorithm(cleanText))
    answer.close

