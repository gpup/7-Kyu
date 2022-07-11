//This is kinda cool logic. Need to read up on .repeat()

maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);