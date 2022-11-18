hold = []

def addUndo(temp):
    hold.append(temp)

def removeUndo():
    return hold.pop(-1)




current_value = input("enter your first number")
current_value = float(current_value)

def display_cv():
    print(f' Current value {current_value} ')


def execute_command(operator , value):
    global current_value
    if operator == "+":
        current_value+= value
    elif operator == "-":
        current_value-= value
    elif operator == "/":
        current_value/= value
    elif operator == "*":
        current_value*= value
    
    
display_cv()

while True:
    operation = input("enter your the value operation")
    if operation == "":
        break
    
    if operation.lower() == "undo":
        if(len(hold)) == 0:
           print("Nothing is undo")
        else:
           command = removeUndo()
           operator , value = command
           
           if operator == "+":
               operator = "-"
           elif operator == "-":
               operator = "+"
           elif operator =="*":
               operator = "/"
           elif operator =="*":
               operator = "/"           
           execute_command(operator,value)
           
  
    else:  
        operator = operation[0]
        value = float(operation[1:])
        command = (operator , value)
        addUndo(command)
        execute_command(operator , value)
    
    display_cv()
print("program finnishied")
    
    
    