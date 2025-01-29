// Q11) Calculate average for each student
const input = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
    },
};
const averages = Object.entries(input).map(([student, scores]) => {
    const values = Object.values(scores);
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    return { [student]: { average } };
});
console.log(averages);