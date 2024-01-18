function generateRows() {
    // Clear existing rows
    document.getElementById('inputRows').innerHTML = '';

    // Get the number of subjects
    let numberOfSubjects = parseInt(document.getElementById('numberOfSubjects').value);

    // Generate rows dynamically based on the number of subjects
    for (let i = 1; i <= numberOfSubjects; i++) {
        // Create a row div
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        // Create GPA input
        let gpaInput = document.createElement('div');
        gpaInput.classList.add('col-md-6');
        gpaInput.innerHTML = `<label for="${i}gpa">Subject ${i} GPA</label>
                             <input class="form-control" id="${i}gpa" type="text" placeholder="Enter GPA">`;
        rowDiv.appendChild(gpaInput);

        // Create Credit Hours input
        let creditHoursInput = document.createElement('div');
        creditHoursInput.classList.add('col-md-6');
        creditHoursInput.innerHTML = `<label for="${i}creditHours">Subject ${i} Credit Hours</label>
                                     <input class="form-control" id="${i}creditHours" type="text" placeholder="Enter Credit Hours">`;
        rowDiv.appendChild(creditHoursInput);

        // Append the row to the container
        document.getElementById('inputRows').appendChild(rowDiv);
    }
}

function calculateCGPA() {
    // Initialize variables for the sum of (GPA * Credit Hours) and total Credit Hours
    let sumGpaCreditHours = 0;
    let totalCreditHours = 0;
    let hasInvalidInput = false;

    // Loop through rows dynamically based on the number of subjects
    for (let i = 1; i <= 10; i++) {
        // Get GPA and Credit Hours values
        let gpaInput = document.getElementById(i + 'gpa');
        let creditHoursInput = document.getElementById(i + 'creditHours');

        // Check if both GPA and Credit Hours inputs exist
        if (gpaInput && creditHoursInput && gpaInput.value && creditHoursInput.value) {
            let gpa = parseFloat(gpaInput.value) || 0;
            let creditHours = parseInt(creditHoursInput.value) || 0;

            // Check for valid inputs
            if (isNaN(gpa) || isNaN(creditHours)) {
                hasInvalidInput = true;
                break;
            }

            // Update sum and total
            sumGpaCreditHours += gpa * creditHours;
            totalCreditHours += creditHours;
        } else {
            // Exit the loop if either GPA or Credit Hours input is missing
            break;
        }
    }

    // Check if there are valid inputs for calculation
    if (!hasInvalidInput && totalCreditHours > 0) {
        // Calculate CGPA
        let cgpa = sumGpaCreditHours / totalCreditHours;

        // Display the result
        document.getElementById('result').innerText = `Your SGPA is: ${cgpa.toFixed(2)}`;
    } else {
        // Display an error message if there are no valid inputs
        document.getElementById('result').innerText = `Please enter valid GPA and Credit Hours values.`;
    }
}
