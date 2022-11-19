var command, current_value, hold, operation, operator, value;
hold = [];

function addUndo(temp) {
  hold.append(temp);
}

function removeUndo() {
  return hold.pop(-1);
}

current_value = prompt("enter your first number");
current_value = Number.parseFloat(current_value);

function display_cv() {
  console.log(` Current value ${current_value} `);
}

function execute_command(operator, value) {
  current_value;

  if (operator === "+") {
    current_value += value;
  } else {
    if (operator === "-") {
      current_value -= value;
    } else {
      if (operator === "/") {
        current_value /= value;
      } else {
        if (operator === "*") {
          current_value *= value;
        }
      }
    }
  }
}

display_cv();

while (true) {
  operation = prompt("enter your the value operation");

  if (operation === "") {
    break;
  }

  if (operation.lower() === "undo") {
    if (hold.length === 0) {
      console.log("Nothing is undo");
    } else {
      command = removeUndo();
      [operator, value] = command;

      if (operator === "+") {
        operator = "-";
      } else {
        if (operator === "-") {
          operator = "+";
        } else {
          if (operator === "*") {
            operator = "/";
          } else {
            if (operator === "*") {
              operator = "/";
            }
          }
        }
      }

      execute_command(operator, value);
    }
  } else {
    operator = operation[0];
    value = Number.parseFloat(operation.slice(1));
    command = [operator, value];
    addUndo(command);
    execute_command(operator, value);
  }

  display_cv();
}

console.log("program finnishied");
