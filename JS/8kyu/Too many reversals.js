// You are an up and coming commentator in the brutal world of pro wrestling. However, you suck at telling who reversed the reversal.

// You will be provided with a string in the format of : "X hit a reversal to Y hit a reversal to X...... hit a reversal to (X/Y)"

// Rules:

// •The string starts and ends with the respective names of the wrestlers (Not necessary that the starting and ending names be the same).

// •Input will always be validated.

// •X and Y will either be letters or single words.

// Determine and return the victor of the match.

// Be careful. Your job is on the line!

function whowon(s) {

    // Split the string by the action phrase to isolate the names
    const wrestlers = s.split(" hit a reversal to ");
    
    // The winner is the one who hit the final successful reversal
    // which is the second-to-last element in the sequence
    return wrestlers[wrestlers.length - 2];
}
