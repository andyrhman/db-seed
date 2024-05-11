export function generateStudentID() {
    // Generate the year part: random years between 2021 and 2023
    const year = Math.floor(Math.random() * 3) + 21;  // Last two digits of the year
    
    // Generate the department code: random codes between 01 and 04
    const department = Math.floor(Math.random() * 4) + 1;
    const departmentCode = department.toString().padStart(2, '0');

    // Generate a sequence: random numbers between 0101 and 0707
    const sequence = Math.floor(Math.random() * (707 - 101 + 1)) + 101;
    const sequenceCode = sequence.toString().padStart(4, '0');

    // Generate a random number: random numbers between 0001 and 9999
    const randomNumber = Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
    const randomCode = randomNumber.toString().padStart(4, '0');

    return `${year}${departmentCode}${sequenceCode}${randomCode}`;
}

// Generate and print 10 random student IDs
for (let i = 0; i < 10; i++) {
    console.log(generateStudentID());
}
