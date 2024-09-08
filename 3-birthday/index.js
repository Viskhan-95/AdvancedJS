

const validateAge = birthday => {
    const dateOfBirth = new Date(birthday);

    if (isNaN(dateOfBirth)) {
        return false;
    }

    const today = new Date();
    
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();
    const dayDifference = today.getDate() - dateOfBirth.getDate();

    if(age === 14) {
        if(monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
    }

    return age >= 14;
}

console.log(validateAge('2013-10-0h1'));
console.log(validateAge("2010-09-09"));
console.log(validateAge("2005-09-07"));