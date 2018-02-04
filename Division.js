class Division {
    run (FirstNum, SencondNum) {
        if (SencondNum === 0) {
            throw new Error('Division by zero');
        } else {
            return FirstNum/SencondNum;
        }
    }
}

module.exports = Division;