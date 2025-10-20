const getTicketPrice = (age, isMember) => {

    if (age < 18) {
        return 'you are too young';
    }
    if (age > 65) {
        return 'you are too old';
    }

    if (isMember) {
        return 'you have to have to pay you are god';
    }

    return 'you have to pay for the ticket';

}

console.log(`age 12, member: true -> ${getTicketPrice(12, true)}`);